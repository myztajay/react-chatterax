/*jshint esversion: 6 */
var app = require('http').createServer();
var io = module.exports.io = require('socket.io')(app);
const SocketManager = require('./SocketManager');

const PORT = process.env.PORT || 4000;
io.on('connection', SocketManager);

app.listen(PORT, ()=>{
  console.log('connected to ' + PORT);
});

