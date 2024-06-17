const mongoose = require("mongoose");
const MONGO_DB = "mongodb://127.0.0.1:27017/schnitzel";
mongoose.connect(MONGO_DB)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error:any) => {
        console.error('Error connecting to MongoDB:', error);
    })
