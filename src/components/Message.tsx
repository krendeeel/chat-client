import React from 'react';
import Avatar from 'react-avatar';
import { addLinks } from 'react-link-text';

interface MessageProps {
    username: string,
    text: string,
    time: string
    isMe: boolean
}

const Message: React.FC<MessageProps> = ({ username, text, time, isMe }) => {
    return (
        <div
            style={{ animationDelay: `0s` }}
            className={`message ${isMe ? "me" : "other"}`}
        >
            <div className="message__content">
                <div className="chat__msg">{addLinks(text)}</div>
                <div className="chat__meta">
                    <span>{username}</span>
                    <span>{time}</span>
                </div>
            </div>
            <div className='message__avatar'>
                <Avatar
                    round
                    name={username}
                    size='35'
                    style={{ marginRight: '20px', alignSelf: 'center' }}
                />
            </div>
        </div>
    );
}

export default Message;
