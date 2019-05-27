import { Howl } from 'howler'
import { Assets } from '../asset/Assets'
import { Note } from './Notes'

export class Tones {
  private static toneMap: Map<Note, Howl> = Tones.loadTones()

  private static loadTones(): Map<Note, Howl> {
    const toneMap: Map<Note, Howl> = new Map()
    toneMap.set('low_a', Tones.createHowl('low_a.mp3'))
    toneMap.set('low_b', Tones.createHowl('low_b.mp3'))
    toneMap.set('low_c', Tones.createHowl('low_c.mp3'))
    toneMap.set('low_d', Tones.createHowl('low_d.mp3'))
    toneMap.set('mid_a', Tones.createHowl('mid_a.mp3'))
    toneMap.set('mid_a_sharp', Tones.createHowl('mid_a_sharp.mp3'))
    toneMap.set('mid_b', Tones.createHowl('mid_b.mp3'))
    toneMap.set('mid_c', Tones.createHowl('mid_c.mp3'))
    toneMap.set('mid_c_sharp', Tones.createHowl('mid_c_sharp.mp3'))
    toneMap.set('mid_d', Tones.createHowl('mid_d.mp3'))
    toneMap.set('mid_d_sharp', Tones.createHowl('mid_d_sharp.mp3'))
    toneMap.set('mid_e', Tones.createHowl('mid_e.mp3'))
    toneMap.set('mid_f_sharp', Tones.createHowl('mid_f_sharp.mp3'))
    toneMap.set('mid_g', Tones.createHowl('mid_g.mp3'))
    toneMap.set('high_a', Tones.createHowl('high_a.mp3'))
    toneMap.set('high_f', Tones.createHowl('high_f.mp3'))
    toneMap.set('high_f_sharp', Tones.createHowl('high_f_sharp.mp3'))
    toneMap.set('high_g', Tones.createHowl('high_g.mp3'))
    return toneMap
  }

  /**
   * Creates a howl with default settings.
   * @param name The name of the sound file.
   * @return A Howl object with default settings.
   */
  private static createHowl(name: string): Howl {
    return new Howl({ src: [`${Assets.SOUNDS_PATH}/${name}`], volume: 0.32, preload: false })
  }

  /**
   * Finds the tone associated with the given note.
   * @param note The note associated with a tone.
   * @return A Tone associated with the given note.
   */
  public static get(note: Note): Howl {
    return this.toneMap.get(note)!
  }
}
