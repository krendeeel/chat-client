import React from 'react';
import Avatar from 'react-avatar'

interface SidebarItemProps {
    name: string,
    animationDelay: any,
}

const SidebarItem: React.FC<SidebarItemProps> = ({ name, animationDelay }) => {
    return (
        <div
            style={{ animationDelay: `0.${animationDelay}s` }}
            className='sidebar__item'
        >
            <Avatar
                size='35'
                round
                textSizeRatio={50}
                name={name}
                style={{ marginRight: '20px', alignSelf: 'center', fontSize: '50px' }}
            />
            <div className="userMeta">
                <p>{name}</p>
            </div>
        </div>
    );
}

export default SidebarItem;
