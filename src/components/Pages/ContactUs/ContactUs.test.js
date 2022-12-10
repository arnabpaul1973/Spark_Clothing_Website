import {render , screen, waitFor} from '@testing-library/react';
import { fetchApi } from '../../../utils/fetchApi';
import Contact from './Contact';

jest.mock('../../../utils/fetchApi');

it('[MOCKING]: fetches contact address properly via API Call', async() => {
  // prepare the mock data for users
  const mockContactList = [
    {
      address : '280 ParK Avenue Z,Cross cut Complex, Bangalore, India',
      email : 'contact@sparkclothing.com'
    }
  ];
    fetchApi.mockResolvedValue(mockContactList);
    render(<Contact />)
    expect(await screen.findByText(/280 ParK Avenue Z,Cross cut Complex, Bangalore, India/i)).toBeInTheDocument();
  })

  it('[MOCKING]: renders error properly during API Call', async() => {
    fetchApi.mockRejectedValue({
      errorCode: '101',
      errorMessage: 'Some Error Occured! Please Try again later.'
    });
  
    render(<Contact />);
    expect(await screen.findByText(/Some Error Occured! Try again later./i)).toBeInTheDocument();
  });