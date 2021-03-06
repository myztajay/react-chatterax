/*jshint esversion: 6 */
const io = require('./server.js').io;
const { VERIFY_USER, USER_CONNECTED, LOGOUT } = require('../Events')

const { createUser, createMessage, createChat} = require('../Factories')
let connectedUsers = {}

module.exports = (socket)=>{
  console.log('this is the socket: '+socket.id);
  
  socket.on(VERIFY_USER, (nickname, callback)=>{
    console.log("made it");
    if(isUser(connectedUsers, nickname)){
      callback({ isUser: true, user:null})
    }else{
      callback({ isUser:false, user:createUser({name:nickname})})
    }
  })
  
  socket.on(USER_CONNECTED, (user)=>{
    connectedUsers = addUser(connectedUsers, user)
    socket.user = user
    io.emit(USER_CONNECTED, connectedUsers)
    console.log(connectedUsers);
  })
  
  addUser = (userList, user)=>{
    let newList = Object.assign({}, userList)
    newList[user.name] = user
    return newList
  }
  
  removeUser = (userlist, username) =>{
    let newList = Object.assign({}, userList)
    delete newList[username]
    return newList
  }
  
  isUser = (userList, username) =>{
    return username in userList
  }
};

