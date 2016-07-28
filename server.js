var express = require('express');
var app = express();
var ig = require('instagram-node').instagram();

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

ig.use({
	access_token: '3584603477.1677ed0.fa65897d15f14eadbe6f79d6bd8ba8e0',
});

app.get('/', function(req, res) {
    ig.user_self_media_recent(function(err, medias, pagination, remaining,
    limit){
	res.render('pages/index', { grams: medias });
      //render the home page and pass in the popular images
	});
});

app.listen(8080, function(req, res){
	console.log("Server started on port 8080")
});

