import express from "express";
import fs, { fstatSync } from 'fs';
const app =  express();

app.use(express.json());

app.post('/' , (req,res,next)=>{
    console.log(req.body);
})

app.get('/sky/:id', (req,res,next)=>{
    console.log(req.path);
    console.log(req.headerth);
    console.log(req.params);
    console.log(req.query);
    res.sendStatus(400)
});

app.get('/file1',(req,res)=>{
    try
    {
        const data = fs.readFileSync('/file.txt');
    }
    catch(error){
        res.status(404).send('file not found');
    }
    
});

app.get('/file2',(req,res)=>{
    fs.readFile('/file.txt',(err,data)=>{
        if (err){
            res.status(404).send('file2 not found');
        }
    })
});


app.get('/file3',(req,res,next)=>{
    fsAsync.readFile('/file.txt')
    .catch( (error)=> res.status(404).send('File not found') );
});


app.use((req,res,next) =>{
    res.sendStatus(404);
});

app.use((err,req,res,next) =>{
    console.error(error);
    res.sendStatus(500).json({message :'something went wrong'});
});

app.listen(8080);

