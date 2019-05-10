import * as React from 'react';
import { MoyoNote } from './Notes';

interface Props {
  imagePath: string;
  scale: MoyoNote[];
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
        <div>{this.props.scale}</div>
        <img src={this.props.imagePath} />
      </div>
    );
  }
}
