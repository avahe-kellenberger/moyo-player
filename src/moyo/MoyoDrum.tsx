import * as React from 'react'
import { DrumConfig } from './DrumConfig'

/**
 * Interactive Moyo Drum
 */
export default class MoyoDrum extends React.Component<{ drumConfig: DrumConfig }> {
  private mouseDown = (e: React.MouseEvent<HTMLImageElement, MouseEvent>): void => {
    const clickX = e.pageX - e.currentTarget.x
    const clickY = e.pageY - e.currentTarget.y
    this.props.drumConfig.tongues.forEach((tongue, index) => {
      if (tongue.polygon.contains(clickX, clickY)) {
        console.log(`Clicked tongue ${index}`)
      }
    })
  }

  public render() {
    return (
      <>
        <div>{this.props.drumConfig.scaleName}</div>
        <img src={this.props.drumConfig.imagePath} width={400} onMouseDown={this.mouseDown} />
      </>
    )
  }
}
