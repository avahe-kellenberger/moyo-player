import * as React from 'react'
import MoyoDrum from '../moyo/MoyoDrum'
import { MoyoScales } from '../moyo/Scales'
import { DrumConfig } from '../moyo/DrumConfig'

interface Props {
  drumConfigs: DrumConfig[]
}

/**
 * Application container.
 */
export class DrumPlayerContainer extends React.Component<Props, { drumConfig: DrumConfig }> {
  /**
   *
   */
  constructor(props: Props) {
    super(props)
    if (props.drumConfigs === undefined || props.drumConfigs.length < 1) {
      throw new Error('At least one configuration must be supplied.')
    }
    this.state = {
      drumConfig: props.drumConfigs[0]
    }
  }

  public setConfig = (config: DrumConfig): void => {
    this.setState({
      drumConfig: config
    })
  }

  /**
   * Invoked when a drum configuration is selected from the `select` element.
   */
  public onDrumSelected = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const index: number = parseInt(e.target.value)
    this.setConfig(this.props.drumConfigs[index])
  }

  /**
   * @override
   */
  public render(): React.ReactNode {
    return (
      <div>
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
