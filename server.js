var express = require('express');
var app = express();

/*app.get('/', function(req, res) {
  console.log('201')
}
);*/

app.use(express.static('public'));
app.listen(process.env.PORT || 8080, function() {
console.log('running on 8080')
});
