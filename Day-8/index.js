var a = 12;
var b = 23;
sum(a, b);

var c = 25;
var d = 45;
sum(c, d);

var e = 65;
var f = 87;
sum(e, f);

function sum(a, b){
    var sum = a + b;
    console.log("the result is sum", sum);
}


function Fun(a, b) {
  console.log(a + b, "total");
  return a + b; // 
  console.log(b + 1);
}
console.log(Fun(43, 10));
var output = Fun(43, 57);
console.log(output, "output");



function Person(){
    this.firstName = "awdiz"
    this.lastName = "awdiz"
}

const Person1 = new Person();
const Person2 = new Person();

console.log(Person1);
console.log(Person2);