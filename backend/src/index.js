const express = require('express');
const mongoose = require('mongoose')
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://matheus:eryeiix4@cluster0-a6dw0.mongodb.net/teste?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json());

app.post('/users', (request, response) => {
    console.log(request.body);
    return response.json({ message: 'Olar' });
});

app.listen(3334);