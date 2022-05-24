import React, { Component } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { theme } from './core/theme';
import Routes from './navigation/routes';

class Main extends Component {

    render() {
        return (
            <PaperProvider theme={theme}>
                <Routes />
            </PaperProvider>
        );
    }
}

export default Main;