import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Routes from './../router'

class App extends React.Component {

  button = null;
  render() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}
}

export default App;

