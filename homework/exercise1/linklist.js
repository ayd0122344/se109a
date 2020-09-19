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
    
  }
  enqueue(data) {
    //new a node
    let node = new Node(data);
    
    if(!this.head){//if it is the first one => save directly
    this.head=node;
    }
    else //find tail
    {
      let tail=this.head;//save head in variable "tail"
      while(tail.next!=null)//when tail.next != null, put next node into tail => if find the tail.next == null, it's the last node!
      {
        tail=tail.next;
      }
      tail.next=node;//put the new node into tail.next
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
q.enqueue(5)
q.enqueue(2)
console.log("q=", q)

var t1 = q.dequeue()
console.log("t1=", t1)
console.log("q=", q)
q.dequeue()
q.dequeue()

var t2 = q.dequeue()
console.log("t2=", t2)
console.log("q=", q)
