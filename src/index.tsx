import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { DrumPlayerContainer } from './container/DrumPlayerContainer'
import MoyoDMinor from './moyo/configs/MoyoDMinor'
import { DrumConfig } from './moyo/DrumConfig'

const root: HTMLElement | null = document.getElementById('root')

const moyoDMinor = new MoyoDMinor();
const configurations: DrumConfig[] = [moyoDMinor]
ReactDOM.render(<DrumPlayerContainer drumConfigs={configurations} />, root)
