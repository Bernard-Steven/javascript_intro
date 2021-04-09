var a = [];
var b =[4,5];
let pArray = [];
let n = 0;
let p = Boolean(a.length>b.length)

switch (p){
  case true:
  for(let i=0; i<a.length; i++){
    if (a[i]===b[i]){
      pArray.push(i);
      n++;
    } 
  }
  for(n=0; n<pArray.length; n++){
    n<0 ? a.splice(pArray[n],1) : a.splice(pArray[n-1],1);
    n<0 ? b.splice(pArray[n],1) : b.splice(pArray[n-1],1);
  }
  console.log("a was " + a, "\n b was " + b);
  break;
  case false:
    for(let i=0; i<b.length; i++){
      if (a[i]===b[i]){
        pArray.push(i);
        n++;
      } 
    }
    for(n=0; n<pArray.length; n++){
      n<0 ? a.splice(pArray[n],1) : a.splice(pArray[n-1],1);
      n<0 ? b.splice(pArray[n],1) : b.splice(pArray[n-1],1);
    }
    console.log("a was " + a, "\n b was " + b);
  break;
}
