import { Assets } from '../../asset/Assets'
import Polygon from '../../util/Polygon'
import { DrumConfig } from '../DrumConfig'
import DrumTongue from '../DrumTongue'

export default class Pueblo implements DrumConfig {
  public readonly scaleName: string = 'Pueblo (D Integral)'
  public readonly imagePath: string = Assets.IMAGE_PUEBLO
  public readonly tongues: DrumTongue[] = [
    new DrumTongue(
      '4_a',
      new Polygon([
        [225, 14],
        [209, 44],
        [207, 53],
        [209, 61],
        [216, 71],
        [255, 87],
        [267, 88],
        [280, 81],
        [283, 77],
        [301, 43]
      ])
    ),
    new DrumTongue(
      '4_e',
      new Polygon([
        [341, 73],
        [303, 87],
        [290, 99],
        [287, 115],
        [289, 131],
        [309, 169],
        [322, 180],
        [336, 184],
        [347, 182],
        [385, 164]
      ])
    ),
    new DrumTongue(
      '4_c',
      new Polygon([
        [381, 233],
        [329, 203],
        [319, 201],
        [301, 208],
        [287, 221],
        [270, 254],
        [268, 268],
        [268, 275],
        [274, 288],
        [283, 297],
        [294, 305],
        [331, 325]
      ])
    ),
    new DrumTongue(
      '3_d',
      new Polygon([
        [256, 364],
        [255, 308],
        [251, 274],
        [244, 256],
        [235, 248],
        [215, 241],
        [179, 243],
        [159, 251],
        [146, 266],
        [143, 279],
        [144, 300],
        [147, 337],
        [152, 369]
      ])
    ),
    new DrumTongue(
      '3_a',
      new Polygon([
        [60, 326],
        [108, 303],
        [122, 291],
        [129, 277],
        [128, 261],
        [126, 254],
        [99, 211],
        [78, 203],
        [69, 205],
        [16, 237]
      ])
    ),
    new DrumTongue(
      '4_d',
      new Polygon([
        [15, 162],
        [53, 185],
        [65, 187],
        [80, 180],
        [99, 155],
        [110, 128],
        [110, 111],
        [106, 101],
        [93, 91],
        [59, 74]
      ])
    ),
    new DrumTongue(
      '4_f',
      new Polygon([
        [100, 40],
        [109, 80],
        [114, 90],
        [124, 97],
        [139, 98],
        [174, 84],
        [185, 73],
        [189, 64],
        [188, 56],
        [175, 14]
      ])
    ),
    new DrumTongue(
      '3_a_sharp',
      new Polygon([
        [290, 200],
        [291, 157],
        [247, 150],
        [246, 124],
        [198, 122],
        [197, 103],
        [149, 105],
        [143, 148],
        [110, 151],
        [110, 198]
      ])
    )
  ]
}
