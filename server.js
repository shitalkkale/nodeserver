/*const http = require('http');
const app = require('./app');

const port = process.env.PORT || 3000;
app.set('port',port);
const server = http.createServer(app);

const server= http.createServer((req, res) =>{
    //res.end('My server is running');
});

server.listen(port);*/

//paste it
const app = require("./app");
const http = require("http");
var debug = require('debug')('notes:server');;


//this function is to make sure that when we receive port from environment variable it is a valid number
const normalizePort = val => {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
};


// this error function is to check what type of error it is & log it, exit from node server 
const onError = error => {
  if (error.syscall !== "listen") {
    throw error;
  }
  const bind = typeof port === "string" ? "pipe " + port : "port " + port;
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
};

//This function is just showing what portour server is listening to
 const onListening = () => {
  const addr = server.address();
  const bind = typeof port === "string" ? "pipe " + port : "port " + port;
  console.log("Listening to Shital :" + bind);
  console.log('WELCOME SHITAL');
};

const port = normalizePort(process.env.PORT || "3000");
app.set("port", port);

const server = http.createServer(app);
//We are registering two listeners
server.on("error", onError); //this is error listener
server.on("listening", onListening); //this is when we start listening
server.listen(port); //starting server