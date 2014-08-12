//opposed to before, this will be a real module now
var http = require("http");
var url = require("url");

//put server code into a function named 'start' and then export this function
function start(route, handle) { // We’ve added the handle parameter to our start() function, and pass the handle object on to the route() callback, as its first parameter.
  function onRequest(request, response) {
  	var postData = "";
	var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");

    request.setEncoding("utf8");

	request.addListener("data", function(postDataChunk) { 
		// called when a new chunk of data was received
		postData += postDataChunk;
		console.log("Received POST data chunk '"+
		postDataChunk + "'.");
	});

    request.addListener("end", function() {
    	// called when all chunks of data have been received
    	route(handle, pathname, response, postData); // Instead of expecting a return value from the route() function, we pass it a third parameter, our 'response' object
    });

  }

  http.createServer(onRequest).listen(9999);
  console.log("Server has started.");
}

exports.start = start;