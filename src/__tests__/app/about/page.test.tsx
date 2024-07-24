import { render, screen } from '@testing-library/react';
import { beforeAll, describe, expect, test } from 'vitest';

import Page from '@/app/about/page';

describe('About page', () => {
  beforeAll(() => {
    render(<Page />);
  });

  test('renders the heading', () => {
    expect(screen.getByRole('heading', { level: 1, name: 'About' })).toBeDefined();
  });

  test('renders the link', () => {
    const homePageLink = screen.getByRole('link', { name: 'HomePage' });
    expect(homePageLink).toBeInTheDocument();
    expect(homePageLink).toHaveAttribute('href', '/');
  });
});
