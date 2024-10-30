import express from 'express';

const app = express();

app.get("/", (req, res) => {
    res.send('Hello Woooooooooooooorld');
})


APP
app.listen(5000, () => {
    console.log('Servidor rodando em http://localhost:5000');
})