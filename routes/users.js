var express = require('express');
var router = express.Router();


const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()


/* Afficher tout les utilisateurs */
router.get('/', async function(req, res, next) {
  const users = await prisma.user.findMany()
  res.send(users);

});


/* Afficher un utilisateur d'un id donnee*/
router.get('/:id', async function(req, res, next) {
  const user = await prisma.user.findUnique({
    where: {
      id: req.body.id ,
    },
  })
  res.send(user)
});


/* supprimer un utilisateur */
router.delete('/:id', async (req,res)=>{
  const user = await prisma.user.delete({
    where: { id: req.body.id },
  })
  res.send(user)
})


/* Ajouter un utilisateur */
router.post('/', async (req,res)=>{
const user = await prisma.user.create({
    data : req.body,
    })
 res.send(user)
})
  

/* Mettre a jour un utilisateur */
router.patch('/', async (req,res)=>{
  const user = await prisma.user.update({
    where: {id: req.body.id },
    data : req.body,
    })
 res.send(user)
 })

module.exports = router;
