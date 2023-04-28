const http = require('http');
const debug = require("debug")("node-angular")
const app = require('./backend/app');

const port = process.env.PORT || 3000



const onListening = () =>{
    const addr = server.address();
    const bind = typeof addr === "string"? "pipe " + addr: "port "+ port;
    console.log("listening on "+ bind)
}
app.set('port', port)
const server = http.createServer(app)

server.on("listening", onListening)
server.listen(port)