import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Dragon from '../components/Dragons/Dragon';
import Dragons from '../components/Dragons/Dragons';

describe('Dragons', () => {
  it('Dragon component is rendered correctly', () => {
    const dragon = render(
      <Provider store={store}>
        <Dragon />
      </Provider>,
    );
    expect(dragon).toMatchSnapshot();
  });

  it('Dragons component rendered correctly', () => {
    const dragons = render(
      <Provider store={store}>
        <Dragons />
      </Provider>,
    );
    expect(dragons).toMatchSnapshot();
  });
});
