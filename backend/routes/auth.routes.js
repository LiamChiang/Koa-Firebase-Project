const Router = require("koa-router"),
	router = new Router(),
	AuthController = require('../controllers/auth.controller.js');
	

router.post('/login', async (ctx, next) => {
	const {email, password} = ctx.request.body;
	console.log(email, password)
	ctx.body = {password: password, email:email}
	AuthController.login(ctx.body).then(err => {
		console.log(err);
	})
})

router.post('/register', async (ctx, next) => {
	AuthController.login();
})

// function verifyToken(ctx)


module.exports = router.routes();