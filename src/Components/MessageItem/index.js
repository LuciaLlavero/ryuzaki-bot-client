import React, { Component } from 'react';
import './index.css';

class MessageItem extends Component {
  renderText = text => {
    return (typeof text === 'string') ?
      text :
      <React.Fragment>
        {text.map((t, index) => <p key={index}>{t}</p>)}
      </React.Fragment>
  }
  render() {
    const { author, text } = this.props.message;
    return (
      <div className="message">
        <b>{author}</b>
        {this.renderText(text)}
      </div>
    );
  }
}

export default MessageItem;
