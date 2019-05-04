import * as React from 'react';
import { Note } from './Notes';

interface Props {
  image: HTMLImageElement;
  scale: Note[];
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
