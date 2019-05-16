import DrumTongue from '../DrumTongue'
import Polygon from '../../util/Polygon'
import { Assets } from '../../asset/Assets'
import { DrumConfig } from '../DrumConfig'

export default class MoyoAMinor implements DrumConfig {
  public readonly scaleName: string = 'A Minor'
  public readonly imagePath: string = Assets.MOYO_BLUE
  public readonly tongues: DrumTongue[] = [
    new DrumTongue(
      'a',
      new Polygon([[143, 30], [144, 68], [158, 92], [187, 102], [241, 94], [254, 76], [252, 28]])
    ),
    new DrumTongue(
      'c',
      new Polygon([[311, 54], [269, 83], [262, 96], [264, 113], [298, 165], [326, 169], [374, 139]])
    )
  ]
}
