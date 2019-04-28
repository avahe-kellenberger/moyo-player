import * as React from "react";
import * as ReactDOM from "react-dom";

import App from "./app/App";
import MoyoDrum from './moyo/MoyoDrum';

const root: HTMLElement | null = document.getElementById("root");

const testImage: HTMLImageElement = new Image();

ReactDOM.render(<MoyoDrum key="a" image={testImage} />, root);
