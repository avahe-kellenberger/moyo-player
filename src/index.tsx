import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { DrumPlayerContainer } from './container/DrumPlayerContainer'
import MoyoDMinor from './moyo/configs/MoyoDMinor'
import MoyoLowBMinor from './moyo/configs/MoyoLowBMinor'
import { DrumConfig } from './moyo/DrumConfig'

const root: HTMLElement | null = document.getElementById('root')

const moyoDMinor = new MoyoDMinor()
const moyoLowBMinor = new MoyoLowBMinor()
const configurations: DrumConfig[] = [moyoDMinor, moyoLowBMinor]
ReactDOM.render(<DrumPlayerContainer drumConfigs={configurations} />, root)
