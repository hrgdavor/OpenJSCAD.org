const applyTransforms = require('./applyTransforms')

const cache = new WeakMap()

/**
 * If the transforms matrix is identity returns the original sides.
 * Otherwise produces a new array of sides with transforms applied.
 * The returned array should not be modified as the data is shared with the geometry.
 *
 * NOTE: The sides returned do NOT define an order. Use toOutlines() for ordered points.
 * @param {geom2} geometry - the geometry
 * @returns {Array} an array of sides
 * @alias module:modeling/geometries/geom2.toSides
 *
 * @example
 * let sharedsides = toSides(geometry)
 */
const toSides = (geometry) => {
  let sides = cache.get(geometry)
  if (sides) return sides

  sides = applyTransforms(geometry).sides
  cache.set(geometry, sides)
  return sides
}

module.exports = toSides
