const express = require('express');
const app = express();

//Get Methods

app.get('/',(req,res)=>{
    res.send('hello world')
});

app.get('/api/courses', (req,res)=>{
    res.send([1,2,3]);
});



//Server Listing to the client
app.listen(3000,()=>{
    console.log('listning on port 3000')
});
 