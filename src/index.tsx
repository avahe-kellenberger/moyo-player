import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { DrumPlayerContainer } from './container/DrumPlayerContainer'
import MoyoCMinor from './moyo/configs/MoyoCMinor'
import MoyoDMinor from './moyo/configs/MoyoDMinor'
import MoyoLowBMinor from './moyo/configs/MoyoLowBMinor'
import { DrumConfig } from './moyo/DrumConfig'

const root: HTMLElement | null = document.getElementById('root')

const moyoDMinor = new MoyoDMinor()
const moyoLowBMinor = new MoyoLowBMinor()
const moyoCMinor = new MoyoCMinor()
const configurations: DrumConfig[] = [moyoDMinor, moyoLowBMinor, moyoCMinor]
ReactDOM.render(<DrumPlayerContainer drumConfigs={configurations} />, root)
