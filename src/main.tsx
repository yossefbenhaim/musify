import { StyledEngineProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { Provider } from 'react-redux';
import store from './redux/store';
import './index.css';
import client from 'utils/client';
import { ThemeProvider } from '@mui/system';
import { ApolloProvider } from '@apollo/client';
import Theme from 'themes/theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        {/* <ThemeProvider theme={Theme}> */}
        <StyledEngineProvider injectFirst>
            <ApolloProvider client={client}>
                <Provider store={store}>
                    <App />
                </Provider>
            </ApolloProvider>
        </StyledEngineProvider>
        {/* </ThemeProvider> */}
    </React.StrictMode>
);

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './components/App';
// import './index.css';

// ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>
// );
