import _ from './mod.js'
import {
  assert
} from "https://deno.land/std@0.63.0/testing/asserts.ts";

Deno.test("BST_test", () => {
  var v = [55, 24, 89, 72, 53, 69, 11],
    root = {}

  assert(_.searchNode(root, 55) === false)

  for (let i of v) {
    _.insert(root, i);
  }
  console.log(JSON.stringify(root))

  assert(_.searchNode(root, 72) === true)
  assert(_.searchNode(root, 23) === null)

  assert(_.searchSubtree(root, 55) === root)
  assert(_.searchSubtree(root, 72) === root.right.left)
  assert(_.searchSubtree(root, 23) === null)

  assert(_.searchParent(root, 55) === false)
  assert(_.searchParent(root, 72) === root.right)
  assert(_.searchParent(root, 53) === root.left)
  assert(_.searchParent(root, 23) === null)

  console.log(root)
  _.remove(root, 55)
  console.log(root)
  _.remove(root, 24)
  console.log(root)
  //assert(_.remove(root, 23) === null)
})