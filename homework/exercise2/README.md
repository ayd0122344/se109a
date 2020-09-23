```
function bsearch(a, o, from, to) {
    if (from > to) return null
    var mid = Math.floor((from + to)/2) //先在迴圈外做一次找中間數
    while(from < to)
    {
        if (a[mid] === o)  return mid;
        else if (o > a[mid])
        {
            from=mid+1; 
        }
        else//(o < a[mid])
        {
            to=mid;
            from=0;
        }
        mid = Math.floor((from + to)/2) //用心的from跟to找中件數並重新loop
    }

  }
```


◎ 指令列

<img src="https://github.com/ayd0122344/se109a/blob/master/homework/exercise2/instruction.jpg" width=600 >

◎ 成果展示

<img src="https://github.com/ayd0122344/se109a/blob/master/homework/exercise2/result.jpg" height=300 >
