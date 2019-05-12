import * as React from 'react';
import { shallow } from 'enzyme';
import MoyoDrum from '../../src/moyo/MoyoDrum';
import DrumPlayerContainer from '../../src/container/DrumPlayerContainer';
import { MoyoScales } from '../../src/moyo/Scales';
import { DrumConfig } from '../../src/moyo/DrumConfig';

describe('Application', () => {
  it('Should be rendered', () => {
    const defaultDrumConfig: DrumConfig = {
      scaleName: 'A minor',
      imagePath: 'dummy_path.png',
      tongues: [],
    };
    const wrapper = shallow(<DrumPlayerContainer />);
    expect(wrapper.containsAllMatchingElements([<MoyoDrum drumConfig={defaultDrumConfig} />])).toBeTruthy();
  });
});
