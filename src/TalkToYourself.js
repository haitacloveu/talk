import React from 'react';
import { ChatMessageContainer } from './components/ChatMessageContainer';
import {ChatForm} from './components/ChatForm';

export class TalkToYourself extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            messages: [],
            containerHeight: 0
        }

        this.handleChatSubmition = this.handleChatSubmition.bind(this);
        this.updateSize = this.updateSize.bind(this);
    }

    handleChatSubmition(message){
        this.setState(prevState => ({
            messages: prevState.messages.concat(message)
        }));
    }

    updateSize(){
        var chatFormHeight = this.chatForm.divRef.clientHeight;
        var totalHeight = window.innerHeight;
        this.setState({containerHeight: totalHeight - chatFormHeight});
    }

    // hook
    componentDidMount(){
        this.updateSize();
        window.addEventListener('resize', this.updateSize);
    }

    render() {
        return (
            <div className="container">
                <ChatMessageContainer height={this.state.containerHeight} messages={this.state.messages} />
                <ChatForm handleSubmition={this.handleChatSubmition} ref={com => {this.chatForm = com;}} />
            </div>
        );
    }
}