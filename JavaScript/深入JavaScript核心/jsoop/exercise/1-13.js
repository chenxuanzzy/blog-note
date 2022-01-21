function run() {
  try {
    return "abc";
  } finally {
    return "xyz";
    // 先執行且會覆蓋後面的值
  }
}
console.log(run()); // xyz 
