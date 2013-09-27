var scli = require('rex-shell')
	, _ = require('underscore')
	, o_o = require('chainsjs')
	, Chains = {
		Home : require('../chains/home')
	}

o_o.debug = false

exports.page = function(req, res) {
	o_o(
		Chains.Home.page(req.params.title, req.params.subtitle)
	)(
		"Set example proof data",
		function() {
			this.accumulator.proof = {
				isAjax : req.xhr,
				protocol : req.protocol,
				secure : req.secure,
				path : req.path,
				ip : req.ip,
				params : req.params,
				body : req.body,
				queryString : req.query,
				originalUrl : req.originalUrl,
				time : new Date().toLocaleString()
			}
			this.next()
		}
	)(
		"Complete",
		function() {
			scli("accumulator", this.accumulator)
			if(req.xhr) {
				res.json( 200, this.accumulator )
			} else {
				res.render('user/home', { 
					color : req.query.color,
					data : this.accumulator,
					layout : "chrome/main"
				})
			}
		}
	)()
}