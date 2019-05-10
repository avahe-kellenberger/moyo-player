import * as React from 'react';
import App from '../../src/app/App';
import { shallow } from 'enzyme';
import MoyoDrum from '../../src/moyo/MoyoDrum';
import { MoyoScales } from '../../src/moyo/Scales';

describe('Application', () => {
  it('Should be rendered', () => {
    const wrapper = shallow(<App />);
    expect(
      wrapper.containsAllMatchingElements([
        <MoyoDrum scale={MoyoScales.LOW_A_MINOR} imagePath="dummy_path.png" />
      ])
    ).toBeTruthy();
  });
});
