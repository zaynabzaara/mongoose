const { json } = require('express')
const express = require('express')
const { findByIdAndRemove } = require('../models/persons')
const router = express.Router()
const persons = require('../models/persons')




//get all persons
router.get('/person', (req,res)=> {
    persons.find()
    .then((data)=>res.json(data))
    .catch(err => res.json(err.message)) 
})

//findOne

router.get('/',(req,res)=>{
    persons.findOne({ favoriteFoods : req.body.favoriteFoods}, (err,data)=>{
        if(err) throw err
        res.json(data)
    })
} )

//find by id
router.get('/:id',(req,res)=>{
    
    persons.findById({_id:req.params.id},
        (err,data)=> {
            if(err) throw err
            res.json(data)
        })
})

//findOneAndUpdate
router.post('/:name', (req,res)=>{
   
    const filter = {name: req.params.name }
    const update = { favoriteFoods: req.body.favoriteFoods };
     persons.findOneAndUpdate(filter,update, {new: true},(err,data)=>{
        if(err) throw err
        res.json(data)
    } )
})

//findbyidandremove
router.delete('/:id', (req,res)=>{
    const filter = {_id: req.params.id }
    persons.findByIdAndRemove(filter, (err,data)=>{
        if(err) throw err
        res.json("element was deleted")
    })
})


//post new person
router.post('/new',(req,res)=>{
    let newPerson = new persons(req.body)
    newPerson.save((err,data)=>{
        if (err) throw err
        res.json(data)
    })
})



//update data
router.put('/:id', (req,res)=>{
let newData = req.body
    persons.findByIdAndUpdate({_id:req.params.id},newData
        ,(err,data)=> {
            if(err) throw err 
            res.json(data)
        }
    )

})







module.exports= router;