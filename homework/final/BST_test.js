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
  _.inorder(root)
  _.preorder(root)
  _.postorder(root)
  _.findMin(root)
  _.findMax(root)

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
  console.log("after delete 55, root=", root)
  _.remove(root, 24)
  console.log("after delete 24, root=", root)
  assert(_.remove(root, 23) === null)
})


/*測試結果
nan@20190116-01 MINGW64 ~/Desktop/se109a/se109a/homework/final (master)
$ deno test
Check file:///C:/Users/nan/Desktop/se109a/se109a/homework/final/.deno.test.ts
running 1 tests
test BST_test ... {"value":55,"left":{"value":24,"right":{"value":53},"left":{"value":11}},"right":{"value":89,"left":{"value":72,"left":{"value":69}}}}
inorder= [
  11, 24, 53, 55,
  69, 72, 89
]
preorder= [
  55, 24, 11, 53,
  89, 72, 69
]
postorder= [
  11, 53, 24, 69,
  72, 89, 55
]
{
  value: 55,
  left: { value: 24, right: { value: 53 }, left: { value: 11 } },
  right: { value: 89, left: { value: 72, left: { value: 69 } } }
}
after delete 55, root= {
  value: 69,
  left: { value: 24, right: { value: 53 }, left: { value: 11 } },
  right: { value: 89, left: { value: 72, left: {} } }
}
after delete 55, root= {
  value: 69,
  left: { value: 53, right: {}, left: { value: 11 } },
  right: { value: 89, left: { value: 72, left: {} } }
}
ok (48ms)

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out (58ms)
*/