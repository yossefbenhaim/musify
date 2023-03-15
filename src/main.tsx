import { StyledEngineProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import store from './redux/store';
import './index.css';

ReactDOM.render(
    <React.StrictMode>
        <StyledEngineProvider injectFirst>
            <Provider store={store}>
                <App />
            </Provider>
        </StyledEngineProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
