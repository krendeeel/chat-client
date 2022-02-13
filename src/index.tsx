import React from 'react';
import ReactDOM from 'react-dom';

import './styles/index.css';
import App from './App';
import { ChatProvider } from './store';

ReactDOM.render(
  <React.StrictMode>
    <ChatProvider>
      <App />
    </ChatProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
