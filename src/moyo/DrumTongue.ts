import { Note, Notes } from './Notes';
import { Polygon } from '../util/Polygon';
import { Howl } from 'howler';

/**
 * A drum's `tongue`, which plays a note when struck/clicked.
 */
export class DrumTongue {
  private readonly polygon: Polygon;
  private readonly note: Note;
  private readonly tone: Howl;

  constructor(polygon: Polygon, note: Note) {
    this.polygon = polygon;
    this.note = note;
    this.tone = Notes.getHowl(this.note);
  }
}
