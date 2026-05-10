import { useState, useRef, useEffect, useId, type ReactNode } from 'react';
import './Accordion.scss';

interface AccordionItem {
  id: string;
  title: string;
  content: ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  single?: boolean;
  defaultOpen?: string[];
  className?: string;
}

/**
 * Renders an accordion with single or multiple open panel behavior.
 * @param props Accordion items and state behavior options.
 * @returns Accordion container.
 */
const Accordion = ({
  items,
  single = false,
  defaultOpen = [],
  className = '',
}: AccordionProps) => {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set(defaultOpen));
  const baseId = useId();

  const toggle = (id: string) => {
    setOpenItems((prev) => {
      const next = new Set(single ? [] : prev);
      if (prev.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const wrapperClass = ['accordion', className].filter(Boolean).join(' ');

  return (
    <div className={wrapperClass}>
      {items.map((item) => {
        const isOpen = openItems.has(item.id);
        const headerId = `${baseId}-header-${item.id}`;
        const panelId = `${baseId}-panel-${item.id}`;

        return (
          <AccordionPanel
            key={item.id}
            item={item}
            isOpen={isOpen}
            headerId={headerId}
            panelId={panelId}
            onToggle={() => toggle(item.id)}
          />
        );
      })}
    </div>
  );
};

interface AccordionPanelProps {
  item: AccordionItem;
  isOpen: boolean;
  headerId: string;
  panelId: string;
  onToggle: () => void;
}

const AccordionPanel = ({ item, isOpen, headerId, panelId, onToggle }: AccordionPanelProps) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [isOpen, item.content]);

  return (
    <div className={`accordion__item ${isOpen ? 'accordion__item--open' : ''}`}>
      <button
        id={headerId}
        className="accordion__trigger"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
        type="button"
      >
        <span className="accordion__title">{item.title}</span>
        <span className="accordion__icon" aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
      </button>

      <div
        id={panelId}
        className="accordion__panel"
        role="region"
        aria-labelledby={headerId}
        style={{ maxHeight: isOpen ? `${height}px` : '0px' }}
      >
        <div ref={contentRef} className="accordion__content">
          {item.content}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
