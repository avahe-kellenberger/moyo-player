import * as React from 'react';
import { MoyoNote } from './Notes';

interface Props {
  image: HTMLImageElement;
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
    return <div>{this.props.scale}</div>;
  }
}
