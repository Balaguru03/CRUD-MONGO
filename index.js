var express=require('express'),
    body=require('body-parser'),
    mongoose=require("./config"),
    crudmodel=require("./models/crud")
    cors = require('cors'),
    app=express()
    app.use(body.json())
    app.use(cors());
    app.post('/add',(req,res)=>{
        var add=new crudmodel({
            ...req.body
        })
        add.save().then(data=>{
           
                
                res.send({
                    "code":200,
                    "data":data
                })
            
        }).catch(error=>{
            console.log(error)
            res.status(400).send({
                "code":400,
                "data":error
            })
        })
    })
    app.get('/details',(req,res)=>{
      
        crudmodel.find({}).then(data=>{
           
            res.send({
                "code":200,
                "data":data
            })
        }).catch(error=>{
            console.log(error)
            res.status(400).send({
                "code":400,
                "data":error
            })
        })
    })
    app.get('/details/:id',(req,res)=>{
        
        crudmodel.findById({_id:req.params.id}).then(data=>{
            
            res.send({
                "code":200,
                "data":data
            })
        }).catch(error=>{
          
            res.status(400).send({
                "code":400,
                "data":error
            })
        })
    })
    app.put('/update/:id',(req,res)=>{
       
        crudmodel.updateOne({_id:req.params.id},req.body).then(data=>{
            
            res.send({
                "code":200,
                "data":data
            })
        }).catch(error=>{
            console.log(error)
            res.status(400).send({
                "code":400,
                "data":error
            })
        })
    })
    app.delete('/delete/:id',(req,res)=>{
        
        crudmodel.deleteOne({_id:req.params.id}).then(data=>{
            
            res.send({
                "code":200,
                "data":data
            })
        }).catch(error=>{
          
            res.status(400).send({
                "code":400,
                "data":error
            })
        })
    })
    app.listen(8081,'192.168.0.117',()=>{
        console.log("port listen at 8081")
    })