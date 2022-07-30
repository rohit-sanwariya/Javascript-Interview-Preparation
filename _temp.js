import { createServer } from "node:http";
import {  read, readFile } from "node:fs";
import dns from 'node:dns'
dns.lookup('www.google.com', (err, addresses, family) => {  
  console.log('addresses:', addresses);  
  console.log('family:',family);  
}); 

const hostname = "127.0.0.1";
const port = 3000;

const server = createServer((req, res) => {
  readFile("./index.html", (err, data) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.write(data);
    res.end();
  });

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
