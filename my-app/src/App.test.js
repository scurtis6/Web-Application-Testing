import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Display from './components/Display';
import '@testing-library/jest-dom/extend-expect';
import Dashboard, { addBall, addStrike } from './components/Dashboard';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Baseball Tracke/i);
  expect(linkElement).toBeInTheDocument();
});
 test('renders display component', () => {
   const { getByText } = render(<Display />);
   const displayElement = getByText(/strikes/i);
   expect(displayElement).toBeInTheDocument();
 });

 test('renders dashboard component', () => {
  const { getByText } = render(<Dashboard />);
  const dashboardElement = getByText(/foul/i);
  expect(dashboardElement).toBeInTheDocument();
});

// describe('ball and strikes reset to 0 properly', () => {
//   it('balls resets to 0', () => {
//     const expected = 0;
//     const addballs = 3;
//     const actual = addBall(addballs);
//     expect(actual).toBe(expected);
//   })
// })