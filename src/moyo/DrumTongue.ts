import { Note, Notes } from './Notes'
import Polygon from '../util/Polygon'
import * as Howl from 'howler'

/**
 * A drum's `tongue`, which plays a note when struck/clicked.
 */
export default class DrumTongue {
  public readonly note: Note
  public readonly polygon: Polygon
  public readonly tone: Howl | null

  constructor(note: Note, polygon: Polygon) {
    this.polygon = polygon
    this.note = note
    this.tone = null //Notes.getHowl(this.note)
  }
}
