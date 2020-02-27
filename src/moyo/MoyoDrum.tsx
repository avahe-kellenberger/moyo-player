import * as React from 'react'
import { DrumConfig } from './DrumConfig'
import DrumTongue from './DrumTongue'
import './moyodrum.scss'

interface Props {
  drumConfig: DrumConfig;
}

interface State {
  loading: boolean;
}

interface TouchClickEvent {
  eventX: number;
  eventY: number;
  elementX: number;
  elementY: number;
}

/**
 * Interactive Moyo Drum
 */
export default class MoyoDrum extends React.Component<Props, State> {

  /**
   * If the interface being used is touch-based.
   * If this is set to true, all mouse events will be disabled.
   */
  private touchBasedInterface = false
  private imageElement: HTMLImageElement|null = null
  private elementBoundingRect: DOMRect|undefined
  private initialSize: readonly [number, number] = [0, 0]

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
      this.setState({ loading: true })
      this.loadDrum()
    }
  }

  /**
   * Loads the tones and configures the correct state.
   */
  private async loadDrum(): Promise<any> {
    await this.loadTonesForProps()
    this.setState({ loading: false })
  }

  private async loadTonesForProps(): Promise<void> {
    const promises: Promise<Howl>[] = []
    this.props.drumConfig.tongues.forEach((tongue) => {
      if (tongue.tone.state() !== 'loaded') {
        promises.push(
          new Promise((resolve) => {
            tongue.tone.once('load', () => resolve())
            tongue.tone.load()
          })
        )
      }
    })
    return Promise.all(promises).then(() => {})
  }

  /**
   * Ensures the Moyo image element is valid, and updates `this.elementPosition`.
   */
  private validateImageElement(): void {
    const element = this.imageElement
    if (!(element instanceof Element)) {
      this.throwImageLoadError()
    }
    this.elementBoundingRect = element.getBoundingClientRect()
  }

  private mouseDown = (e: React.MouseEvent<HTMLImageElement, MouseEvent>): void => {
    if (this.touchBasedInterface === true) {
      e.preventDefault()
      return
    }

    this.validateImageElement()

    if (this.elementBoundingRect != null) {
      this.tryPlayDrumTongue({
        eventX: e.pageX,
        eventY: e.pageY,
        elementX: this.elementBoundingRect.left,
        elementY: this.elementBoundingRect.top
      })
    }
  }

  private onTouchStart = (e: React.TouchEvent<HTMLImageElement>): void => {
    this.touchBasedInterface = true

    this.validateImageElement()

    if (this.elementBoundingRect != null) {
      for (let i = 0; i < e.touches.length; i++) {
        const touch = e.touches.item(i)
        this.tryPlayDrumTongue({
          eventX: touch.pageX,
          eventY: touch.pageY,
          elementX: this.elementBoundingRect.left,
          elementY: this.elementBoundingRect.top
        })
      }
    }
  }

  /**
   * Plays the tone of the clicked/touched tongue, if one was clicked.
   */
  private tryPlayDrumTongue(e: TouchClickEvent): void {
    if (this.elementBoundingRect == null) {
      this.throwImageLoadError()
    }
    const scalarX: number = this.initialSize[0] / this.elementBoundingRect.width
    const clickX = (e.eventX - e.elementX) * scalarX - window.pageXOffset

    const scalarY: number = this.initialSize[1] / this.elementBoundingRect.height
    const clickY = (e.eventY - e.elementY) * scalarY - window.pageYOffset

    this.findTongue(clickX, clickY, (tongue) => tongue.tone.play())
  }

  private throwImageLoadError(): never {
    alert('Error loading image information!')
    throw new Error('Invalid image information!')
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

  private onImageLoad = (e: React.SyntheticEvent<HTMLImageElement>): void => {
    const image: HTMLImageElement & EventTarget = e.currentTarget
    this.initialSize = [image.naturalWidth, image.naturalHeight]
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
          ref={node => this.imageElement = node}
          onLoad={this.onImageLoad}
          className="drum-img"
          src={this.props.drumConfig.imagePath}
          width={400}
          draggable={false}
          onMouseDown={this.mouseDown}
          onTouchStart={this.onTouchStart}
          onDragStart={this.preventImageDrag}
        />
      </>
    )
  }
}
