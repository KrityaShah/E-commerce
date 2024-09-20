const express = require('express');
const app = express();
const PORT = 5000;
const router = require("./router/auth-router");


// mounting router
app.use("/api/auth", router)

app.listen(PORT, () =>{
   console.log(`Server is running at ${PORT}`);
   
})