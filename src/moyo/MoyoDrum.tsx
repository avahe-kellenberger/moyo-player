import * as React from 'react';
import { DrumConfig } from './DrumConfig';

interface Props {
  drumConfig: DrumConfig;
}

/**
 * Interactive Moyo Drum
 */
export default class MoyoDrum extends React.Component<Props> {
  /**
   * @override
   */
  public render(): React.ReactNode {
    return (
      <div>
        <div>{this.props.drumConfig.scaleName}</div>
        <img src={this.props.drumConfig.imagePath} />
      </div>
    );
  }
}
