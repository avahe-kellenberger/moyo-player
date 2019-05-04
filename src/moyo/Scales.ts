import { Note } from './Notes';

export namespace Scales {
  // TODO: Create all scales.
  export const A_MINOR: Note[] = ['a'];
}

/**
 * An audio recording of a particular key of a moyo drum.
 */
export interface DrumTone {
  note: Note;
  tone: Howl;
}
