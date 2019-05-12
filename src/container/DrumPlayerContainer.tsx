import * as React from 'react';
import MoyoDrum from '../moyo/MoyoDrum';
import { MoyoScales } from '../moyo/Scales';
import { DrumConfig } from '../moyo/DrumConfig';

interface Props {
  drumConfig: DrumConfig;
}

/**
 * Application container.
 */
export class DrumPlayerContainer extends React.Component<Props, Props> {
  /**
   *
   */
  constructor(props: Props) {
    super(props);
    this.state = {
      drumConfig: props.drumConfig,
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
