// Include the server in your file
const server = require('server');
const { get, post } = server.router;

// Handle requests to the url "/" ( http://localhost:3000/ )
server([
  server.get('/*', function(req, res){
	  res.sendFile(__dirname + '/index.html');
  });
]);
