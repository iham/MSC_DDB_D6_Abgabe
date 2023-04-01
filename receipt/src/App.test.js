import { render, screen } from '@testing-library/react';
import App from './App';

test('renders receipt', () => {
  render(<App />);
  const textElement = screen.getByText(/receipt/i);
  expect(textElement).toBeInTheDocument();
});
