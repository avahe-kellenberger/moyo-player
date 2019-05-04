import * as React from 'react';
import * as ReactDOM from 'react-dom';
import MoyoDrum from './moyo/MoyoDrum';
import { Scales } from './moyo/Scales';

const root: HTMLElement | null = document.getElementById('root');

const testImage: HTMLImageElement = new Image();
ReactDOM.render(<MoyoDrum scale={Scales.A_MINOR} image={testImage} />, root);
