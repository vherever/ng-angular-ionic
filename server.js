var express = require('express'),
	app		= express();

	app
	.use(express.static('./www/'))
	.get('*', function(req, res) {
		res.sendfile('index.html');
	})
	.listen(3000);
console.log('Listening on port 3000...');