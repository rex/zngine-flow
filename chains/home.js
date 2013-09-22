var o_o = require("chainsjs")

function page(title, subtitle) {
	return o_o(
		"Step 1",
		function() {
			this.accumulator.one = "accumulator 1"
			this.next()
		}
	)(
		"Step 2",
		function() {
			this.accumulator.two = "accumulator 2"
			this.next()
		}
	)(
		"Set Title",
		function() {
			this.accumulator.subtitle = subtitle
			this.accumulator.title = title
			this.next()
		}
	)
}

module.exports = {
	page : page
}