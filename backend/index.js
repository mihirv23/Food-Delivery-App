const express = require('express')
const app = express()
const port = 5000
const mongoDB = require("./db");


mongoDB();
//very imp
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With,Content-Type, Accept");
    next();
})
app.use(express.json());
//the above one is very imp to facilitate the middleware feature to parsejdson body from incoming requests

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use('/api',require("./Routes/CreateUser"))
app.use('/api',require("./Routes/DisplayData"))
app.use('/api',require("./Routes/OrderData"))
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})