/*function arrayDiff(a, b) {
  
    let aArray = [];
    let bArray = [];

    let p = Boolean(a.length>b.length);
    
      switch (p){
        case true:
          for(i in a){
            if (a[i]!==b[i]){
              aArray.push(i);
              bArray.push(i);
            } 
          }
          return (aArray,bArray)  
          break;
        case false:
          for(i in b){
            if (a[i]!==b[i]){
              aArray.push(i);
              bArray.push(i);
            } 
          }
          return (aArray,bArray)  
          break;
    }
}
var a = [];
var b =[4,5];
let pArray = [];
let p = Boolean(a.length>b.length)

let n = 0;

switch (p){
  case true:
  for(i in a){
    for(i in b)
    if (a[i]===b[i]){
      a.splice(i-n,1)
      b.splice(i-n,1)
      n++
    } 
  }
  return (a, b)
  console.log("a was " + a, "\n b was " + b);
  break;
  case false:
      for(i in b){
    for(i in a)
    if (a[i]===b[i]){
      a.splice(i-n,1)
      b.splice(i-n,1)
      n++
    } 
  }
  return (a, b)
  console.log("a was " + a, "\n b was " + b);
}*/

let callback = (num) => {
  switch(2){
    case num % 2 == 0: 
    console.log(num+"\n number is even");
    break;
    case num % 2 !== 0: 
    console.log(num+"\n number is odd");
    break;
    default:
    console.log("Why didn't you use a number");
  }  

}
callback(1);