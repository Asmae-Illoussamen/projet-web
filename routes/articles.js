var express = require('express');
var router = express.Router();

const articles = require('../data/articles.json')


router.get('/', function(req, res, next) {
  console.log(req.query)
  let {skip,take} = req.query
  skip=skip ||0
  take=take || 10
  const a = [... articles]
  res.send(a.splice(skip,take));

});

router.get('/:id', function(req, res, next) {
  const article = articles.find((a)=>a.id === parseInt(req.params.id))
  const r = article ? article :'Not found'
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