import React, { useEffect, useRef, useState } from 'react';

import { Message } from '.';
import { socket } from '../api';
import { useChatContext } from '../store';
import {
    addNewMessage,
    setMobileSidebar,
    setOnlineUsers,
    setUser
} from '../store/actions';
import { SocketValues } from '../types/index.type';
import { getTime } from '../utils';

const Room: React.FC = () => {

    const { state: { user, messages, mobileSidebar }, dispatch } = useChatContext();
    const [message, setMessage] = useState('');
    const messagesEndRef = useRef(null);

    useEffect(() => {
        socket.on(SocketValues.SET_USERS,
            data => dispatch(setOnlineUsers(data)));
        socket.on(SocketValues.NEW_MESSAGE,
            data => dispatch(addNewMessage(data)));
        return () => {
            socket.close();
        }
    }, []);

    useEffect(() => {
        //@ts-ignore
        messagesEndRef.current.scrollTo(0, 99999999)
    }, [messages]);

    const onSendMessage = () => {

        if (message) {
            socket.emit(SocketValues.NEW_MESSAGE, {
                user,
                text: message,
                time: getTime()
            });
            dispatch(addNewMessage({
                username: user?.name || '',
                text: message,
                time: getTime()
            }))
            setMessage('');
        }
    };

    const setMessageHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
        setMessage(e.target.value);

    const enterPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) =>
        e.key === 'Enter' && onSendMessage();

    const sidebarHandler = () =>
        dispatch(setMobileSidebar(!mobileSidebar));

    const logout = () => {
        socket.close();
        dispatch(setUser(null));
        window.location.reload(); //delete socket connection ?
    }

    return (
        <div className="main__chatcontent">
            <div className="content__header">
                <div
                    className={mobileSidebar ? 'burger-btn active' : 'burger-btn'}
                    onClick={sidebarHandler}
                >
                    <span></span>
                </div>
                <div className="blocks">
                    <div className="current-chatting-room">
                        <p>Комната #{user?.roomId}</p>
                    </div>
                </div>
                <div className="blocks">
                    <div className="logout">
                        <button
                            className="btn-nobg"
                            onClick={logout}
                        >
                            <i className="fa fa-sign-out"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div className="content__body" ref={messagesEndRef}>
                <div className="chat__items" >
                    {messages?.map((itm, index) =>
                    (
                        <Message
                            key={itm.username + index}
                            isMe={itm.username === user?.name}
                            {...itm}
                        />
                    )
                    )}
                </div>
            </div>
            <div className="content__footer">
                <div className="sendNewMessage">
                    <input
                        type="text"
                        placeholder="Напишите сообщение..."
                        onChange={setMessageHandler}
                        value={message}
                        onKeyPress={enterPressHandler}
                    />
                    <button
                        className="btnSendMsg"
                        id="sendMsgBtn"
                        onClick={onSendMessage}
                    >
                        <i className="fa fa-paper-plane"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Room;
