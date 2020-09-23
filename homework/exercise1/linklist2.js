class Node{
  constructor(data){
    this.data=data;//every data saves in "data"
    this.next=null;//node.next default "null"
  }
}
class linklist{
  constructor(){
    this.length=0;
    this.head=null;
    this.Rtail=null;
    
  }
  enqueue(data) {
    //new a node
    let node = new Node(data);
    
    if(!this.head){//if it is the first one => save directly
    this.head=node;
    }
    else if(!this.Rtail){
      this.Rtail=node;
      this.head.next=this.Rtail;
    }
    else //find tail
    {
      let tail=this.Rtail;
      this.Rtail=node;
      tail.next=this.Rtail;
    }
    this.length++;//length of the linklist++

  }

  dequeue() {
      let r=0;
      if(this.length==0) return "This queue is empty!";
      else r=this.head.data;//put the first one into r
      let current = this.head;//put the head into current
      this.head=current.next;//let the next node become first node(head)
      this.length--;
      return r;// return the first one
  }
}


var q = new linklist()
q.enqueue(3)
console.log("after enqueue 3, q=", q)
q.enqueue(5)
console.log("after enqueue 5, q=", q)
q.enqueue(2)
console.log("after enqueue 2, q=", q)

var t1 = q.dequeue()
console.log("after dequeue, t1=", t1)
console.log("and q=", q)
q.dequeue()
q.dequeue()

var t2 = q.dequeue()
console.log("t2=", t2)
console.log("q=", q)
