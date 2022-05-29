import React, { Component } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { ContextProvider } from './authContext';
import { theme } from './core/theme';
import Routes from './navigation/routes';

class Main extends Component {

    render() {
        return (
            <ContextProvider value={500}>
                <PaperProvider theme={theme}>
                    <Routes />
                </PaperProvider>
            </ContextProvider>
        );
    }
}

export default Main;