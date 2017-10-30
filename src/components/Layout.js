/*jshint esversion: 6 */
import React, { Component } from 'react';
import io from 'socket.io-client';
import { USER_CONNECTED, LOGOUT } from '../Events';
import LoginForm from './LoginForm';

const socketURL = 'localhost:4000';

class Layout extends Component{
  constructor(props){
    super(props);
    this.state = {
      socket:null,
      user:null
    };
  }
  
  componentWillMount(){
    this.initSocket();
  }
  
  initSocket = () => {
    const socket = io(socketURL)
    socket.on('connect', ()=>{
      console.log('You are connected');
    })
    this.setState({socket})
  }
  
  setUser = (user)=>{
    const { socket } = this.state
    socket.emit(USER_CONNECTED, user);
    this.setState({ user })
  }
  
  logout =()=>{
    const { socket } = this.state
    socket.emit(LOGOUT);
    this.setState({ user:null });
    
  }
  
  render(){
    const { socket } = this.state;
    const { title } = this.props;
    return(
      <div className='container'>
        <LoginForm socket={socket} setUser={this.setUser.bind(this)}/>
      </div>
    )
  }
}

export default Layout;