import * as React from 'react'
import { DrumConfig } from './DrumConfig'
import { StatelessComponent } from 'enzyme'

/**
 * Interactive Moyo Drum
 */
const MoyoDrum: React.StatelessComponent<{ drumConfig: DrumConfig }> = ({ drumConfig }) => (
  <>
    <div>{drumConfig.scaleName}</div>
    <img src={drumConfig.imagePath} />
  </>
)

export default MoyoDrum
