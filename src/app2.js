const express = require('express')
require('dotenv').config()
const p = process.env.PORT
const app = express()
const usersDB = [{
    id:1,
    name:"",
    music:"",
    hobbie:"",
    country:"",
    age:20
}];
app.use(express.json())
app.use('/hola',(req, res)=>{
    res.json({message:'peticion con use',method: req.method})
    app.get('/users',(req,res)=>{
     res.status()   
    })
})
app.get('/users',(req,res)=>{res.status(200).json(usersDB)})
app.get('/users/:id',(req,res)=>{
    const id = Number(req.params.id)
    const filteredDB = usersDB.filter(item => item.id === id)
    if(filteredDB.length > 0){
        res.status(200).json(usersDB[0])
    }else{
        res.status(400).json({message: "Este id es invalido"})
    }
    res.status(200).json(usersDB)
})
app.post('/users',(req, res)=>{
    const data = req.body
    
    if(usersDB.length === 0){
const newUser = {
    id:1, 
    ...data
} 
usersDB.push(newUser)
    } else {
        const newUser = {
            id:usersDB[usersDB.length-1].id + 1, 
            ...data
        }
        usersDB.push(newUser)
    }
    res.status(201).json(usersDB)
})
app.delete('/users/:id',(req,res)=>{
    const id = Number(req.params.id)
    const index = usersDB.findIndex(item=>item.id===id)
    console.log(index)
    if(index!==-1){
        usersDB.splice(index, 1)
        res.status(204).json()
    }else{
        res.status(400).json({message:'invalid id'})
    }
})
app.put('/users/:id',(req,res)=>{
    const id = Number(req.params.id)
    const data = req.body
    const index = usersDB.findIndex(item=>item.id===id)
   if(data.name && data.music && data.country && data.hobbie && data.age){
    usersDB[index]={
        id,
        name: data.name,
        age:data.age,
        music: data.music,
        country: data.country,
        hobbie: data.hobbie
    }
   }else{
    res.status(400).json({message:'missing'})
}
    res.status(200).json(usersDB)
})

app.listen(8000, () =>{console.log(`server start at port ${p}`)})