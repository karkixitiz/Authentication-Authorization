const {verifySignUp}=require("../middleware")
const controller=require("../controllers/auth.controller")

module.exports=function(app){
	app.use(function(req,res,next){
		res.header(
			"Acess-Control-Aloow-Headers",
			"x-access-token,Origin, Content-Type,Accept"
		)
		next();
	})

	app.post(
		"/app/auth/signup",
		[
		verifySignUp.checkDuplicateUsernameOrEmail,
      verifySignUp.checkRolesExisted
		],
		controller.signup
	)
	app.post("/api/auth/signin", controller.signin);
}