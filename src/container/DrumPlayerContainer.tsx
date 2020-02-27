import * as React from 'react'
import { DrumConfig } from '../moyo/DrumConfig'
import MoyoDrum from '../moyo/MoyoDrum'
import './drumplayercontainer.scss'

interface Props {
  drumConfigs: DrumConfig[];
}

/**
 * Application container.
 */
export class DrumPlayerContainer extends React.Component<Props, { drumConfig: DrumConfig }> {

  constructor(props: Props) {
    super(props)
    if (props.drumConfigs === undefined || props.drumConfigs.length < 1) {
      throw new Error('At least one configuration must be supplied.')
    }
    this.state = {
      drumConfig: props.drumConfigs[0]
    }
  }

  /**
   * Changes the displayed drum when a drum `option` is selected.
   */
  public onDrumSelected = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const index: number = parseInt(e.target.value)
    this.setState({
      drumConfig: this.props.drumConfigs[index]
    })
  }

  /**
   * @override
   */
  public render(): React.ReactNode {
    return (
      <div id="drum-container">
        <MoyoDrum drumConfig={this.state.drumConfig} />
        <select onChange={this.onDrumSelected}>
          {this.props.drumConfigs.map((config, index) => {
            return (
              <option key={index} value={index}>
                {config.scaleName}
              </option>
            )
          })}
        </select>
      </div>
    )
  }
}
