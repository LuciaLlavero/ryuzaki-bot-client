import React, { Component } from 'react';
import axios from 'axios';
import MessageList from '../MessageList';
import NewMessage from '../NewMessage';
import './index.css';

const sweets = ['🍬', '🍭', '🍫', '🍰', '🍪', '🍩', '🍨', '🍮', '☕']

class ChatComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        {
          author: 'RyuzakiBot',
          text: [
            'Hey! I will answer your queries about chatbots.' + sweets[Math.floor(Math.random() * sweets.length)],
            'Feel free to clone me on GitHub to train me on something new.',
            <span>I got corpus from: <a target="_blank" href="https://en.wikipedia.org/wiki/Chatbot">https://en.wikipedia.org/wiki/Chatbot</a></span>
          ]
        }
      ]
    };
  }

  handleNewMessage = (message) => {
    if (message.length === 0) { return; }
    const messages = [...this.state.messages, { author: 'You', text: message }];
    this.setState({ messages });
    axios
      .get('https://ryuzaki-bot-api.herokuapp.com/reply.json?q=' + message)
      .then(response => {
        this.setState({
          messages: [...this.state.messages, { author: 'RyuzakiBot', text: response.data.reply }]
        });
        const footerTop = document.querySelector('footer').offsetTop;
        window.scrollTo({
          top: footerTop,
          left: 0,
          behavior: 'smooth'
        });
      }); // => call Bot API
  }

  render() {
    const { messages } = this.state;
    return (
      <section className="chat-wrapper">
        <nav className="nav"><a target="_blank" href="https://github.com/LuciaLlavero/ryuzaki_bot">View on Github</a></nav>
        <h1><img src="/images/chatbot.svg" alt="Logo" /> Hi there, I'm RyuzakiBot!</h1>
        <p>Looking for a free open source chatbot? RyuzakiBot is a simple retrieval-based chatbot made from scratch in Python using NLTK. Try it out bellow.</p>
        <article className="chat">
          <MessageList messages={messages} />
          <NewMessage handleNewMessage={this.handleNewMessage} />
        </article>
        <footer className="nav">
          <a href="mailto:luciallaverocompany@gmail.com">email</a>
          <a target="_blank" href="https://github.com/LuciaLlavero">github.com/LuciaLlavero</a>
          <a target="_blank" href="https://thenounproject.com/nociconist/">logo by Nociconist from the Noun Project</a>
        </footer>
      </section>
    );
  }
}

export default ChatComponent;
