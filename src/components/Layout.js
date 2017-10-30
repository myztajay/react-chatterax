/*jshint esversion: 6 */
import React, { Component } from 'react';
import io from 'socket.io-client';

const socketURL = 'localhost:4000';
class Layout extends Component{
  constructor(props){
    super(props);
    this.state = {
      socket:null
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
  
  render(){
    const { title } = this.props;
    return(
      <div className='container'>
        {title}
      </div>
    )
  }
}

export default Layout;