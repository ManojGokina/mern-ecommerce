const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const dbConnect = require("./config/dbConnect");
const dotenv = require("dotenv").config();
const { mongoose } = require("mongoose");
const authRouter  = require('./routes/authRoute');
const { notFound, errorHandler } = require("./middleware/errorHandling");
const cookieParser = require('cookie-parser');

mongoose.set("strictQuery", false);
dbConnect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());


app.use('/server/user', authRouter);


app.use(notFound);
app.use(errorHandler);

app.listen(5500, () => {
   console.log("Server is running");
})