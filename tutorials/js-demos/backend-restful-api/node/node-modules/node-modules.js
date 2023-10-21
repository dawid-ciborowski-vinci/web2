// modules integrated to the runtime environment
let http = require("http");
let { URL } = require("url");
let fs = require("fs");
let path = require("path");
// import Named object & destructuring assignement
let { ServerConfiguration } = require("./utils/server-configuration.js");
// import default export
//let MyServerConfiguration = require("./Server.js") ;

// import mime package
const mime = require("mime");

let webFolderPath = "/public";

/* Create an HTTP server.
The callback is called for every client request : function(request, response)
*/
var serverHTTP = http.createServer(function (request, response) {
  let myURL = new URL(request.url, `http://${request.headers.host}`);
  console.log("Ressource requested : " + myURL.pathname.substr(1));

  // if no ressource is requested, consider that the index.html file is requested
  if (myURL.pathname === "/") {
    myURL.pathname = "/index.html";
  }

  let localPath = __dirname + webFolderPath + myURL.pathname;
  let fileExtension = path.extname(localPath);
  // asynchronous read operation
  fs.readFile(localPath, function (err, data) {
    if (err) {
      // the ressource was not found on the servor. Provide the error status code.
      // the MIME type is an html file
      console.log("err:", err.toString());
      response.writeHead(404, {
        "Content-Type": "text/html",
        "Content-Language": "fr",
      });
      //response.write(err.toString());
      response.end(err.toString());
    } else {
      /* the ressource was found. Provide status code 200 confirming that everything is OK
        200 signifie que tout est OK
        the MIME type is text/html / application/javascript / text/css / image/jpeg ....
      */

      // get the MIME type thanks to the mime package
      let mimeType = mime.getType(localPath);

      console.log(" - fileExtension:", fileExtension, "MIME type :", mimeType);

      response.writeHead(200, {
        "Content-Type": mimeType,
        "Content-Language": "fr",
      });
      //Write the content of the file in the response to be sent back to the client
      // end the response
      response.end(data.toString());
    }
  });
});
// listen on the 7777 port
// use of external Named object
const serverConf = new ServerConfiguration();
// use of external default module
//let myServerConf = new MyServerConfiguration.ServerConfiguration();
serverHTTP.listen(serverConf.port);
console.log("Minimal web server with modules and packages");
console.log(serverConf.getDescription());
