//Diketahui
var arrStudent = [
    {
      name: "Andi",
      email: "andi@gmail.com",
      age: 19,
      score: 60,
    },
    {
      name: "Budi",
      email: "budi@gmail.com",
      age: 29,
      score: 70,
    },
    {
      name: "Lala",
      email: "lala@gmail.com",
      age: 39,
      score: 80,
    },
    {
      name: "Yuni",
      email: "yuni@gmail.com",
      age: 49,
      score: 90,
    },
  ];

//   console.log({
//     score: { highest: 90, lowest: 60, average: 75 },
//     age: { highest: 49, lowest: 19, average: 34 }
//   })

function calculate(arr) {
    let arrAge = arr.map(i => i.age).sort((a, b) => a - b) // [ 19, 29, 39, 49 ]
    let arrScore = arr.map(i => i.score).sort((a, b) => a - b) // [ 60, 70, 80, 90 ]

    let age = {
        max: arrAge[arrAge.length - 1],
        min: arrAge[0],
        avg: arrAge.reduce((a, b) => a + b) / arrAge.length
    }
    
    let score = {
        max: arrScore[arrScore.length - 1],
        min: arrScore[0],
        avg: arrScore.reduce((a, b) => a + b) / arrScore.length
    }
    return {age, score}
}

console.log(calculate(arrStudent));