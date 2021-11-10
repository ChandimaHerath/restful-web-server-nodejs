const express = require('express');
const app = express();
const courses =[
    {id:1, name:'Computer Programming'},
    {id:2, name:'Web Developing'},
    {id:3, name:'Image Processing'},
    {id:4, name:'Object Oriented programming'}
]

//Get Methods

//Get all courses
app.get('/api/courses', (req,res)=>{
    res.send([courses]);
});     

//Get selected course
app.get('/api/courses/:id', (req,res)=>{
    const course = courses.find(c=>c.id=== parseInt(req.params.id));
    if(!course){res.status(404).send('Course not found..!')
    return;
}
   res.send(course)
});


//Server Listing to the client
app.listen(3000,()=>{
    console.log('listning on port 3000')
});
 