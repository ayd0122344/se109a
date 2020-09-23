> 以下針對修正部分做說明，其餘和原版相同

```
class linklist{
  constructor(){
    this.length=0;
    this.head=null;
    this.Rtail=null;//修正:使用Rtail來紀錄最後的節點資料
    
  }
  enqueue(data) {
    //new a node
    let node = new Node(data);
    
    if(!this.head){ //如果head還沒放入資料，則將資料新增到head中
    this.head=node;
    }
    else if(!this.Rtail){
      this.Rtail=node;//如果head已有資料，檢查Rtail有無資料，若無則將資料放入Rtail中
      this.head.next=this.Rtail;//將以有存放資料的Rtail放入head.next
    }
    else
    {
      let tail=this.Rtail;//如果head跟Rtail都有資料則先將Rtail資料存放到變數tail中
      this.Rtail=node;//令新資料成為新的尾巴
      tail.next=this.Rtail; //將這筆新資料放到tail.next也就是原本尾巴的next中，連結整個linklist
    }
    this.length++;

  }
```
◎ 指令列

<img src="https://github.com/ayd0122344/se109a/blob/master/homework/exercise1%20-%20correction/instruction.jpg" width=400/>

◎成果展示

<img src="https://github.com/ayd0122344/se109a/blob/master/homework/exercise1%20-%20correction/result.jpg" width=800/>
