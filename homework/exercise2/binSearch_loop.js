function bsearch(a, o, from, to) {
    if (from > to) return null
    var mid = Math.floor((from + to)/2)
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
        mid = Math.floor((from + to)/2)
    }

  }
  
  function search(a, o) {
     var n = a.length
     return bsearch(a, o, 0, n)
  }
  
  var t = search([1, 3, 4, 6, 7, 8], 4)
  console.log('t=', t)
  var t = search([1, 3, 4, 6, 7, 8], 5)
  console.log('t=', t)
  var t = search([1, 3, 4, 6, 7, 8], 8)
  console.log('t=', t)
  var t = search([1, 3, 4, 6, 7, 8], 9)
  console.log('t=', t)
  var t = search([1, 3, 4, 6, 7, 8], 1)
  console.log('t=', t)
  var t = search([1, 3, 4, 6, 7, 8], 0)
  console.log('t=', t)