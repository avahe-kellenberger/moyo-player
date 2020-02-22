import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { DrumPlayerContainer } from './container/DrumPlayerContainer'
import MoyoCMinor from './moyo/configs/MoyoCMinor'
import MoyoDMinor from './moyo/configs/MoyoDMinor'
import MoyoLowBMinor from './moyo/configs/MoyoLowBMinor'
import Pueblo from './moyo/configs/Pueblo'
import { DrumConfig } from './moyo/DrumConfig'
import YamiAMinor from './moyo/configs/YamiAMinor'

const root: HTMLElement | null = document.getElementById('root')

const moyoDMinor = new MoyoDMinor()
const moyoLowBMinor = new MoyoLowBMinor()
const moyoCMinor = new MoyoCMinor()
const pueblo = new Pueblo()
const yamiAMinor = new YamiAMinor()

const configurations: DrumConfig[] = [moyoDMinor, moyoLowBMinor, moyoCMinor, pueblo, yamiAMinor]
ReactDOM.render(<DrumPlayerContainer drumConfigs={configurations} />, root)
