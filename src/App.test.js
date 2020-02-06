import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import  allReducers from './reducers';
import { createStore, combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';
const store = createStore(allReducers);

test('renders learn react link', () => {
  const { getByText } = render(<Provider store={store} >
    <App />
  </Provider>
);
  const linkElement = getByText(/Visual Regression Testing is pretty awesome!/i);
  expect(linkElement).toBeInTheDocument();
});
