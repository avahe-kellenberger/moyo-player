import Polygon from '../../src/util/Polygon'
import 'jest'

describe('contains', () => {
  const poly1: Polygon = new Polygon([[0, 0], [400, 0], [400, 400], [0, 400]])

  const poly2: Polygon = new Polygon([
    [143, 30],
    [144, 68],
    [158, 92],
    [187, 102],
    [241, 94],
    [254, 76],
    [252, 28]
  ])
  it('should return true for points inside the polygon', () => {
    expect(poly1.contains(100, 100)).toBeTruthy()
    expect(poly2.contains(200, 64)).toBeTruthy()
  })
})
