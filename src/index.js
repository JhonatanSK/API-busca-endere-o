const express = require('express');
const axios = require('axios');

const app = express();

app.use(express.json());

app.post('/', async (req, res) =>{
    const { cep = "08431160" } = req.body;

    const apiCep = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

    const {logradouro, complemento, bairro, localidade, uf} = apiCep.data;

    console.log(logradouro, complemento, bairro, localidade, uf);
    return res.json( apiCep.data );
})

app.listen(3333);