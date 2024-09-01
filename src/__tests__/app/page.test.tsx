import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';

import Home from '@/app/page';

test('renders the Home component', () => {
  render(<Home />);
  const mainElement = screen.getByRole('main');
  expect(mainElement).toBeInTheDocument();
});
