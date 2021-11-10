const express = require('express');
const app = express();
const Joi = require('joi');
const { join } = require('path/posix');
const { resourceLimits } = require('worker_threads');
const courses =[
    {id:1, name:'Computer Programming'},
    {id:2, name:'Web Developing'},
    {id:3, name:'Image Processing'},
    {id:4, name:'Object Oriented programming'}
]

app.use(express.json());

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



//Post Method
app.post('/api/courses', (req,res)=>{
//   if (!req.body.name||req.body.name.length<3){
        
//          res.status(400).send('Name is required and name should be larger than 3 characters');
//          return;
//      }
    
    //schema for Joi to validate 
    const schema = {
    name : Joi.string().min(3).required()
     };

    //validating the request body using the schema  
    const result = Joi.valid(req.body, schema);
    
    if(result.error){
        res.status(400).send(result.error.details[0].message);
        return;
    }

    const course = {  
        id: courses.length+1,
        name: req.body.name
    };

    courses.push(course);
    res.send(course);
     
});


//Server Listing to the client
app.listen(3000,()=>{
    console.log('listning on port 3000')
});
 