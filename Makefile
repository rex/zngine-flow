tests:
	mocha

package:
	grunt build

deploy:
	git push origin master

setup:
	bower install
	npm install