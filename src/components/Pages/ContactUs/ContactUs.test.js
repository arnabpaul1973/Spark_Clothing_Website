import { render, screen, waitFor } from '@testing-library/react';
import { fetchApi } from '../../../utils/fetchApi';
import Contact from './Contact';

jest.mock('../../../utils/fetchApi');

describe('Contact', () => {
it('[MOCKING]: fetches contact address properly via API Call', async () => {
  // prepare the mock data for users
  const mockContactList = [
    {
      address: '280 ParK Avenue Z,Cross cut Complex, Bangalore, India'
    }
  ]

  fetchApi.mockResolvedValue(mockContactList);
  render(<Contact />)
  expect(await screen.findByText(/280 ParK Avenue Z,Cross cut Complex, Bangalore, India/i)).toBeInTheDocument();
})

it('[MOCKING]: fetches contact email properly via API Call', async () => {
  // prepare the mock data for users
  const mockContactList = [
    {
      email: 'contact@sparkclothing.com'
    }
  ]

  fetchApi.mockResolvedValue(mockContactList);
  render(<Contact />)
  expect(await screen.findByText(/contact@sparkclothing.com/i)).toBeInTheDocument();
})

// if API fails to connect then negative test case

it('renders error during API Call', async() => {
  fetchApi.mockRejectedValue({
    errorMessage: 'Some Error Occured! Please Try again later.'
  });

  render(<Contact />);
  await waitFor(()=>{
    screen.findByText('Some Error Occured! Please Try again later.')
  })
  //expect(await screen.findByText('Some Error Occured! Try again later.')).toBeInTheDocument();
});

it(`has an input with 'Enter Your Name' as placeholder text`, () => {
  render(<Contact />)
  expect(screen.getByPlaceholderText('Enter name')).toBeTruthy();
});

it(`has an input with 'Enter Your mail' as placeholder text`, () => {
  render(<Contact />)
  expect(screen.getByPlaceholderText('Enter mail')).toBeTruthy();
});

it(`has an input with 'Enter Your phone number' as placeholder text`, () => {
  render(<Contact />)
  expect(screen.getByPlaceholderText('Enter phone number')).toBeTruthy();
});

it(`has an input with 'Enter Your message' as placeholder text`, () => {
  render(<Contact />)
  expect(screen.getByPlaceholderText('Enter message')).toBeTruthy();
});

  it("has 'Get In Touch' text" , () => {
    render(<Contact />);
    const h1Element = screen.getByText(/Get In Touch/i);
    expect(h1Element).toBeInTheDocument();
  });

  it('has button with css class btn btn-primary', () => {
    render(<Contact />);
    const contacts = screen.getByTestId('submitBtn')
    expect(contacts).toHaveClass('btn btn-primary')
  });
})
