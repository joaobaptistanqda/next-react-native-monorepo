
import 'react-native';
import App from '../App';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  jest.useFakeTimers();
  renderer.create(<App/>);
  jest.runOnlyPendingTimers();
});
