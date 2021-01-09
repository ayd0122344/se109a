# 期末報告 - Binary Search Tree

### 參考資料

[Binary Search Tree](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/tree/binary-search-tree)

[删除Javascript树中的节点](https://www.codenong.com/Removing-a-node-in-a-Javascript-Tree/)

### 演算法說明

> 主程式含大量註解說明

[主程式入口](https://github.com/ayd0122344/se109a/blob/master/homework/final/BST.js)
[測試檔案入口](https://github.com/ayd0122344/se109a/blob/master/homework/final/BST_test.js)

### 測試結果

```
nan@20190116-01 MINGW64 ~/Desktop/se109a/se109a/homework/final (master)
$ deno test BST_test.js
Check file:///C:/Users/nan/Desktop/se109a/se109a/homework/final/.deno.test.ts
running 1 tests
test BST_test ... {"value":55,"left":{"value":24,"right":{"value":53},"left":{"value":11}},"right":{"value":89,"left":{"value":72,"left":{"value":69}}}}
{
  value: 55,
  left: { value: 24, right: { value: 53 }, left: { value: 11 } },
  right: { value: 89, left: { value: 72, left: { value: 69 } } }
}
{
  value: 69,
  left: { value: 24, right: { value: 53 }, left: { value: 11 } },
  right: { value: 89, left: { value: 72, left: {} } }
}
{
  value: 69,
  left: { value: 53, right: {}, left: { value: 11 } },
  right: { value: 89, left: { value: 72, left: {} } }
}
ok (197ms)

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out (209ms)
```
