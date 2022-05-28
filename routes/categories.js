var express = require('express');
var router = express.Router();


const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()


/* Afficher tout les categories */
router.get('/', async function(req, res, next) {
  const categories = await prisma.categorie.findMany()
  res.send(categories);
  
  });
  

  /* Afficher un categorie d'un id donnee*/
  router.get('/:id', async function(req, res, next) {
    const categorie = await prisma.categorie.findUnique({
      where: {
        id: req.body.id ,
      },
    })
    res.send(categorie)
  });
  

  /* supprimer une categorie */
  router.delete('/:id', async (req,res)=>{
    const categorie = await prisma.categorie.delete({
      where: { id: req.body.id },
    })
    res.send(categorie)
  })
  

  /* Ajouter une categorie */
  router.post('/', async (req,res)=>{
    const categorie = await prisma.categorie.create({
      data : req.body,
      })
   res.send(categorie)
  })
               
  
  /* Mettre a jour une categorie */
  router.patch('/',async (req,res)=>{
    const categorie = await prisma.categorie.update({
      where: {id: req.body.id },
      data : req.body,
      })
   res.send(categorie)
   })
  
  
  
  
  

module.exports = router;