import * as React from 'react'
import * as ReactDOM from 'react-dom'
import MoyoAMinor from './moyo/configs/MoyoAMinor'
import { DrumConfig } from './moyo/DrumConfig'
import { DrumPlayerContainer } from './container/DrumPlayerContainer'
import { Assets } from './asset/Assets'
const root: HTMLElement | null = document.getElementById('root')

// TODO: MVP only; load configurations from a json file.

const aMinor = new MoyoAMinor()
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

const configurations: DrumConfig[] = [aMinor, defaultDrumConfig, drumConfig2]
ReactDOM.render(<DrumPlayerContainer drumConfigs={configurations} />, root)
