import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import RocketCard from '../components/Rockets/RocketCard';
import Rockets from '../components/Rockets/Rockets';

describe('Rockets', () => {
  it('RocketCard component is rendered correctly', () => {
    const rocketCard = render(
      <Provider store={store}>
        <RocketCard />
      </Provider>,
    );
    expect(rocketCard).toMatchSnapshot();
  });

  it('Rockets component rendered correctly', () => {
    const rockets = render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );
    expect(rockets).toMatchSnapshot();
  });
});
