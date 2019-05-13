import * as React from 'react'
import MoyoDrum from '../../src/moyo/MoyoDrum'
import { DrumPlayerContainer } from '../../src/container/DrumPlayerContainer'
import { MoyoScales } from '../../src/moyo/Scales'
import { DrumConfig } from '../../src/moyo/DrumConfig'
import { shallow } from 'enzyme'

describe('DrumPlayerContainer', () => {
  it('Should render children correctly', () => {
    const defaultDrumConfig: DrumConfig = {
      scaleName: 'A minor',
      imagePath: 'dummy_path.png',
      tongues: []
    }
    const drumConfig2: DrumConfig = {
      scaleName: 'C minor',
      imagePath: 'dummy_path.png',
      tongues: []
    }
    const drumConfigs: DrumConfig[] = [defaultDrumConfig, drumConfig2]
    const wrapper = shallow(<DrumPlayerContainer drumConfigs={drumConfigs} />)

    // List all elements which should exist in the container.
    const expectedElements: JSX.Element[] = []
    expectedElements.push(<MoyoDrum drumConfig={defaultDrumConfig} />)
    // Dynamically map the options based on `drumConfigs`.
    drumConfigs.map((config, index) => {
      expectedElements.push(<option value={index}>{config}</option>)
    })

    console.log(wrapper.debug())
    expect(wrapper.containsAllMatchingElements(expectedElements)).toBeTruthy()
  })
})
