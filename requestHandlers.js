var exec = require("child_process").exec; // non-blocking operation: exec()

// Our handler functions need to accept the response parameter, and have to make use of them in order to respond to the request directly

function start(response) {
	console.log("Request handler 'start' was called.");

	// This will make HTTP requests to http://localhost:8888/start take at least 10 seconds, but requests to http://localhost:8888/upload will be answered immediately, even if /start is still computing.
	exec("find /",
		{ timeout: 10000, maxBuffer: 2000*1024 },
		function (error, stdout, stderr) { // a more expensive operation than "ls -lah" (which gets a list of all files in the current directory) is "find /"
			response.writeHead(200, {"Content-Type": "text/plain"});
			response.write(stdout);
			response.end();
		});
}

function upload(response) {
	console.log("Request handler 'upload' was called.");
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Hello Upload");
	response.end();
}

exports.start = start;
exports.upload = upload;






// /* blocking API demo */
// function start() {
// 	console.log("Request handler 'start' was called.");
// 	function sleep(milliSeconds) {
// 		var startTime = new Date().getTime();
// 		while ( new Date().getTime() < startTime + milliSeconds );
// 	}
// 	sleep(10000);
// 	return "Hello Start";
// }