import React, { Component } from 'react';
import './index.css';

class NewMessage extends Component {
  render() {
    const { handleNewMessage } = this.props;
    return (
      <form className="form" onSubmit={
        e => {
          e.preventDefault();
          const value = document.getElementById('message').value;
          handleNewMessage(value);
          document.getElementById('message').value = '';
        }
      }>
        <input className="txt" type="text" id="message" />
        <button className="btn" type="submit">
          <img src="/images/paper-plane.svg" alt="Send" />
        </button>
      </form>
    );
  }
}

export default NewMessage;
