const express = require('express');

const app = express();
const port = 8000;

app.listen(port,()=> {
  console.log('listen port 8000');
})

app.get('/helloworld/*', (req,res)=>{
  var request = req.path.split('/');
  res.status(200).json({ response: 'Hello, ' +  request[request.length-1] });
})
