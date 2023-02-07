const { default: mongoose } = require("mongoose");

const dbConnect = () => {
  try {
    const connection = mongoose.connect("mongodb://127.0.0.1:27017/shopping");
    console.log("Mongodb is now connected");
  } catch {
    (err) => console.log("Database Error");
  }
};

module.exports = dbConnect;
