const express = require('express');
const app = express();
const path = require('path')
const port = 3000

app.listen(port, () => {
  console.log('iniciando')
})

app.get('/home' ,(req,res) => {
  res.send('<h1>Hello Word</h1>')
})

app.get('/boas-vindas', (req, res) =>{
  res.sendFile(path.join(__dirname, 'Views/index.html'))
})

app.post('/usuario', (req, res) =>{
  res.send('Cheguei no post')
})

app.put('/usuario', (req, res) =>{
  res.send('Cheguei no put')
})

app.delete('/usuario', (req, res) =>{
  res.send('Cheguei no delete')
})


