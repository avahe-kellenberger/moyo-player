import * as React from 'react';
import MoyoDrum from '../moyo/MoyoDrum';
import { MoyoScales } from '../moyo/Scales';

/**
 * Application container.
 */
export default class App extends React.Component {
  /**
   * @override
   */
  public componentDidMount() {
    // TODO: Change state or something
  }

  /**
   * @override
   */
  public render(): React.ReactNode {
    return (
      <div>
        <MoyoDrum scale={MoyoScales.LOW_A_MINOR} imagePath="dummy_path.png" />
      </div>
    );
  }
}
