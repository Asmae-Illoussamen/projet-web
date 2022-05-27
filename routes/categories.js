var express = require('express');
var router = express.Router();

const categories = require('../data/categories.json')

router.get('/', function(req, res, next) {
    console.log(req.query)
    let {skip,take} = req.query
    skip=skip ||0
    take=take || 10
    const ca = [... categories]
    res.send(ca.splice(skip,take));
  
  });
  
  router.get('/:id', function(req, res, next) {
    const categorie = categories.find((ca)=>ca.id === parseInt(req.params.id))
    const r = categorie ? categorie :'Not found'
    res.send(r);
  });
  
  router.delete('/:id',(req,res)=>{
    console.log(req.params.id)
    res.send('OK')
  })
  
  router.post('/',(req,res)=>{
   console.log(req.body)
   res.send(req.body)
  })
               
  
  router.patch('/',(req,res)=>{
    console.log(req.body)
    res.send(req.body)
   })
  
  
  
  
  

module.exports = router;