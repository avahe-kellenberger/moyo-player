import * as React from 'react';
import MoyoDrum from '../moyo/MoyoDrum';
import { MoyoScales } from '../moyo/Scales';
import { DrumConfig } from '../moyo/DrumConfig';

interface State {
  drumConfig: DrumConfig;
}

/**
 * Application container.
 */
export default class DrumPlayerContainer extends React.Component<any, State> {
  constructor(props: any, state: State) {
    super({}, state);
    const defaultDrumConfig: DrumConfig = {
      scaleName: 'A minor',
      imagePath: 'dummy_path.png',
      tongues: [],
    };
    this.state = {
      drumConfig: defaultDrumConfig,
    };
  }

  /**
   * @override
   */
  public render(): React.ReactNode {
    return (
      <div>
        <MoyoDrum drumConfig={this.state.drumConfig} />
      </div>
    );
  }
}
