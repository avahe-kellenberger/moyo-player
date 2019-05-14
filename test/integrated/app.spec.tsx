import * as React from 'react'
import MoyoDrum from '../../src/moyo/MoyoDrum'
import { DrumPlayerContainer } from '../../src/container/DrumPlayerContainer'
import { MoyoScales } from '../../src/moyo/Scales'
import { DrumConfig } from '../../src/moyo/DrumConfig'
import { shallow } from 'enzyme'

describe('DrumPlayerContainer', () => {
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

  it('Should contain all necessary children', () => {
    const wrapper = shallow(<DrumPlayerContainer drumConfigs={drumConfigs} />)

    // List all elements which should exist in the container.
    const expectedElements: JSX.Element[] = []
    expectedElements.push(<MoyoDrum drumConfig={defaultDrumConfig} />)

    // Dynamically map the options based on `drumConfigs`.
    const drumConfigOptionElements: JSX.Element[] = drumConfigs.map((config, index) => {
      return <option value={index}>{config}</option>
    })

    // Add drum config elements to the list of expected elements.
    expectedElements.concat(drumConfigOptionElements)

    // Contains all elements.
    expect(wrapper.containsAllMatchingElements(expectedElements)).toBeTruthy()

    const selectElement = wrapper.find('select')
    // Contains ONLY the expected drum configuration options.
    expect(selectElement.children().length).toEqual(drumConfigOptionElements.length)
  })
})
