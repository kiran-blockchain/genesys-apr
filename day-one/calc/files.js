const fs = require('fs');

module.exports.createFileCustom = async (data) => {
    
    fs.writeFile("./demo.txt", data,(err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log("Success");
        }
    });  
}