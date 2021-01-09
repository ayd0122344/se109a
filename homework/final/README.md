# 期末報告 - Binary Search Tree

### remove()的刪除流程

1. 假設有以下此樹，而我們要刪除11這個節點，且當前root為此樹

![](https://github.com/ayd0122344/se109a/blob/master/homework/final/img/tree1.jpg)

2. 因為11小於當前root的值(55)，所以進入remove第二次(傳入root.left以及11)

```
if (value < root.value) {
        root.left = remove(root.left, value);  <- 因為這行
        return root;
    }
```

當前root.left為紅框樹

![](https://github.com/ayd0122344/se109a/blob/master/homework/final/img/tree2.jpg)

3. 因為11小於當前root的值(23)，所以進入remove第三次(傳入root.left以及11)
當前root.left為綠框樹

![](https://github.com/ayd0122344/se109a/blob/master/homework/final/img/tree3.jpg)
  
4.因為11等於當前root的值(11)，且為第二種情況(欲刪除之節點只有一個child)，

```
if (!root.left) return root.right;  <- 因為這行
```
第三次remove回傳當前root.right，也就是12

5.回傳的12被放入第二次remove的root.left
```
if (value < root.value) {
        root.left = remove(root.left, value);   <- 因為這行
        return root;
    }
```
且第二次remove的root為23帶頭的，所以23的左子節點變成12，並且return當前root(下圖after的那棵樹)
```
if (value < root.value) {
        root.left = remove(root.left, value);
        return root;   <- 因為這行
    }
```
![](https://github.com/ayd0122344/se109a/blob/master/homework/final/img/tree4.jpg)
  
6.回傳的23帶頭的root被放入第一次remove的root.left(第一次remove的root為55帶頭的)，所以55的左子節點變成"23帶頭的root"，且return當前root(下圖after的那棵樹)

![](https://github.com/ayd0122344/se109a/blob/master/homework/final/img/tree5.jpg)

完成刪除節點的工作!

### 參考資料

[Binary Search Tree](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/tree/binary-search-tree)

[删除Javascript树中的节点](https://www.codenong.com/Removing-a-node-in-a-Javascript-Tree/)

### 演算法說明

> 主程式含大量註解說明

[主程式入口](https://github.com/ayd0122344/se109a/blob/master/homework/final/BST.js)

[測試檔案入口](https://github.com/ayd0122344/se109a/blob/master/homework/final/BST_test.js)

### 複雜度

<table>
  <tr>
    <th>Access</th>
    <th>search</th>
    <th>insertion</th>
    <th>deletion</th>
  </tr>
  <tr>
    <td>O(log(n))</td>
    <td>O(log(n))</td>
    <td>O(log(n))</td>
    <td>O(log(n))</td>
  </tr>

</table>

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
