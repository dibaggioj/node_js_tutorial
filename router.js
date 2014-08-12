function route( handle, pathname, response, postData ) {
	console.log("About to route a request for " + pathname);
	if ( typeof handle[ pathname ] === 'function' ) {
		handle[ pathname ](response, postData); // instead of expecting a return value from our request handlers, we pass the 'respond' object on
	}
	else { // If no request handler can be used, we now take care of responding with a proper “404” header and body ourselves
		console.log("No request handler found for " + pathname);
		response.writeHead(404, {"Content-Type": "text/plain"});
		response.write("404 Not Found");
		response.end();
	}
}

exports.route = route;