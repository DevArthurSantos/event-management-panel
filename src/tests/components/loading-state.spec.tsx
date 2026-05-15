import LoadingEventState from '@components/feedback/loadings/LoadingEventState';
import { render, screen } from '@testing-library/react';

import { describe, expect, it } from 'vitest';


describe('LoadingState', () => {
  it('should render loading text', () => {
    render(<LoadingEventState />);

    expect(
      screen.getByText(
        'Carregando evento...',
      ),
    ).toBeInTheDocument();
  });
});