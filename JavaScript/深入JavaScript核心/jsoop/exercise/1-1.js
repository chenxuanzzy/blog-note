let str = "string";
console.log(typeof str); //string
str.val = 100;
console.log(str.val); //undefined
let obj = new String("string");
console.log(typeof obj); //Object
obj.val = 100;
console.log(obj.val); //100
console.log(typeof obj.valueOf()); //string
//valueOf() 等於回傳該對象的原始值
console.log(obj);
