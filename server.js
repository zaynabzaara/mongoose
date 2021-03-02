const express = require ('express')
const mongoose = require('mongoose')
const app = express()
const persons = require('./routes/persons')
app.use(express.json());

const mongo_URI="mongodb+srv://sparthigen:ahmed14ab@profiledb.5ujbd.mongodb.net/<dbname>?retryWrites=true&w=majority"

mongoose.connect(mongo_URI,{ useNewUrlParser: true, useUnifiedTopology: true ,useFindAndModify: false}, (err) =>{
    if(err){
        throw err
    }else{
        console.log('database connected')
    }
})

//define routes
app.use('/',persons )


app.listen(5000,(err) => {
    if(err){
        throw err
    }else{
        console.log('server is up and running on 5000')
    }
})