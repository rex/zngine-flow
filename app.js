/**
 * Module dependencies.
 */

var path = require('path')
	, express = require('express')
	, http = require('http')
	, routes = require('./routes')
	, _ = require('underscore')
	, exphbs = require('express3-handlebars')
	, helpers = require('./helpers/handlebars/')
	, scli = require('rex-shell')

var app = express()

var hb = exphbs.create({
		defaultLayout : "chrome",
		extname : ".hb",
		helpers : helpers
	})

hb.loadTemplates("./views")

app.configure(function(){
	app.engine('.hb', hb.engine )
	app.set('views', __dirname + '/views');
	app.set('view engine', '.hb')
	app.set('port', 3000)
	// app.use(express.directory(path.join(__dirname, 'public')))
	app.use(express.static(path.join(__dirname, 'public')))
	app.use(express.favicon())
	app.use(express.logger());
  app.use(express.cookieParser())
	app.use(express.bodyParser())
	app.use(express.methodOverride())
	app.use(app.router)
})

routes.define(app)

scli("Loaded routes: ", app.routes)

var server = http.createServer(app).listen(app.get('port'), function(){
	console.log("Zngine application started on port " + app.get('port'))
})

