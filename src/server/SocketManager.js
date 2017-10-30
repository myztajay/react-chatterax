/*jshint esversion: 6 */
const io = require('./server.js').io;

module.exports = (socket)=>{
  console.log('this is the socket: '+socket.id);
};

