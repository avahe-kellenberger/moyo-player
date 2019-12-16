/**
 * 2D polygon implementation.
 */
export default class Polygon {
  private readonly vertices: number[][]

  /**
   * @param vertices The vertices of the polygon.
   */
  constructor(vertices: number[][]) {
    if (vertices.length < 3) {
      throw new Error('Polygon must have at least 3 points.')
    }
    this.vertices = vertices
  }

  /**
   * @param x The x coordinate to check.
   * @param y The y coordinate to check.
   * @return If the given coordinates are inside of the Polygon.
   */
  public contains(x: number, y: number): boolean {
    const verts: number[][] = this.vertices
    let inside = false
    let lastV: number[] = verts[verts.length - 1]
    let currV: number[]
    for (let i = 0; i < verts.length; lastV = currV, i++) {
      currV = verts[i]
      if (
        currV[1] > y != lastV[1] > y &&
        x < ((lastV[0] - currV[0]) * (y - currV[1])) / (lastV[1] - currV[1]) + currV[0]
      ) {
        inside = !inside
      }
    }
    return inside
  }
}
