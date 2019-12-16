import { Assets } from '../../asset/Assets'
import Polygon from '../../util/Polygon'
import { DrumConfig } from '../DrumConfig'
import DrumTongue from '../DrumTongue'

export default class MoyoCMinor implements DrumConfig {
  public readonly scaleName: string = 'C Minor'
  public readonly imagePath: string = Assets.MOYO_PURPLE
  public readonly tongues: DrumTongue[] = [
    new DrumTongue(
      '4_g',
      new Polygon([
        [161, 21],
        [159, 47],
        [161, 65],
        [175, 76],
        [195, 83],
        [227, 78],
        [241, 62],
        [243, 49],
        [243, 22]
      ])
    ),
    new DrumTongue(
      '4_d_sharp',
      new Polygon([
        [284, 35],
        [251, 76],
        [250, 88],
        [253, 98],
        [277, 125],
        [292, 131],
        [313, 127],
        [348, 86]
      ])
    ),
    new DrumTongue(
      '3_a_sharp',
      new Polygon([
        [378, 140],
        [323, 139],
        [304, 148],
        [292, 168],
        [290, 210],
        [296, 228],
        [315, 246],
        [328, 251],
        [386, 245]
      ])
    ),
    new DrumTongue(
      '3_c',
      new Polygon([
        [338, 334],
        [303, 260],
        [293, 251],
        [272, 243],
        [222, 263],
        [205, 285],
        [204, 313],
        [208, 323],
        [255, 387]
      ])
    ),
    new DrumTongue(
      '3_g',
      new Polygon([
        [137, 381],
        [178, 328],
        [182, 312],
        [180, 296],
        [174, 286],
        [131, 254],
        [106, 254],
        [94, 259],
        [51, 319]
      ])
    ),
    new DrumTongue(
      '4_c',
      new Polygon([[15, 241], [75, 248], [103, 227], [110, 199], [110, 168], [89, 144], [24, 136]])
    ),
    new DrumTongue(
      '4_f',
      new Polygon([[54, 82], [90, 127], [106, 130], [134, 115], [150, 93], [151, 74], [120, 33]])
    ),
    new DrumTongue(
      '4_d',
      new Polygon([
        [221, 227],
        [255, 181],
        [257, 176],
        [256, 167],
        [239, 144],
        [221, 141],
        [199, 156],
        [177, 140],
        [169, 138],
        [144, 157],
        [143, 165],
        [143, 181],
        [148, 195],
        [169, 224]
      ])
    )
  ]
}
