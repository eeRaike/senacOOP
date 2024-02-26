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

//5.
console.log("\nEx.5");
let soma =  0
for (let i = 0; i < 10; i++) {
    if(i % 2 === 0){
        soma += i
        console.log(soma);
        
    }
    
}

//6
console.log("\nEx.6");

const array3 = [112,222,34,44,45]
let min = array3[0]
for (let i = 0; i < array3.length; i++) {
    if(min > array3[i]){
      min = array3[i]
        
    }
    console.log(min);
    
    
}



// médios (vou fazer depois to com sono demais pra usar o cérebro)


//1. 
console.log("\nEx.1");

const primeArray = [10,2,3,17,100,144,22,89,97]

function isPrime(num:number): Boolean{
    if(num <= 1) return false;

    for (let i = 2; i < num; i++) {
       if(num % i === 0){
         return false;
       }
        
    }
    console.log(num ,"is prime");
    return true;
    
    
}

primeArray.forEach(isPrime)

//2.
console.log("\nEx.2");

    let text2 = "String teste muito zika B)"

    let vowels = text2.toLowerCase().split("")
    let vowelCount:number = 0
    console.log(vowels);
    


    for (let i = 0; i < vowels.length; i++) {
        if(vowels[i].match(/[aeiou]/g)){
            vowelCount++
            console.log(vowels[i],vowelCount);
            
        }
    
                
    }








/*
//1.
console.log("\nEx.1");

const array2 = [1,2,3,4,5,6]

for (let i = 0; i < array2.length; i++) {
    let a = array2[i] += array2[i+1]
    console.log(a / array2.length) 

}
*/