var Person = function (){
  var name="kiran";
  var age =38;
  this.firstName ="Ravi";
}
var Person2 = ()=>{
  this.lastName ="JOHN"
}
var x = new Person();

console.log(typeof x)
console.log(x.firstName);
var z = new Person2();
console.log(z)