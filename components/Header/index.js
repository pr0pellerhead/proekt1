import React from 'react';
import {View, Text} from 'react-native';
import Style from './style';
import {Link} from 'react-router-native';

class Header extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <View style={Style.header}>
                <Link to="/">
                    <Text style={Style.title}>App One</Text>
                </Link>
            </View>
        )
    }
}

export default Header;