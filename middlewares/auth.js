var jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {

	if(!req.headers.token)
		return res.status(403).send({
			message: 'Access denied'
		});

	// verify the token
	jwt.verify(req.headers.token, 'ismykey', async function(err, decoded){
		if(!err) {
			// get user from database with decoded id
			var user = await prisma.user.findUnique({
                where: {
                  id: decoded.id ,
                },
              })

			if(user.role=="admin" || user.role=="author") {
				req.user = user;
				return next();
			}
		}

		return res.status(403).send({
			message: 'Access denied'
		});
	})
} 