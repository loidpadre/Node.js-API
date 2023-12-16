const express = require("express")
const PORT = 3000
const app = express()
const cors = require("cors")


app.use(cors())
app.use(express.json())

// dados iniciais
let users = [
    {
        id: 1,
        nome: "Loid Padre",
        profissao: "Desenvolvedor Web"
    },
    {
        id: 2,
        nome: "Zeferino Palet",
        profissao: "Diretor de Marketing"
    },
    {
        id: 3,
        nome: "Andre Fulano",
        profissao: "Mobile creator"
    },
]

// end pointes
// vamos criar uma nova rota da API


//  criando uma rota para ler os usuario
app.get("/", (req, res) => {
    res.send(users)
})



//  criando uma rota para ler apenar um usuario atraves do id
app.get("/:id", (req, res) => {
    const userId = parseInt(req.params.id)
    const user = users.find((u) => u.id === userId)
    if (user) {
        res.send(user)
    } else {
        res.status(401).send("Usuario não encontrado!")
    }
})


// criado uma rota para cirar usuario
app.post("/user", (req, res) => {
    const novousuario = req.body
    users.push(novousuario)
    res.status(201).send("Usuario cadastrado com sucesso!")
})

//  criando uma rota para deletar um usuari atravez do seu ID

app.delete("/user/:id", (req, res) => {
    const user = parseInt(req.params.id)
    users = users.filter((u) => u.id !== user)
    res.send("Usuario eliminado com sucesso!")
})




// rodando o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})





