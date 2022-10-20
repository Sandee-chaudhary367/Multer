const app = require("./app");
const mongoose = require("mongoose");

process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION, APP SHUTTING NOW!!");
  console.log(err.message, err.name);
  process.exit(1);
});

const DB = "mongodb://127.0.0.1:27017/Multer2";
// 
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: true,
  })
  .then(() => {
    console.log("DB connected successfully");
  }).catch((e)=>{
    console.log(e)
  })

const port = 3000;

const server = app.listen(port, () => {
  console.log("Server is up listening on port:" + port);
});