function run() {
  try {
    return "abc";
  } finally {
    //會先執行 finally
    console.log("xyz"); // 1. xyz
  }
}
console.log(run()); // 2. abc
