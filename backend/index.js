require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 5000;
const authRouter = require("./router/auth-router");
const enquiryRouter = require("./router/enquiry-router");
const connectDb = require("./utils/db");

app.use(express.json())
// mounting router
app.use("/api/auth", authRouter);
app.use("/api/form", enquiryRouter)

connectDb().then(() =>{
   app.listen(PORT, () =>{
      console.log(`Server is running at ${PORT}`);
      
   })
})