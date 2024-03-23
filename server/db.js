const mongoose = require("mongoose");
const dotenv = require("dotenv");


dotenv.config();
const Connection = async () => {
    try {
        mongoose.connect(process.env.MONGO);
        console.log("DB Connected");
    }
    catch(err) {
        console.log("DB Connection error: " + err);
    }
};

Connection();