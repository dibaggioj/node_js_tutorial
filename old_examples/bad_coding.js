/* example of BAD coding with NodeJS: synchronous */
var result = database.query("SELECT * FROM hugetable");
console.log("Hello World");
//this is synchronous code; it first does the database query, and only when that is done, then write to the console
