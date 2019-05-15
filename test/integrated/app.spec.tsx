import * as React from 'react'
import MoyoDrum from '../../src/moyo/MoyoDrum'
import { Assets } from '../../src/asset/Assets'
import { DrumPlayerContainer } from '../../src/container/DrumPlayerContainer'
import { MoyoScales } from '../../src/moyo/Scales'
import { DrumConfig } from '../../src/moyo/DrumConfig'
import { mount, shallow, ReactWrapper } from 'enzyme'

describe('DrumPlayerContainer', () => {
  const defaultDrumConfig: DrumConfig = {
    scaleName: 'A minor',
    imagePath: Assets.MOYO_BLUE,
    tongues: []
  }

  const drumConfig2: DrumConfig = {
    scaleName: 'C minor',
    imagePath: Assets.MOYO_BLUE,
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

  it('Changing selection should change configuration in MoyoDrum element', () => {
    const wrapper = shallow(<DrumPlayerContainer drumConfigs={drumConfigs} />)
    const spy = jest.spyOn(wrapper.instance() as DrumPlayerContainer, 'setState')
    wrapper.find('select').simulate('change', { target: { value: '1' } })
    expect(spy).toHaveBeenCalled()
  })
})
