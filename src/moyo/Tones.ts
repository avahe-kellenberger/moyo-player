import { MoyoNote } from './Notes';

const tones: Map<MoyoNote, Howl> = new Map();
tones.set('a_flat', new Howl({ src: [''] }));
tones.set('a', new Howl({ src: [''] }));
tones.set('a_sharp', new Howl({ src: [''] }));
tones.set('b_flat', new Howl({ src: [''] }));
tones.set('b', new Howl({ src: [''] }));
tones.set('c', new Howl({ src: [''] }));
tones.set('c_sharp', new Howl({ src: [''] }));
tones.set('d_flat', new Howl({ src: [''] }));
tones.set('d', new Howl({ src: [''] }));
tones.set('d_sharp', new Howl({ src: [''] }));
tones.set('e_flat', new Howl({ src: [''] }));
tones.set('e', new Howl({ src: [''] }));
tones.set('f', new Howl({ src: [''] }));
tones.set('f_sharp', new Howl({ src: [''] }));
tones.set('g_flat', new Howl({ src: [''] }));
tones.set('g', new Howl({ src: [''] }));
tones.set('g_sharp', new Howl({ src: [''] }));

export class Tones {
  /**
   *
   * @param note
   */
  public static get(note: MoyoNote): Howl {
    return tones.get(note)!;
  }
}
