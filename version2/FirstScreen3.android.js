import React, { Component } from 'react';

import Authentication from './authentication';
import MainPage from "./MainPage"

export default class App extends Component {

    state = {
        isLoggedIn: false
    }

    render() {

        if (this.state.isLoggedIn)
            return <MainPage
                onLogoutPress={() => this.setState({isLoggedIn: false})}
            />;
        else
            return <Authentication
                onLoginPress={() => this.setState({isLoggedIn: true})}
            />;
    }

}