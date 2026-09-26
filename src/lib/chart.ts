export type Point = readonly [number, number]

/**
 * Converts a series into a smooth cubic path using a Catmull-Rom
 * spline converted to Bezier control points.
 */
export function smoothPath(points: readonly Point[], tension = 0.22): string {
  if (points.length === 0) return ''
  if (points.length < 3) {
    return points.map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${x},${y}`).join(' ')
  }

  let d = `M${points[0][0]},${points[0][1]}`

  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i - 1] ?? points[i]
    const p1 = points[i]
    const p2 = points[i + 1]
    const p3 = points[i + 2] ?? p2

    const c1x = p1[0] + ((p2[0] - p0[0]) / 6) * tension * 3
    const c1y = p1[1] + ((p2[1] - p0[1]) / 6) * tension * 3
    const c2x = p2[0] - ((p3[0] - p1[0]) / 6) * tension * 3
    const c2y = p2[1] - ((p3[1] - p1[1]) / 6) * tension * 3

    d += ` C${c1x.toFixed(2)},${c1y.toFixed(2)} ${c2x.toFixed(2)},${c2y.toFixed(2)} ${p2[0]},${p2[1]}`
  }

  return d
}

/** Closes a line path into a filled area down to `baseY`. */
export function areaPath(points: readonly Point[], baseY: number, tension = 0.22): string {
  if (points.length === 0) return ''
  const first = points[0]
  const last = points[points.length - 1]
  return `${smoothPath(points, tension)} L${last[0]},${baseY} L${first[0]},${baseY} Z`
}
