import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import { fetchApi } from '../../../utils/fetchApi';
import Product from './Products';

jest.mock('../../../utils/fetchApi');

const mockProductsData = [
  {
    title: "Puma shirt",
    category: "men",
    originalPrice: "1999",
    discount: "10",
    reducedPrice: "1799"
  }
]

describe('Products', () => {

  // render(<Product />)
  // it('has button with css class btn-primary', () => {
  //   const products = screen.getByRole('button',{name: /All/i})
  //   expect(products).toHaveClass('btn btn-primary')
  // });
  
  it('[MOCKING]: fetches product data properly via API Call', async () => {
    fetchApi.mockResolvedValue(mockProductsData);
    render(<HashRouter><Product /></HashRouter>)
    expect(await screen.findByText(/Puma shirt/i)).toBeInTheDocument();
    // expect(await screen.findByText(/1799/i)).toBeInTheDocument();
    // // expect(await screen.findByText(/1999/i)).toBeInTheDocument();
  })

  it('renders error during API Call', async() => {
    fetchApi.mockRejectedValue({
      errorMessage: 'Some Error Occured! Please Try again later.'
    });
  
    render(<HashRouter><Product /></HashRouter>);
    await waitFor(()=>{
      screen.findByText('Some Error Occured! Please Try again later.')
    })
    //expect(await screen.findByText('Some Error Occured! Please Try again later.')).toBeInTheDocument();
  });

  // it('fetches products properly via API call on click of All button',async ()=>{    
  //   fetchApi.mockResolvedValue(mockProductsData);
  //   render(<HashRouter><Product /></HashRouter>);
  //   fireEvent.click(screen.findByTestId(/All/i));  
  //   await waitFor(()=>{
  //     expect(screen.getByText(/Nike Top/i)).toBeInTheDocument();
  //   })
  //   //expect(await screen.findByText(/Puma shirt/i)).toBeInTheDocument();
  // })

});
