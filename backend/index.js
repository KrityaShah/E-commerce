require('dotenv').config();
const express = require('express');
const cors = require("cors");
const app = express();
const PORT = 5000;
const authRouter = require("./router/auth-router");
const enquiryRouter = require("./router/enquiry-router");
const connectDb = require("./utils/db");


const corsOptions = {
   origin: "http://localhost:5173",
   method: "GET, POST, PUT, DELETE, PATCH, HEAD",
   credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json())
// mounting router
app.use("/api/auth", authRouter);
app.use("/api/form", enquiryRouter)

connectDb().then(() =>{
   app.listen(PORT, () =>{
      console.log(`Server is running at ${PORT}`);
      
   })
})