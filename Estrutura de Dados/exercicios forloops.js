//1.
console.log("Ex.1");
for (var i = 0; i <= 5; i++) {
    console.log(i);
}
//2.
console.log("\nEx.2");
var obj = {
    name: "obj_test",
    type: "obj",
    function: "test"
};
for (var attribute in obj) {
    console.log(attribute, obj[attribute]);
}
//3.
console.log("\nEx.3");
var array1 = [1, 2, 3, 4, 5];
array1.forEach(function (item) {
    console.log(item);
});
//4.
console.log("\nEx.4");
var text = "Teste";
for (var _i = 0, text_1 = text; _i < text_1.length; _i++) {
    var i = text_1[_i];
    console.log(i);
}
//5.
console.log("\nEx.5");
var soma = 0;
for (var i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        soma += i;
        console.log(soma);
    }
}
//6
console.log("\nEx.6");
var array3 = [112, 222, 34, 44, 45];
var min = array3[0];
for (var i = 0; i < array3.length; i++) {
    if (min > array3[i]) {
        min = array3[i];
    }
    console.log(min);
}
// médios (vou fazer depois to com sono demais pra usar o cérebro)
//1. 
console.log("\nEx.1");
var primeArray = [10, 2, 3, 17, 100, 144, 22, 89, 97];
function isPrime(num) {
    if (num <= 1)
        return false;
    for (var i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    console.log(num, "is prime");
    return true;
}
primeArray.forEach(isPrime);
//2.
console.log("\nEx.2");
var text2 = "String teste muito zika B)";
var vowels = text2.toLowerCase().split("");
var vowelCount = 0;
console.log(vowels);
for (var i = 0; i < vowels.length; i++) {
    if (vowels[i].match(/[aeiou]/g)) {
        vowelCount++;
        console.log(vowels[i], vowelCount);
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
