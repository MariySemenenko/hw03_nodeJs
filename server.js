// const app = require('./app')

// app.listen(3000, () => {//start the port
//   console.log("Server running. Use our API on port: 3000")
// })

const app = require("./app");

const mongoose = require("mongoose");
const DB_HOST = 'mongodb+srv://maria:ucKDALy0frstcq5c@cluster0.hmvws2a.mongodb.net/contacts_id?retryWrites=true&w=majority';


mongoose.set('strictQuery', true);

mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log("Database connection successful")
    app.listen(3000);
  })
  .catch((error) => {
    console.log(`Database connection failed. Error message: ${error.message}`);
    process.exit(1);//cloused running processes
  });