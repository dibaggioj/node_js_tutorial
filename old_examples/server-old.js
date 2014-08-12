var http = require("http"); //requires the http module that ships with Node.js and makes it accessible throught the variable http

//call the 'createServer' function (offered by the http module), which returns an object that has the method 'listen' and takes a numeric value which indicates the port number our HTTP server is going to listen on
http.createServer(function(request, response) {   response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}).listen(9999);

//the above can be refactored to:
/*
var http = require("http");

function onRequest(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}
http.createServer(onRequest).listen(8888);
*/


//example of GOOD coding with NodeJS: asynchronous
/*
database.query("SELECT * FROM hugetable", function(rows) {
  var result = rows;
});
console.log("Hello World");
//this code is asynchronous; here, instead of expecting database.query() to directly return a result ot us, we pass it a second parameter, an anonymous function
//Node.js can handle the database request asynchronously. Provided that database.query() is part of an asynchronous library.
//Instead of waiting for the query to be finished, it makes a mental note that says "When at some point in the future the database server is done and sends the result of the query, then I have to execute the anonymous function that was passed to database.query().
*/


//example of passing functions around:
/*
function say(word) {
	console.log(word);
}
function execute(someFunction, value) {
	someFunction(value);
}
execute(say, "Hello there");
*/
