import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

import {store} from "./Store/store";
import App from "./App";
import './index.css';
import {io} from "socket.io-client";

export const socket = io('ws://localhost:5000', { transports: ['websocket'] })

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,
  document.getElementById('root')
);