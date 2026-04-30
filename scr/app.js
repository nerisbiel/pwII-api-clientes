
const express = require("express");
const clientesRoutes = require(" ./routes/clientesRoutes")

const app = express();
const PORT = process.env.PORT ||3000;

//Middlewares
app.use(express.json());

//Rota raiz:
app.get("/" , (req, res) => {
    res.json({
        mensagem: "API de clientes",
        versao: "1.0.0",
        endpoints: {
            litarTodos: "GET /clientes",
            buscarPorId: "GET /clientes/:id",
            
        }
    })
})

app.use("/clientes", clientesRules )

app.use((req, res ) =>{
    res.status(404).json({
        sucesso: false,
        mensagem: "Rota não encontrada",
         
    })
})

app.listen(PORT, () => {
    console.log(`servidor rodando na porta ${PORT}`)
})

module.exports = app;