import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import { AuthContextProvider } from "./context/AuthContext";

ReactDom.render(
    <React.StrictMode>
        <AuthContextProvider>
            <App />
        </AuthContextProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
