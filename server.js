var express = require('express'),
	app		= express();

	app
	.use(express.static('./www/'))
	.get('*', function(req, res) {
		res.sendfile('index.html');
	})
	.listen(process.env.PORT || 3000, function() {
		console.log('Listening on port 3000...');
	});
