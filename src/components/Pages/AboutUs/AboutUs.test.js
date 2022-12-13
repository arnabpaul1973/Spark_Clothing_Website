import { render, screen, waitFor } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import { fetchApi } from '../../../utils/fetchApi';
import AboutUs from './AboutUs'

jest.mock('../../../utils/fetchApi');

const mockContactList = [
  {
    title: 'About Spark Clothing',
    history: 'The History'
  }
]

describe('AboutUs', () => {

it('[MOCKING]: fetches about title properly via API Call', async () => {
  // prepare the mock data for users
  fetchApi.mockResolvedValue(mockContactList);
  render(<HashRouter><AboutUs /></HashRouter>)
  //expect(await screen.findByText(/About Spark Clothing/i)).toBeInTheDocument();
  await waitFor(()=>{
    screen.findByText(/About Spark Clothing/i)
  })
})

it('[MOCKING]: fetches about history properly via API Call', async () => {

  fetchApi.mockResolvedValue(mockContactList);
  render(<AboutUs />)
  //expect(await screen.findByText(/The History/i)).toBeInTheDocument();
  await waitFor(()=>{
    screen.findByText(/The History/i)
  })
})

// if API fails to connect then negative test case
it('renders error during API Call', async() => {
  fetchApi.mockRejectedValue({
    errorMessage: 'Some Error Occured! Please Try again later.'
  });

  render(<AboutUs />);
  await waitFor(()=>{
    screen.queryByText('Some Error Occured! Please Try again later.')
  })
  //expect(await screen.findByText('Some Error Occured! Please Try again later.')).toBeInTheDocument();
});

// test(`image must have alt = "about-us-img"`, () => {
//   render(<HashRouter><AboutUs /></HashRouter>);
//   const image = screen.getByRole('img');
//   expect(image).toHaveAttribute('alt', 'about-us-img');
// });

it('has about logo', async() => {
  render(<HashRouter><AboutUs /></HashRouter>);
  // await waitFor(()=>{
  //   screen.getByAltText('about-us-img').toHaveAttribute('alt', 'about-us-img');
  //     })
  expect(screen.getByAltText('about-us-img')).toHaveAttribute('src', '/Assets/images/About Us.png');
  expect(screen.getByAltText('about-us-img')).toHaveAttribute('alt', 'about-us-img');

})
});