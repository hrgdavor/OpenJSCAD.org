const applyTransforms = require('./applyTransforms')

/**
 * Produces a new array of sides from the given geometry.
 * NOTE: The sides returned do NOT define an order. Use toOutlines() for ordered points.
 * @param {geom2} geometry - the geometry
 * @returns {Array} an array of sides
 * @alias module:modeling/geometries/geom2.toSides
 *
 * @example
 * let sharedsides = toSides(geometry)
 */
const toSides = (geometry) => applyTransforms(geometry).sides

module.exports = toSides
