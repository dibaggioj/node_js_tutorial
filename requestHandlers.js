var querystring = require("querystring"),
	fs = require("fs");

// Our handler functions need to accept the response parameter, and have to make use of them in order to respond to the request directly
function start(response, postData) {
	console.log("Request handler 'start' was called.");

	var body = '<html>'+
		'<head>'+
		'<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />'+
		'</head>'+
		'<body>'+
		// '<form action="/upload" method="post">'+
		'<form action="/upload" enctype="multipart/form-data" method="post">'+
		// '<textarea name="text" rows="20" cols="60"></textarea>'+
		'<input type="file" value="upload" />'+
		'<input type="submit" value="Upload file" />'+
		'</form>'+
		'</body>'+
		'</html>';

	 	response.writeHead(200, {"Content-Type": "text/html"});
	 	response.write(body);
	 	response.end();
}

function upload(response, postData) {
	console.log("Request handler 'upload' was called.");
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("You've sent: "+ 
		querystring.parse(postData).text);
	response.end();
}

function show(response) {
	console.log("Request handler 'show' was called.");
	response.writeHead(200, {"Content-Type": "image/png"});
	fs.createReadStream("tmp/test.png").pipe(response);
}

exports.start = start;
exports.upload = upload;
exports.show = show;