/*jshint esversion: 6 */
import React, { Component } from 'react';
import Layout from './components/Layout';
import './styles/index.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Layout title='Chatterax' />
      </div>
    );
  }
}

export default App;
