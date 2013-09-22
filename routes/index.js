var Home = require('./home')
	, scli = require('rex-shell')
	, _ = require('underscore')
	, defaultRoute = function(req, res, next) {
		scli("Route matched!", req.url, req.route)
		// res.send({ fuck : "this" })
		res.render('home', { title : req.params.title || "NO TITLE" })
	}

exports.define = function(app) {

	scli("Defining Zngine routes...")

	// app.all('*', function(req, res, next) {
	// 	scli("Request!", req.url, req.route )
	// 	next()
	// })

	app.get("/:title?/:subtitle?", Home.page )
	app.get("/", Home.page )

	scli.success("Zngine routes defined!")

}