// title: Three to four (sides)
// author: Eduard Bespalov
// license: MIT License
// description: testing solidFromSlices()

const getParameterDefinitions = () => {
  return [
    { name: 'radius', caption: 'Radius:', type: 'float', default: 10 },
    { name: 'height', caption: 'Height:', type: 'float', default: 35 },
    { name: 'twist', caption: 'Twist:', type: 'int', default: 90 }
  ]
}

const main = (params) => {
  var thing = thingTwisted(params.radius, params.height, params.twist)
  return thing
}

function thingTwisted (radius, height, twistangle) {
  twistangle = twistangle || 0

  var flatBottom = poly3.fromPoints([
    [-radius, -radius, 0],
    [radius, -radius, 0],
    [radius, radius, 0]
  ])

  var thing = flatBottom.solidFromSlices({
    numslices: height,
	 callback: function (t) {
      var coef = t
      var h = height * t
      return poly3.fromPoints([
        [-radius, -radius, h],
        [radius, -radius, h],
	 		[radius * coef, radius, h],
        [-radius * coef, radius, h]
      ]).rotate([0, 0, 0], [0, 0, 1], twistangle * t)
    }
  })
  return thing
}
