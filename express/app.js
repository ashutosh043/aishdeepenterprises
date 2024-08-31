const express = require('express')
const app = express()
const port = 3000;

app.set('view engine','ejs')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

  app.get('/about', (req, res) => {
    res.send('about')
  })

  app.get('/blood-nonvacuum-vials', (req, res) => {
    res.send('blood-nonvacuum-vials')
  })

  app.get('/blood-vacuum-vials', (req, res) => {
    res.send('blood-vacuum-vials')
  })
  app.get('/contact', (req, res) => {
    res.send('contact')
  })
  app.get('/container', (req, res) => {
    res.send('container')
  })
  app.get('/ria-vials', (req, res) => {
    res.send('ria-vials')
  })
  
  app.get('/404', (req, res) => {
    res.send('Page not Found')
  })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})