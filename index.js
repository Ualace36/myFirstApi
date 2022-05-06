const express = require("express")
const app = express()

const port = process.env.PORT || 3000

const usuarios = require("./src/usuarios/usuarios.json")

app.get("/usuarios", (req, res) => {
   return res.json(usuarios) 
})

app.listen(port, () => {
    console.log("Servidor está rodando...");
})