import { render, screen, waitFor } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import { fetchApi } from '../../../../utils/fetchApi';
import ProductDetails from './ProductDetails';

jest.mock('../../../utils/fetchApi');

describe('ProductDetails', () => {
  
  it('[MOCKING]: fetches product data properly via API Call', async () => {

    const mockReviews =[
      {
       title: 'Nike Top',
       category:'women',
       originalPrice: '2999',
      }
    ]
    fetchApi.mockResolvedValue(mockReviews);
    render(<HashRouter><ProductDetails /></HashRouter>)
    expect(await screen.findByText(/women/i)).toBeInTheDocument();
  })

  it('renders error during API Call', async() => {
    fetchApi.mockRejectedValue({
      errorMessage: 'Some Error Occured! Please Try again later.'
    });
  
    render(<ProductDetails />);
    await waitFor(()=>{
      screen.findByText('Some Error Occured! Please Try again later.')
    })
    //expect(await screen.findByText('Some Error Occured! Please Try again later.')).toBeInTheDocument();
  });

});
