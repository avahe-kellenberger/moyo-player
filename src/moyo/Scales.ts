import { MoyoNote } from './Notes';

export namespace MoyoScales {
  // TODO: Create all scales.
  export const LOW_A_MINOR: MoyoNote[] = ['low_a', 'c', 'd', 'e', 'g', 'a'];
}

/**
 * An audio recording of a particular key of a moyo drum.
 */
export interface DrumTone {
  note: MoyoNote;
  tone: Howl;
}
