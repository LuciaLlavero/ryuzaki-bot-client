import React, { Component } from 'react';
import MessageItem from '../MessageItem';

class MessageList extends Component {
  render() {
    const { messages } = this.props;
    return (
      <article>
        {messages.map((message, index) => <MessageItem key={index} message={message} />)}
      </article>
    );
  }
}

export default MessageList;
