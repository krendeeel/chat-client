import React from 'react';
import { SidebarItem } from '.';
import { useChatContext } from '../store';


const Sidebar: React.FC = () => {
    const { state: { onlineUsers, mobileSidebar } } = useChatContext()
    return (
        <div className={mobileSidebar ? 'sidebar active' : 'sidebar'}>
            <div className='sidebar__heading'>
                <p>React Chat</p>
            </div>
            <p className='sidebar__users'>Online:</p>
            <div className='sidebar__items'>
                {onlineUsers?.map((item, index) => {
                    return (
                        <SidebarItem
                            name={item}
                            key={item + index}
                            animationDelay={index + 1}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Sidebar;
