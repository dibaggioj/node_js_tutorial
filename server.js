var http = require("http");
var url = require("url");

//put server code into a function named 'start' and then export this function
function start(route, handle) { // We’ve added the handle parameter to our start() function, and pass the handle object on to the route() callback, as its first parameter.
  function onRequest(request, response) {
	var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");
    route(handle, pathname, response, request); // Instead of expecting a return value from the route() function, we pass it a third parameter, our 'response' object
  }

  http.createServer(onRequest).listen(9999);
  console.log("Server has started.");
}

exports.start = start;