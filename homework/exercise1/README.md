* 程式碼中另有對程式理解後下的詳細註解
https://github.com/ayd0122344/se109a/blob/master/homework/exercise1/linklist.jpg

* enqueue

  * 情況1: 新增的資料是此linklist的第一筆資料
  
    * 剛new好的node(也就是已有放入資料的節點)直接成為頭頭(head)
    
    ![](https://github.com/ayd0122344/se109a/blob/master/homework/exercise1/newnode.jpg)
  
  * 情況2: 新增的資料非此linklist的第一筆資料 => 必須找到目前linklist中的最後一個node

    1. 將頭頭的資料放入變數tail，並使用while去尋找: 
    
       * 若tail.next不是null(也就是下一個節點還有資料)，則將下一節點設為tail(tail=tail.next)，loop一直到tail.next是null(找到尾巴了!)跳出迴圈
    
    2. 此時的tail是倒數第二個節點，所以tail.next才是真正的尾巴。
    
    3. 將剛new好的node變成新尾巴!(tail.next=node)
    
* dequeue

  step1. 回傳this.head.data，也就是第一筆入的node中的資料
  
  step2. linklist中用第二筆資料取代的第一筆資料(換頭!)

```
let current = this.head;//將目前的頭頭放入變數current
this.head=current.next;//將目前頭頭的下一筆資料(連帶後面的資料)變成新頭頭
```
  
  
### 參考資料

[Linked list Javascript實作及Leet code題目解析](https://medium.com/@nchuuu/linked-list-es6-javascript%E5%AF%A6%E4%BD%9C%E5%8F%8Aleet-code%E9%A1%8C%E7%9B%AE%E8%A7%A3%E6%9E%90-4afcd9a67b3d)

### 印出指令及成果

![](https://github.com/ayd0122344/se109a/blob/master/homework/exercise1/instruction.jpg)

![](https://github.com/ayd0122344/se109a/blob/master/homework/exercise1/result.jpg)
