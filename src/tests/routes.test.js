import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/store';
import Details from '../routes/Details';
import Home from '../routes/Home';
import Error from '../routes/Error';

describe('Test for routes', () => {
  it('Details page renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <Details />
          </BrowserRouter>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Home page renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <Home />
          </BrowserRouter>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Error page renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Error />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
