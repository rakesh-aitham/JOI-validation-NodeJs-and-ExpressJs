const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('Connection successful!');
}).catch((e) => {
    console.log('Connection failed!');
})