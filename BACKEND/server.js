const express = require('express');
const app = express();
const mainRouter = require('./routes/')
const cors = require('cors');

const C1 = require('./usertype/classroom');
// const T1 = require('./usertype/Teacher'); 

const PORT= 3000;

app.use(cors());
app.use("/api/v1", mainRouter);
app.listen(PORT,() =>{
  console.log("listening to port number");
});