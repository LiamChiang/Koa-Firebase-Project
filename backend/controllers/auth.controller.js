// const User = require('../model/auth.model');
const firebaseAdmin = require('firebase-admin'),
	firebaseAuth = require('koa-firebase-middleware'),
	firebaseClient = require('firebase'),
	bodyparser = require('koa-bodyparser')
	path = require('path'),
	serviceAccount = require(path.join(__dirname, '../levo-12859-firebase-adminsdk-i1u5p-afb709ff77.json'));


//initialise the admin firebase
const fireAdmin = firebaseAdmin.initializeApp({
	credential: firebaseAdmin.credential.cert(serviceAccount),
	databaseURL: "https://levo-12859.firebaseio.com/"
})

//initialise the client firebase
const fireApp = firebaseClient.initializeApp({
	apiKey: "AIzaSyBZQIVcfrFvQwmtNJ_QtcyAIZFfBuEWlBs",
	authDomain: "project-365456104432.firebaseapp.com",
	databaseURL: "https://project-365456104432.firebaseio.com",
	storageBucket: "project-365456104432.appspot.com"
});


async function login(param) {
	const {password, email} = param;
	fireApp.auth().signInWithEmailAndPassword(email, password).catch(function(err){
		console.log(err.code)
		console.log(err.message)
	})
	// let customToken = await fireAdmin.auth().createCustomToken(uid, {
	// 	login_time: new Date().getTime()
	// });
	// ctx.body = {
	// 	customToken
	// };
}

async function sim(req, res) {
	await fireApp.auth().signInWithCustomToken(customToken);
	let user = fireApp.auth().currentUser;
	let idToken = await user.getToken(true);

	ctx.body = {
		idToken
	}
}



let loginUser = (email, password) => {
	return new Promise((resolve, reject)=> {

	})
}

module.exports = {login, sim};