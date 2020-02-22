import { Assets } from '../../asset/Assets'
import Polygon from '../../util/Polygon'
import { DrumConfig } from '../DrumConfig'
import DrumTongue from '../DrumTongue'

export default class YamiAMinor implements DrumConfig {
  public readonly scaleName: string = 'Yami A Minor'
  public readonly imagePath: string = Assets.RED_YAMI
  public readonly tongues: DrumTongue[] = [
    new DrumTongue('3_a', new Polygon([
      [255, 374],
      [205, 304],
      [202, 276],
      [215, 246],
      [249, 228],
      [277, 228],
      [297, 241],
      [346, 313]
    ])),
    new DrumTongue('4_c', new Polygon([
      [47, 303],
      [101, 243],
      [120, 235],
      [144, 238],
      [173, 264],
      [184, 283],
      [185, 302],
      [180, 315],
      [134, 374]
    ])),
    new DrumTongue('4_d', new Polygon([
      [381, 208],
      [313, 222],
      [285, 213],
      [268, 190],
      [266, 165],
      [279, 138],
      [296, 126],
      [359, 117]
    ])),
    new DrumTongue('4_e', new Polygon([
      [33, 123],
      [104, 141],
      [117, 156],
      [124, 179],
      [112, 211],
      [88, 229],
      [68, 229],
      [15, 214]
    ])),
    new DrumTongue('4_g', new Polygon([
      [306, 55],
      [285, 107],
      [262, 121],
      [237, 121],
      [205, 100],
      [198, 72],
      [220, 20]
    ])),
    new DrumTongue('4_a', new Polygon([
      [154, 24],
      [180, 68],
      [180, 92],
      [166, 113],
      [144, 126],
      [118, 127],
      [101, 119],
      [93, 109],
      [74, 69]
    ]))
  ];

}
