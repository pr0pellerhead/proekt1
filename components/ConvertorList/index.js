import React from 'react';
import {View, Text} from 'react-native';
import Style from './style';

class ConvertorList extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
            <View>
                {this.props.convertors.map((v, i) => <ConvertorListItem name={v.name} key={i} />)}
            </View>
        );
    }
}

class ConvertorListItem extends React.Component {
    render() {
        return (
            <View style={Style.itemContainer}>
                <Text style={Style.itemNameText}>{this.props.name}</Text>
            </View>
        )
    }
}

export default ConvertorList;