let start = [
    "Justin",
    "Andy",
    "Jenn",
    "Zack",
    "Scott"
]

// start.forEach((isJ) => {
//     console.log()
// }

console.log(start.filter(name => name[0]=== "j"));

// find the average of all students
let students = [
    {
        name:"Andy",
        grade: 3.0
    },
    {
        name: "Bill",
        grade: 2.8
    },
    {
        name: "Jackie",
        grade: 3.0
    },
    {
        name: "Eli",
        grade: 4.0
    }
]

let i = 0;
students.forEach(student => i += student.grade)    
console.log(i/students.length);

let results = [1,2,3]
    .map((x) => x * x)
    .reduce((totalVal, curValue) => totalVal += curValue, 0)
console.log(results)