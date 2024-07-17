const mongoose = require("mongoose")

async function connect(){
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/tour-management")
        console.log("connect to database successful");
    }
    catch{
        console.log("connect failed");
    }
}

module.exports = {connect}