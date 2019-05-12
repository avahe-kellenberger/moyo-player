import * as React from 'react';
import * as ReactDOM from 'react-dom';
import MoyoDrum from './moyo/MoyoDrum';
import { MoyoScales } from './moyo/Scales';
import { DrumConfig } from './moyo/DrumConfig';
import { DrumPlayerContainer } from './container/DrumPlayerContainer';

const root: HTMLElement | null = document.getElementById('root');

const defaultDrumConfig: DrumConfig = {
  scaleName: 'A minor',
  imagePath: 'dummy_path.png',
  tongues: [],
};

ReactDOM.render(<DrumPlayerContainer drumConfigs={[defaultDrumConfig]} />, root);
