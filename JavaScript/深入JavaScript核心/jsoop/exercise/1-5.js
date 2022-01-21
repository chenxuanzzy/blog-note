console.log(!!""); //false
console.log(!!0); //false
console.log(!!null); //false
console.log(!!undefined); //false
console.log(!!NaN); //false
console.log(!!"hello"); //true
console.log(!!1); //true
console.log(!!{}); //true
console.log(!![]); //true
console.log(!!Infinity); //true

//兩個 !! 等同於 Boolean 將任何值轉成布林值。
