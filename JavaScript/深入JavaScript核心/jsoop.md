---
title: "深入 JavaScript 核心"
author: C.-X. Zhao
tags: FrontEnd, JavaScript
---

<!-- cover image -->
<p style="text-align: center">
    <img src="https://i.imgur.com/gDexI3a.png" height=200/>
</p>

<!-- table of contents (TOC) -->
<details>
  <summary>目錄</summary>
    
  [TOC]

</details>

## JavaScript 語法介紹

### undefined & null

- undefined 已宣告卻沒有任何值
- null 沒有值
- JavaScript 預設值為 undefined
- （typeof undefiend) 等於 undefiend
- （typeof null) 等於 objcet
- null & undefiend 都屬於 false

### 1-4 Boolean

`console.log(Boolean("")); //false`

> 如果沒傳值，或者是 0、-0、null、false、NaN、undefined、空字串("")的話，這個物件的值會被初始化成 false ，且長度為 1 。[MDN](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Boolean)

- 1-5

```js
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
```

> 兩個 !! 等同於 Boolean 將任何值轉成布林值。

### 1-11 finally

> finally 語法無法單獨使用，需搭配 try...catch ，當 try ... catch 語法內有 return 時，finally 會先回傳，如有一樣則會被覆蓋掉。

```js
function run() {
  try {
    return "abc";
  } finally {
    return "xyz";
    // 先執行且會覆蓋後面的值
  }
}
console.log(run()); // xyz
```

### 1-14 switch

如果是複雜的 if..else 會建議用 switch 做撰寫

### 2-4 範圍鏈 (Scope chain)

```js
var a = 1;
(function (a) {
  a = 100;
  console.log(a); // 100
})(a); //立即函式外部傳入的參數
console.log(a); // 1
```

### 2-5 閉包（Closure）

```js
var g;
function outer() {
  var a = 100;
  function inner() {
    console.log(a);
  }
  g = inner; //此時 g 等於 inner 函式，但沒有執行
}
outer();
console.log(g()); //100 && undefiend
//會多印出 undefiend 是因為 inner 函式並沒有 return 值
```
