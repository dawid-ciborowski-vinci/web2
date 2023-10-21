// use installed package
const { v4: uuidv4 } = require("uuid");

class ServerConfiguration {
  constructor(host = "localhost", port = "7777") {
    this.host = host;
    this.port = port;
    // generate an ID with shortid package;
    this._id = uuidv4();
  }
  get id() {
    return this._id;
  }
  getDescription() {
    return `Server id: ${this._id} is running at : http://${this.host}:${this.port}`;
  }
}
// default export
//module.exports = ServerConfiguration;
// export as named object
exports.ServerConfiguration = ServerConfiguration;
