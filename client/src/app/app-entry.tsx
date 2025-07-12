import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './router';
import { TaskProvider } from './context/task-context';
import './app-entry.css';

export const start = () => {
    const root = ReactDOM.createRoot(
        document.getElementById('root') as HTMLElement
    );
    root.render(
        <React.StrictMode>
            <TaskProvider>
                <Router/>
            </TaskProvider>
        </React.StrictMode>
    );
}