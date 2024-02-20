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
// médios
//1.
console.log("\nEx.1");
var array2 = [1, 2, 3, 4, 5, 6];
for (var i = 0; i < array2.length; i++) {
    var a = array2[i] += array2[i + 1];
    console.log(a / array2.length);
}
