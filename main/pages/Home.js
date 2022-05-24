import React, { Component } from 'react';
import { Background, Button, Header, Logo, Paragraph } from '../components';
import { gAuthInit } from '../redux/actions/authAction';

class Home extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <Background>
                <Logo />
                <Header>Login Template</Header>
                <Paragraph>The easiest way to start with your amazing application.</Paragraph>
                <Button mode="contained"
                    onPress={() => navigation.navigate('Login')}>Login</Button>

                <Button mode="outlined"
                    onPress={() => navigation.navigate('Register')} > Sign Up</Button>

               
            </Background>
        );
    }
};


export default Home;