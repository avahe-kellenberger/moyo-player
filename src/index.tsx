import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { DrumPlayerContainer } from './container/DrumPlayerContainer'
import MoyoCMinor from './moyo/configs/MoyoCMinor'
import MoyoDMinor from './moyo/configs/MoyoDMinor'
import MoyoLowBMinor from './moyo/configs/MoyoLowBMinor'
import Pueblo from './moyo/configs/Pueblo'
import { DrumConfig } from './moyo/DrumConfig'
import YamiAMinor from './moyo/configs/YamiAMinor'
import YamiFSharp from './moyo/configs/YamiFSharp'
import YamiGMinor from './moyo/configs/YamiGMinor'

const root: HTMLElement | null = document.getElementById('root')

const moyoDMinor = new MoyoDMinor()
const moyoLowBMinor = new MoyoLowBMinor()
const moyoCMinor = new MoyoCMinor()

const pueblo = new Pueblo()

const yamiAMinor = new YamiAMinor()
const yamiFSharp = new YamiFSharp()
const yamiGMinor = new YamiGMinor()

const configurations: DrumConfig[] = [
  moyoDMinor,
  moyoLowBMinor,
  moyoCMinor,
  pueblo,
  yamiAMinor,
  yamiFSharp,
  yamiGMinor
]

ReactDOM.render(<DrumPlayerContainer drumConfigs={configurations} />, root)
