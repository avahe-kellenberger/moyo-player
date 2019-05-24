const tones: Map<Note, Howl> = new Map();
tones.set('low_a', new Howl({ src: ['low_a.mp3'] }));
tones.set('low_b', new Howl({ src: ['low_b.mp3'] }));
tones.set('low_c', new Howl({ src: ['low_c.mp3'] }));
tones.set('low_d', new Howl({ src: ['low_d.mp3'] }));

tones.set('mid_a', new Howl({ src: ['mid_a.mp3'] }));
tones.set('mid_a#', new Howl({ src: ['mid_a#.mp3'] }));
tones.set('mid_b', new Howl({ src: ['mid_b.mp3'] }));
tones.set('mid_c', new Howl({ src: ['mid_c.mp3'] }));
tones.set('mid_c#', new Howl({ src: ['mid_c#.mp3'] }));
tones.set('mid_d', new Howl({ src: ['mid_d.mp3'] }));
tones.set('mid_d#', new Howl({ src: ['mid_d#.mp3'] }));
tones.set('mid_e', new Howl({ src: ['mid_e.mp3'] }));
tones.set('mid_f#', new Howl({ src: ['mid_f#.mp3'] }));
tones.set('mid_g', new Howl({ src: ['mid_g.mp3'] }));

tones.set('high_a', new Howl({ src: ['high_a.mp3'] }));
tones.set('high_f', new Howl({ src: ['high_f.mp3'] }));
tones.set('high_f#', new Howl({ src: ['high_f#.mp3'] }));
tones.set('high_g', new Howl({ src: ['high_g.mp3'] }));

import { Note } from './Notes'

export class Tones {
  /**
   *
   * @param note
   */
  public static get(note: Note): Howl {
    return tones.get(note)!;
  }
}
