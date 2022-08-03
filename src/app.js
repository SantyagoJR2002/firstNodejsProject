const express = require("express");
require('dotenv').config()
const p = process.env.PORT
const userRouter = require('./users/users.router').router

const app = express();

app.use(express.json());

app.use("/hola", (req, res) => {
  res.json({ message: "Peticion con use", method: req.method });
});

//? Aqui se encuentran las rutas de mis usuarios
app.use('/apiMVC', userRouter)


app.listen(p, () => {
  console.log(`server start at port ${p}`);
});