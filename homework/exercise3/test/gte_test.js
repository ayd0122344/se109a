import _ from '../src/mod.js'
import {
  assert
} from "https://deno.land/std@0.63.0/testing/asserts.ts";
const O = {}

const expect = function (obj) {
  O.obj = obj
  O.to = O
  O.be = O.obj
  return O
}

Deno.test("gte test", () => {
  const x = _.gte(3, 1); // => true
  console.log('x=', x)
  //console.log("expect=",expect(x).to.be)
  assert(expect(x).to.be === true)

  const y = _.gte(3, 3); // => true
  console.log('y=', y)
  assert(expect(y).to.be === true)

  const z = _.gte(1, 3); // => false
  console.log('z=', z)
  assert(expect(z).to.be === false)

})

/*
lodash example
_.gte(3, 1);
// => true
 
_.gte(3, 3);
// => true
 
_.gte(1, 3);
// => false
*/