import { type ReactNode } from 'react';
import './Card.scss';

interface CardProps {
  image?: string;
  imageAlt?: string;
  imageWidth?: number | string;
  imageHeight?: number | string;
  title?: string;
  subtitle?: string;
  children?: ReactNode;
  footer?: ReactNode;
  hoverable?: boolean;
  className?: string;
  onClick?: () => void;
}

/**
 * Renders a content card with optional media, body, and footer slots.
 * @param props Card content and interaction options.
 * @returns Card container element.
 */
const Card = ({
  image,
  imageAlt = '',
  imageWidth,
  imageHeight,
  title,
  subtitle,
  children,
  footer,
  hoverable = false,
  className = '',
  onClick,
}: CardProps) => {
  const cardClass = [
    'card',
    hoverable ? 'card--hoverable' : '',
    onClick ? 'card--clickable' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const CardTag = onClick ? 'article' : 'div';

  return (
    <CardTag
      className={cardClass}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={
        onClick
          ? (e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onClick();
              }
            }
          : undefined
      }
    >
      {image && (
        <div className="card__media">
          <img 
            className="card__image" 
            src={image} 
            alt={imageAlt || 'Card image'} 
            loading="lazy" 
            width={imageWidth || 640} 
            height={imageHeight || 360} 
          />
        </div>
      )}

      <div className="card__body">
        {title && <h3 className="card__title">{title}</h3>}
        {subtitle && <p className="card__subtitle">{subtitle}</p>}
        {children && <div className="card__content">{children}</div>}
      </div>

      {footer && <div className="card__footer">{footer}</div>}
    </CardTag>
  );
};

export default Card;
