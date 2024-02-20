//1.
console.log("Ex.1");

for (let i = 0; i <= 5; i++) {
    console.log(i);
      
}

//2.
console.log("\nEx.2");

let obj = { 
    name: "obj_test",
    type:"obj",
    function: "test"
}

for (let attribute in obj) {
    console.log(attribute, obj[attribute]);
    
}

//3.
console.log("\nEx.3");

const array1 = [1,2,3,4,5]

array1.forEach(item =>{console.log(item);
})

//4.
console.log("\nEx.4");

let text = "Teste"

for (const i of text) {
    console.log(i);
    
}


// médios

//1.
console.log("\nEx.1");

const array2 = [1,2,3,4,5,6]

for (let i = 0; i < array2.length; i++) {
    let a = array2[i] += array2[i+1]
    console.log(a / array2.length) 

}


