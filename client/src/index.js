import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { CometChat } from '@cometchat-pro/chat';
import { Provider } from 'react-redux';
import { store } from './app/store';

import App from './App';
import './index.css';

import * as CONSTANTS from './constants/COMET_CHAT';

const root = ReactDOM.createRoot(document.getElementById('root'));

const appSettings = new CometChat.AppSettingsBuilder()
  .subscribePresenceForAllUsers()
  .setRegion(CONSTANTS.APP_REGION)
  .build();

CometChat.init(CONSTANTS.APP_ID, appSettings).then(
  () => {
    console.log('Initialization completed successfully');
    // You can now call login function.
    root.render(
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    );
  },
  (error) => {
    console.log('Initialization failed with error:', error);
    // Check the reason for error and take appropriate action.
  }
);
