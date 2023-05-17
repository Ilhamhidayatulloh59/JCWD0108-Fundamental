let arr1 = [
    { name: "Student 1", email : "student1@mail.com"  }, 
    { name: "Student 2", email : "student2@mail.com"  }
]

let arr2 = [
    { name: "Student 1", email : "student1@mail.com"  }, 
    { name: "Student 3", email : "student3@mail.com"  }
]

function myFunc (a, b) {
    let merge = [...a, ...b]

    return merge.filter(
        (item, index, array) => (
            index == array.findIndex(value => item.name == value.name && item.email == value.email)
        )
    )
}

function merge(data1, data2) {
    let comb = [...data1, ...data2];
    let arr = [];

    comb.map(item => {
        let stringed = JSON.stringify(item) // diubah ke bentuk JSON
        if (arr.includes(stringed) == false){
            arr.push(stringed)
        } 
    })

    return arr.map(i => JSON.parse(i)) // dibalikin ke bentuk object javascript
}
    
console.log(myFunc(arr1, arr2));
console.log(merge(arr1, arr2));
