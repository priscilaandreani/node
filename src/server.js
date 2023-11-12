import http from 'http';

// req => infos about the request
// res => response to the request
const server = http.createServer((req, res) => {
  res.end('Hello World');
});

server.listen(3333);
