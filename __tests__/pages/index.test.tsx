import Home from '@/app/page';
import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';

describe('Home page', () => {
  it('Hello world renders', () => {
    render(<Home />);
    expect(screen.getByText('Hello world')).toBeInTheDocument();
  });
});
