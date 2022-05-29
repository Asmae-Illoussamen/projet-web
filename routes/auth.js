var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');


router.post('/', async function(req, res){
   
    // recuperation de l'utilisateur de la bd
    var user = await prisma.user.findUnique({
        where: {
             email : req.body.email ,
        } 
    })

    //verification des donnees
    if(user) {
        if(user.password == req.body.password) {
            var token = jwt.sign({id: user.id}, 'ismykey');
            return res.status(200).send({
                message: 'Auth success',
                token: token
            })
        }
    }

    return res.status(400).send({
            message: 'Email or password is incorrect'
    });
});

module.exports = router;