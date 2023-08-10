// const app = require('./app')

// app.listen(3000, () => {//start the port
//   console.log("Server running. Use our API on port: 3000")
// })

const app = require("./app");

const mongoose = require("mongoose");
const { DB_HOST, PORT = 3000 } = process.env;

mongoose.set('strictQuery', true);

mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log("Database connection successful")
    app.listen(PORT);
  })
  .catch((error) => {
    console.log(`Database connection failed. Error message: ${error.message}`);
    process.exit(1);
  });