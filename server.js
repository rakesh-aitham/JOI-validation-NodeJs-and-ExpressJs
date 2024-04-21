require("dotenv").config();
require('./db/conn');
const express = require("express");
const userRoute = require('./routes/userRoute')

const app = express();
const port = process.env.PORT;

app.use(express.json({ limit: "10MB" }));
app.use(express.urlencoded({ extended: true }));

app.use('/', userRoute)

app.listen(port, () => {
    console.log(`Server is running at ${port}`);
});