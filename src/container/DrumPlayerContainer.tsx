import * as React from 'react';
import MoyoDrum from '../moyo/MoyoDrum';
import { MoyoScales } from '../moyo/Scales';
import { DrumConfig } from '../moyo/DrumConfig';

/**
 * Application container.
 */
export default class DrumPlayerContainer extends React.Component<{}, { drumConfig: DrumConfig }> {
  /**
   *
   */
  constructor(props: {}) {
    super(props);
    const defaultDrumConfig: DrumConfig = {
      scaleName: 'A minor',
      imagePath: 'dummy_path.png',
      tongues: [],
    };
    this.state = {
      drumConfig: defaultDrumConfig,
    };
  }

  public setConfig = (config: DrumConfig): void => {
    this.setState({
      drumConfig: config,
    });
  };

  /**
   * @override
   */
  public render(): React.ReactNode {
    return (
      <div>
        <MoyoDrum drumConfig={this.state.drumConfig} />
        <select />
      </div>
    );
  }
}
