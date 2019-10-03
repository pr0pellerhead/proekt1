import React from 'react';
import {View, Text} from 'react-native';
import Style from './style';

class Header extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <View style={Style.header}>
                <Text style={Style.title}>App One</Text>
            </View>
        )
    }
}

export default Header;