
var positive=true;

var result = new Promise((resolve,reject)=>{
    console.log("I am inside the promise")
    if(positive){
        resolve("I am good");
    }
    else{
        reject("it is negtive");
    }
});
console.log(result);
result.then(x=>{
    console.log(x)
}).catch(err=>{
    console.log(err);
}).finally(()=>{
    console.log("I am the final code")
})
console.log("Let u try")