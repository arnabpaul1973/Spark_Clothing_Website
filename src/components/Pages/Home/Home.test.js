import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Home', () => {
  it("has 'Welcome To Spark Clothing' text" , () => {
    //Act
    render(<Home />);
    // using regex to find the text with case insensitive
    const h1Element = screen.getByText(/Welcome To Spark Clothing/i);
    //Assert
    expect(h1Element).toBeInTheDocument();
  });
})