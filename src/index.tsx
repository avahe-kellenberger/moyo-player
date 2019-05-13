import * as React from 'react'
import * as ReactDOM from 'react-dom'
import MoyoDrum from './moyo/MoyoDrum'
import { MoyoScales } from './moyo/Scales'
import { DrumConfig } from './moyo/DrumConfig'
import { DrumPlayerContainer } from './container/DrumPlayerContainer'

const root: HTMLElement | null = document.getElementById('root')

// TODO: MVP only; load configurations from a json file.
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

const configurations: DrumConfig[] = [defaultDrumConfig, drumConfig2]
ReactDOM.render(<DrumPlayerContainer drumConfigs={configurations} />, root)
