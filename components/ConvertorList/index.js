import React from 'react';
import {View, Text} from 'react-native';
import Style from './style';
import {Link} from 'react-router-native';

class ConvertorList extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
            <View>
                {this.props.convertors.map((v, i) => <ConvertorListItem name={v.name} link={v.link} key={i} />)}
            </View>
        );
    }
}

class ConvertorListItem extends React.Component {
    render() {
        return (
            <Link to={this.props.link}>
                <View style={Style.itemContainer}>
                    <Text style={Style.itemNameText}>{this.props.name}</Text>
                </View>
            </Link>
        )
    }
}

export default ConvertorList;