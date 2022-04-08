'use strict';
 
var lname='kiran';//string
var fname="paturi";
var age =38;//number
var agreeTerms = true;//bool
var marks =[100,1120]//
var getFullName = function(){
  return fname+lname;
};
getFullName();
console.log(typeof getFullName);
console.log(typeof age);
console.log(typeof agreeTerms);
console.log(typeof marks);
//console.log(typeof x)
//console.log("x=", x);

//block level scope
if(true){
    var a = 100;
    console.log(a);
}

console.log(a);




