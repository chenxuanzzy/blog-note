function build() {
  let args = new Array(); // []
  for (let i = 0; i < arguments.length; i++) {
    args.push(arguments[i]);
  }
  args.forEach((item) => {
    console.log(item); //10, 20, 30
  });
}
build(10, 20, 30);
