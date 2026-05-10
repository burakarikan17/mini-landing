import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import Accordion from '../src/components/Accordion/Accordion';

const items = [
  { id: '1', title: 'Soru 1', content: 'Cevap 1' },
  { id: '2', title: 'Soru 2', content: 'Cevap 2' },
];

describe('Accordion', () => {
  it('renders all titles', () => {
    render(<Accordion items={items} />);
    expect(screen.getByText('Soru 1')).toBeInTheDocument();
    expect(screen.getByText('Soru 2')).toBeInTheDocument();
  });

  it('panels are collapsed by default', () => {
    render(<Accordion items={items} />);
    const buttons = screen.getAllByRole('button');
    expect(buttons[0]).toHaveAttribute('aria-expanded', 'false');
    expect(buttons[1]).toHaveAttribute('aria-expanded', 'false');
  });

  it('opens panel on click', async () => {
    const user = userEvent.setup();
    render(<Accordion items={items} />);
    const button = screen.getAllByRole('button')[0];
    await user.click(button);
    expect(button).toHaveAttribute('aria-expanded', 'true');
  });

 it('renders with a panel open by default', () => {
    render(<Accordion items={items} defaultOpen={['1']} />);
    const buttons = screen.getAllByRole('button');
    expect(buttons[0]).toHaveAttribute('aria-expanded', 'true');
    expect(buttons[1]).toHaveAttribute('aria-expanded', 'false');
  });
});