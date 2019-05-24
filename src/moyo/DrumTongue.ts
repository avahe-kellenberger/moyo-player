import Polygon from '../util/Polygon'
import { Note } from './Notes'
import { Tones } from './Tones'

/**
 * A drum's `tongue`, which plays a note when struck/clicked.
 */
export default class DrumTongue {
  public readonly note: Note
  public readonly polygon: Polygon
  public readonly tone: Howl

  constructor(note: Note, polygon: Polygon) {
    this.polygon = polygon
    this.note = note
    this.tone = Tones.get(this.note)
  }
}
