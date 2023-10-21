// modules integrated to the runtime environment
let http = require("http");
let { URL } = require("url");
let fs = require("fs");
let path = require("path");

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

      let mimeType;
      switch (fileExtension) {
        case ".js":
          mimeType = "application/javascript";
          break;
        case ".css":
          mimeType = "text/css";
          break;
        case ".jpeg":
        case "jpg":
          mimeType = "image/jpeg";
          break;

        default:
          mimeType = "text/html";
          break;
      }
      console.log(" - fileExtension:", fileExtension, "MIME type :", mimeType);

      response.writeHead(200, {
        "Content-Type": mimeType,
        "Content-Language": "fr",
      });
      //Write the content of the file in the response to be sent back to the client
      // end the response
      response.end(data.toString());
      /*equivalent : 
      response.write(data.toString()); 
      response.end();*/
    }
  });
});
// listen on the 7777 port
serverHTTP.listen(7777);
console.log("Minimal web server");
