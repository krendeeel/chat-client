import React from 'react';

import { ChatScreen, JoinScreen } from './pages';
import { useChatContext } from './store';

const App: React.FC = () => {
  const { state: { user } } = useChatContext();
  return (
    <div className='wrapper'>
      <div className='content'>
        {
          !user
            ? <JoinScreen />
            : <ChatScreen />
        }
      </div>
    </div>
  );
}

export default App;
