import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Enzyme, { shallow ,mount, render } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
// });
Enzyme.configure({ adapter: new Adapter() });

describe('renders without crashing components App', () => {

//   it('should render App', () => {
//     expect(mount(<App />).find('Router').length).toBe(1);
// })

it('should render App', () => {
  expect(mount(<App />).find('Provider').length).toBe(1);
})
})
