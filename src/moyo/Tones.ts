import { Howl } from 'howler'
import { Assets } from '../asset/Assets'
import { Note } from './Notes'

export class Tones {
  private static toneMap: Map<Note, Howl> = Tones.loadTones()

  private static loadTones(): Map<Note, Howl> {
    const toneMap: Map<Note, Howl> = new Map()
    toneMap.set('2_a', Tones.createHowl('2_a.mp3'))
    toneMap.set('2_b', Tones.createHowl('2_b.mp3'))
    toneMap.set('3_c', Tones.createHowl('3_c.mp3'))
    toneMap.set('3_d', Tones.createHowl('3_d.mp3'))
    toneMap.set('3_f_sharp', Tones.createHowl('3_f_sharp.mp3'))
    toneMap.set('3_g', Tones.createHowl('3_g.mp3'))
    toneMap.set('3_a', Tones.createHowl('3_a.mp3'))
    toneMap.set('3_a_sharp', Tones.createHowl('3_a_sharp.mp3'))
    toneMap.set('3_b', Tones.createHowl('3_b.mp3'))
    toneMap.set('4_c', Tones.createHowl('4_c.mp3'))
    toneMap.set('4_c_sharp', Tones.createHowl('4_c_sharp.mp3'))
    toneMap.set('4_d', Tones.createHowl('4_d.mp3'))
    toneMap.set('4_d_sharp', Tones.createHowl('4_d_sharp.mp3'))
    toneMap.set('4_e', Tones.createHowl('4_e.mp3'))
    toneMap.set('4_a', Tones.createHowl('4_a.mp3'))
    toneMap.set('4_f', Tones.createHowl('4_f.mp3'))
    toneMap.set('4_f_sharp', Tones.createHowl('4_f_sharp.mp3'))
    toneMap.set('4_g', Tones.createHowl('4_g.mp3'))
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
    const howl: Howl|undefined = this.toneMap.get(note)
    if (howl === undefined) {
      throw new Error(`Note not found: ${note}`)
    }
    return howl
  }
}
