import React from 'react';
import { Room, Sidebar } from '../components';

const ChatScreen: React.FC = () => {
    return (
        <div className="main__chatbody">
            <Sidebar />
            <Room />
        </div>
    );
}

export default ChatScreen;