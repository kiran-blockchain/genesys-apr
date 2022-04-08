const { default: axios } = require('axios');
const path = require('path');

module.exports.home = (req, res) => {
    const filePath = path.join(global.appRoot, "/public/index.html");
    res.sendFile(filePath);
}

module.exports.about = (req, res) => {
    const filePath = path.join(global.appRoot, "/public/about.html");
    res.sendFile(filePath);
}
module.exports.metrics =  (req, res) => {
    getMetrics().then(result=>{
        res.send(result);
    }).catch(err=>{
        res.json({ error: "Error  in fetching the data" })
    })
    console.log(" i am not waiting")

    // try {
    //     let result = await getMetrics();
    //     res.send(result);
    // }
    // catch (ex) {
    //     console.log(ex);
    //     res.json({ error: "Error  in fetching the data" })
    // }
}

const getMetrics = async () => {
    try {
        let result = await axios('https://luckyblock.brugu.io/api/v1/getTotalMetrics');
        return result.data.data;
    }
    catch (ex) {
        console.log(ex);
        throw ex;
    }
    
}