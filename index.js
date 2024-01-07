const express = require('express')
const app = express()
const port = 5000 // localhost port
var cors = require('cors')

app.use(cors())

// users information
const users = [
   {
      id: '001',
      name: 'Sajjad Hossain Sunny',
      batch: 'MERN2205',
   },
   {
      id: '002',
      name: 'Rakib',
      batch: 'MERN2205',
   },
   {
      id: '003',
      name: 'Shourov',
      batch: 'MERN2205',
   },
   {
      id: '004',
      name: 'Rezaul',
      batch: 'MERN2205',
   },
   {
      id: '005',
      name: 'Tuhin',
      batch: 'MERN2205',
   },
   {
      id: '006',
      name: 'Rony',
      batch: 'MERN2205',
   },
   {
      id: '007',
      name: 'Kader',
      batch: 'MERN2205',
   },
   {
      id: '008',
      name: 'Masud Rana',
      batch: 'MERN2205',
   },
   {
      id: '009',
      name: 'Fahad',
      batch: 'MERN2205',
   },
   {
      id: '010',
      name: 'Shahriar',
      batch: 'MERN2205',
   },
]

app.get('/', (req, res) => {
   res.send('Hello World!')
})

app.get('/users', (req, res) => {
   res.send(users)
})

app.listen(port, () => {
   console.log(`Example app listening on port ${port}`)
})