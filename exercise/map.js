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

  arrStudent.map(({name, email, age}) => console.log(email))
  let names = arrStudent.map((item) => item.name)
