
/*
 *The server works the same way regardless of the latter part of the URL. Also the address http://localhost:3001/foo/bar will display the same content.
 * */
const http = require('http');

let notes  = [
	{
    id: 1,
    content: "HTML is easy",
    important: true
  },
  {
    id: 2,
    content: "Browser can execute only JavaScript",
    important: false
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true
  }
]
// we create simple http server and making http requests. 
const app = http.createServer((request, response) => {
	// write the header telling the server to build with these requirement.
	// must be plain text and content will be 'Hello world'
	response.writeHead(200, {'Content-Type': 'text/plain'})
	response.end(JSON.stringify(notes));
});

// here we define PORT number that local host can use
const PORT = 3001; 
// we listen using that port number 
app.listen(PORT);
// we let the us know that the srever is using PORT number to run
console.log(`Server running on port ${PORT}`);

