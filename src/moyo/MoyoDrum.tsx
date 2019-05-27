import * as React from 'react'
import { DrumConfig } from './DrumConfig'
import DrumTongue from './DrumTongue'
import './moyodrum.scss'

interface Props {
  drumConfig: DrumConfig
}

interface State {
  loading: boolean
}

/**
 * Interactive Moyo Drum
 */
export default class MoyoDrum extends React.Component<Props, State> {
  constructor(props: Props, state: State) {
    super(props, state)
    this.state = {
      loading: true
    }
  }

  /**
   * @override
   */
  public componentDidMount(): void {
    // Load the drum assets as soon as the component mounts.
    this.loadDrum()
  }

  /**
   * @override
   */
  public componentDidUpdate(previousProps: Props): void {
    // If the configuration (props) updates, we need to ensure the assets are loaded.
    if (this.props !== previousProps) {
      this.loadDrum()
    }
  }

  /**
   * Loads the tones and configures the correct state.
   */
  private loadDrum(): void {
    this.loadTonesForProps().then(() => {
      this.setState({ loading: false })
    })
  }

  private async loadTonesForProps(): Promise<void> {
    const promises: Promise<void>[] = []
    this.props.drumConfig.tongues.forEach((tongue) => {
      if (tongue.tone.state() !== 'loaded') {
        promises.push(new Promise(() => tongue.tone.load()))
      }
    })
    return Promise.resolve(promises).then(() => {})
  }

  /**
   * Plays the tone of the clicked tongue, if one was clicked.
   */
  private mouseDown = (e: React.MouseEvent<HTMLImageElement, MouseEvent>): void => {
    const clickX = e.pageX - e.currentTarget.x
    const clickY = e.pageY - e.currentTarget.y
    this.findTongue(clickX, clickY, (tongue) => tongue.tone.play())
  }

  /**
   * @param x The x coordinate relative to the top left of the drum.
   * @param y The y coordinate relative to the top left of the drum.
   * @param callback The callback invoked on the the found tongue.
   * @return If the given coordinates lie within a DrumTongue of this drum.
   */
  private findTongue(x: number, y: number, callback: (tongue: DrumTongue) => any): boolean {
    return this.props.drumConfig.tongues.some((tongue) => {
      if (tongue.polygon.contains(x, y)) {
        callback(tongue)
        return true
      }
      return false
    })
  }

  /**
   * Prevents the user from dragging the image around, which was a major annoyance when playing the drum.
   */
  private preventImageDrag = (e: React.MouseEvent<HTMLImageElement, MouseEvent>): boolean => {
    e.preventDefault()
    return false
  }

  public render() {
    return (
      <>
        <div id="drum-title">
          {this.state.loading
            ? `Loading ${this.props.drumConfig.scaleName} - Please Wait`
            : this.props.drumConfig.scaleName}
        </div>
        <img
          className="drum-img"
          src={this.props.drumConfig.imagePath}
          width={400}
          draggable={false}
          onMouseDown={this.mouseDown}
          onDragStart={this.preventImageDrag}
        />
      </>
    )
  }
}
