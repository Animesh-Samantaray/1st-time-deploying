require('dotenv').config();
const express = require('express')
const app = express()
 const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/submit',(req,res)=>{
    res.send("I am submitting now .....");
});

app.get('/enroll',(req,res)=>{
    res.send(" <h2> Enroll here</h2>");
});

app.get('/login',(req,res)=>{
    res.send("<h1> You are on the login page</h1>");
});

app.listen(process.env.PORT, () => {
  console.log(`http://localhost:${port}`);
});

