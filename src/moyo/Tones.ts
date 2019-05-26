import { Howl } from 'howler'
import { Assets } from '../asset/Assets'
import { Note } from './Notes'

export class Tones {
  private static toneMap: Map<Note, Howl> = Tones.loadTones()

  private static loadTones(): Map<Note, Howl> {
    const toneMap: Map<Note, Howl> = new Map()
    toneMap.set('low_a', new Howl({ src: [`${Assets.SOUNDS_PATH}/low_a.mp3`], volume: 0.32 }))
    toneMap.set('low_b', new Howl({ src: [`${Assets.SOUNDS_PATH}/low_b.mp3`], volume: 0.32 }))
    toneMap.set('low_c', new Howl({ src: [`${Assets.SOUNDS_PATH}/low_c.mp3`], volume: 0.32 }))
    toneMap.set('low_d', new Howl({ src: [`${Assets.SOUNDS_PATH}/low_d.mp3`], volume: 0.32 }))
    toneMap.set('mid_a', new Howl({ src: [`${Assets.SOUNDS_PATH}/mid_a.mp3`], volume: 0.32 }))
    toneMap.set(
      'mid_a_sharp',
      new Howl({ src: [`${Assets.SOUNDS_PATH}/mid_a_sharp.mp3`], volume: 0.32 })
    )
    toneMap.set('mid_b', new Howl({ src: [`${Assets.SOUNDS_PATH}/mid_b.mp3`], volume: 0.32 }))
    toneMap.set('mid_c', new Howl({ src: [`${Assets.SOUNDS_PATH}/mid_c.mp3`], volume: 0.32 }))
    toneMap.set(
      'mid_c_sharp',
      new Howl({ src: [`${Assets.SOUNDS_PATH}/mid_c_sharp.mp3`], volume: 0.32 })
    )
    toneMap.set('mid_d', new Howl({ src: [`${Assets.SOUNDS_PATH}/mid_d.mp3`], volume: 0.32 }))
    toneMap.set(
      'mid_d_sharp',
      new Howl({ src: [`${Assets.SOUNDS_PATH}/mid_d_sharp.mp3`], volume: 0.32 })
    )
    toneMap.set('mid_e', new Howl({ src: [`${Assets.SOUNDS_PATH}/mid_e.mp3`], volume: 0.32 }))
    toneMap.set(
      'mid_f_sharp',
      new Howl({ src: [`${Assets.SOUNDS_PATH}/mid_f_sharp.mp3`], volume: 0.32 })
    )
    toneMap.set('mid_g', new Howl({ src: [`${Assets.SOUNDS_PATH}/mid_g.mp3`], volume: 0.32 }))
    toneMap.set('high_a', new Howl({ src: [`${Assets.SOUNDS_PATH}/high_a.mp3`], volume: 0.32 }))
    toneMap.set('high_f', new Howl({ src: [`${Assets.SOUNDS_PATH}/high_f.mp3`], volume: 0.32 }))
    toneMap.set(
      'high_f_sharp',
      new Howl({ src: [`${Assets.SOUNDS_PATH}/high_f_sharp.mp3`], volume: 0.32 })
    )
    toneMap.set('high_g', new Howl({ src: [`${Assets.SOUNDS_PATH}/high_g.mp3`], volume: 0.32 }))
    return toneMap
  }

  /**
   *
   * @param note
   */
  public static get(note: Note): Howl {
    return this.toneMap.get(note)!
  }
}
