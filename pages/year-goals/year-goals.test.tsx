import YearGoalsPage from './year-goals';
import { render, screen } from '@testing-library/react';
import { test } from '@jest/globals';
import '@testing-library/jest-dom';

beforeEach(() => render(<YearGoalsPage />));

test('Renders Title', () => {
  const title = screen.getByText('Year Goals');
});

test('Renders Link', () => {
  const link = screen.getByText('Back to home page');
});
