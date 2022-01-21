var name = "A";

var obj = {
  name: "B",
  getName: function () {
    var that = this;
    // console.log(this);
    return () => {
      return that.name;
    };
  },
};
var result = obj.getName();
console.log(result());
