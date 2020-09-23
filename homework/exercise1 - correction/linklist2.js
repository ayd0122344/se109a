class Node{
  constructor(data){
    this.data=data;
    this.next=null;
  }
}
class linklist{
  constructor(){
    this.length=0;
    this.head=null;
    this.Rtail=null;
    
  }
  enqueue(data) {
    
    let node = new Node(data);
    
    if(!this.head){
    this.head=node;
    }
    else if(!this.Rtail){
      this.Rtail=node;
      this.head.next=this.Rtail;
    }
    else
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
      else r=this.head.data;
      let current = this.head;
      this.head=current.next;
      this.length--;
      return r;
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
