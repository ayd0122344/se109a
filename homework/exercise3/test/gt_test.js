import _ from '../src/mod.js'
import{assert}from "https://deno.land/std@0.63.0/testing/asserts.ts";

Deno.test("gt test", () => {
    const x = _.gt(3,1); // => true
    console.log('x=', x)
    assert(x===true)

    const y = _.gt(3,3); // => flase
    console.log('y=', y)
    assert(y===false)

    const z = _.gt(1,3); // => false
    console.log('z=', z)
    assert(z===false)

  })

/*
lodash example
_.gt(3, 1);
// => true
 
_.gt(3, 3);
// => false
 
_.gt(1, 3);
// => false
*/