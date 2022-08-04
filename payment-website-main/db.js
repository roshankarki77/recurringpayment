const { default: mongoose } = require("mongoose");

const mongoose=requre("mongoose");

module.exports= () => {
    const connectionParams={
        useNewUrlParser:true,
        useUnifiedtopology:true,
    };
    
    try {
        mongoose.connect(process.env.DB,connectionParams)
        console.log("Connected to database successfully")
    } catch (error) {

        console.log(error)
        console.log("Couldn't connect to database!");


    }
    

}