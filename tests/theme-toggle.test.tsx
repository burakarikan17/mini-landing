import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import ThemeToggle from '../src/components/ThemeToggle/ThemeToggle';

describe('ThemeToggle', () => {
  it('renders a toggle button', () => {
    render(<ThemeToggle />);

    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
