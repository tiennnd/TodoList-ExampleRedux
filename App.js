/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {Provider} from 'react-redux'
import store from './src/store/store'
import Main from "./src/components/Main";

export default class App extends Component<{}> {

    constructor(props) {
        console.log('App contructor...');
        super(props);
    }


    componentWillMount() {
        console.log('App component will mount........');
    }

    componentDidMount() {
        console.log('App component did mount........');
    }


    render() {
        console.log('App render ............');

        return (
            <Provider store={store}>
                <Main/>
            </Provider>
        );

    }
}