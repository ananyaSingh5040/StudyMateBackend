// SERVER
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// testing 
app.get('/',(req,res)=>{
    res.send("Backend is live!");
})

const PORT= process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`Server running at port: ${PORT}`);
});