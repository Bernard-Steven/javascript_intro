/*let a = [-7, -12, -9, -4, 3, -17, 15, -16, -2, -12, 10, -16, 6, 17]
let b = [-4, 17, -12, -16]

function arrayDiff(a, b) {

    let n = 0
    let c = []

    switch ((a.length > b.length) && (b.length!= 0)) {
        case true:
            for (i in a) {
                for (n in b) {
                    if ((a[i] === b[i])){
                        break;
                    } else if ((a[i] !== b[i]) && (n = b.length)){
                        c.push(a[i]);   //last time through
                        break;
                    } else {
                        null
                    }
                }
            }
            return (c)
        case false:
            return (a)
    }
}

console.log(arrayDiff(a,b));*/

let a = [-7, -12, -9, -4, 3, -17, 15, -16, -2, -12, 10, -16, 6, 17];
let b = [-4, 17, -12, -16];

function arrayDiff(a, b) {

    let n = 0;
    let c = []

    switch ((a.length > b.length) && (b.length!= 0)) {
        case true:
            for (i in b) {
                for (n in a) {
                      if ((b[i] === a[n])){
                       a.splice[n, 1];
                    }
                  }
                }
            return (a)
        case false:
            return (a)
    }
}
console.log(arrayDiff(a));
