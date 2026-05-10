import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Modal from '../src/components/Modal/Modal';

describe('Modal', () => {
  it('renders dialog content when open', () => {
    render(
      <Modal isOpen onClose={() => {}} title="Test Modal">
        Modal body
      </Modal>
    );

    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByText('Modal body')).toBeInTheDocument();
    expect(screen.getByText('Test Modal')).toBeInTheDocument();
  });
});
