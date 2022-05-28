var express = require('express');
var router = express.Router();


const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()


/* Afficher tout les commentaires */
router.get('/', async function(req, res, next) {
  const commentaires = await prisma.commentaire.findMany()
  res.send(commentaires);

  });
  

  /* Afficher un commentaire d'un id donnee*/
  router.get('/:id', async function(req, res, next) {
  const commentaire = await prisma.commentaire.findUnique({
    where: {
      id: req.body.id ,
    },
  })
  res.send(commentaire)
  });
  

 /* supprimer un commentaire */
router.delete('/:id', async (req,res)=>{
  const commentaire = await prisma.commentaire.delete({
    where: { id: req.body.id },
  })
  res.send(commentaire)
})
  

/* Ajouter un commentaire */
router.post('/', async (req,res)=>{
  const commentaire = await prisma.commentaire.create({
      data : req.body,
      })
   res.send(commentaire)
  })
               
  
 /* Mettre a jour un commentaire */
router.patch('/', async (req,res)=>{
  const commentaire = await prisma.commentaire.update({
    where: {id: req.body.id },
    data : req.body,
    })
 res.send(commentaire)
 })
  
  
  
    
module.exports = router;