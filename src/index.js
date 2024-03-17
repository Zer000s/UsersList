import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { App } from './App';
import user from "./store/user";

const userStore = new user();

export const Context = React.createContext({userStore})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value={{
        userStore: userStore
    }}>
        <App/>
    </Context.Provider>
);