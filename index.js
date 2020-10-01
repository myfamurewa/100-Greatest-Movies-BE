require("dotenv").config();

const server = require("./server");

const port = process.env.PORT || 5000;

server.listen(port, function () {
  console.log(`\n Server is running on port:${port} \n`);
});