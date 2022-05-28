var express = require('express');
var router = express.Router();


const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()


/* Afficher tout les articles */
router.get('/', async function(req, res, next) {
  const articles = await prisma.article.findMany()
  res.send(articles);

});


/* Afficher un article d'un id donnee*/
router.get('/:id', async function(req, res, next) {
  const article = await prisma.article.findUnique({
    where: {
      id: req.body.id ,
    },
  })
  res.send(article)
});


/* supprimer un article */
router.delete('/:id', async (req,res)=>{
  const article = await prisma.article.delete({
    where: { id: req.body.id },
  })
  res.send(article)
})


/* Ajouter un article */
router.post('/', async (req,res)=>{
  const article = await prisma.article.create({
    data : req.body,
    })
 res.send(article)
})
  

/* Mettre a jour un utilisateur */
router.patch('/',async (req,res)=>{
  const article = await prisma.article.update({
    where: {id: req.body.id },
    data : req.body,
    })
 res.send(article)
 })


module.exports = router;
