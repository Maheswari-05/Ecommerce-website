const express=require('express');
const bodyparser=require('body-parser');
const mongoose=require('mongoose');
const app=express();
app.listen(3000,()=>{console.log("Server is created in port 3000")})