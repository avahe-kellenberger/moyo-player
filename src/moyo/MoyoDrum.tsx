import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { DrumConfig } from './DrumConfig'
import { StatelessComponent } from 'enzyme'

const mouseDown = (e: React.MouseEvent<HTMLImageElement, MouseEvent>): void => {
  const clickX = e.pageX - e.currentTarget.x
  const clickY = e.pageY - e.currentTarget.y
  console.log(`Click: (${clickX}, ${clickY})`)
}

/**
 * Interactive Moyo Drum
 */
const MoyoDrum: React.StatelessComponent<{ drumConfig: DrumConfig }> = ({ drumConfig }) => (
  <>
    <div>{drumConfig.scaleName}</div>
    <img src={drumConfig.imagePath} width={400} onMouseDown={mouseDown} />
  </>
)

export default MoyoDrum
