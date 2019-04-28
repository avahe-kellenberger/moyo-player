import * as React from 'react';

interface Props {
  image: HTMLImageElement;
  key: string;
}

/**
 * Interactive Moyo Drum
 */
export default class MoyoDrum extends React.Component<Props> {

  constructor(props: Readonly<Props>) {
    super(props);
  }

  /**
   * @override
   */
  public render(): React.ReactNode {
    return <div>{this.props.key}</div>;
  }
}
