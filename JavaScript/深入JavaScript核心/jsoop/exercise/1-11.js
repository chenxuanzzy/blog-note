function run() {
  try {
    console.log(a); // a is not defined
  } catch (e) {
    console.log(e.message); // undefined
  }
}
console.log(run());
