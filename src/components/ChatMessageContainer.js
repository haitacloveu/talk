import React from 'react';
import {ChatMessage} from './ChatMessage';

export class ChatMessageContainer extends React.Component {

    render() {
        var messages = this.props.messages;
        var list = messages.map(message => 
            <ChatMessage key={message.time.getTime().toString()} message={message} />
        );
        var myImg = require('../image/me.jpg');

        return (
            <div className="message-container" style={{ height: this.props.height }}>
                <div className="intro">
                    <span className="avatar"><a href="https://www.facebook.com/cbcaribe"><img src={myImg} alt="My_Avatar"/></a></span>
                    <h1>Talk to Yourself <div>by <a href="https://www.facebook.com/cbcaribe">Hai V. Nguyen</a></div></h1>
                    <p>Hi! Talk to yourself to understand yourself.</p>
                </div>
                <div className="messages">
                    {list}
                </div>
            </div>
        );
    }
}