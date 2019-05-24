import { Assets } from '../../asset/Assets'
import Polygon from '../../util/Polygon'
import { DrumConfig } from '../DrumConfig'
import DrumTongue from '../DrumTongue'

export default class MoyoLowAMinor implements DrumConfig {
  public readonly scaleName: string = 'A Minor'
  public readonly imagePath: string = Assets.MOYO_BLUE
  public readonly tongues: DrumTongue[] = [
    new DrumTongue(
      'low_d',
      new Polygon([[143, 30], [144, 68], [158, 92], [187, 102], [241, 94], [254, 76], [252, 28]])
    ),
    new DrumTongue(
      'mid_a',
      new Polygon([[311, 54], [269, 83], [262, 96], [264, 113], [298, 165], [326, 169], [374, 139]])
    )
  ]
}
