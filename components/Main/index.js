import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import Style from './style';
import Header from '../Header';
import ConvertorList from '../ConvertorList';

class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            convertors: [
                {name: 'Weight', link: '/'},
                {name: 'Distance', link: '/'},
                {name: 'Temperature', link: '/'},
                {name: 'Currency', link: '/'},
                {name: 'Pressure', link: '/'},
                {name: 'Liquid Measure', link: '/'},
                {name: 'Time', link: '/'},
                {name: 'Weight', link: '/'},
                {name: 'Distance', link: '/'},
                {name: 'Temperature', link: '/'},
                {name: 'Currency', link: '/'},
                {name: 'Pressure', link: '/'},
                {name: 'Liquid Measure', link: '/'},
                {name: 'Time', link: '/'},
            ]
        };
    }

    render() {
        return (
            <View style={Style.mainContainer}>
                <Header/>
                <ScrollView style={Style.moduleContainer}>
                    <ConvertorList convertors={this.state.convertors}/>
                </ScrollView>
            </View>
        )
    }
}

export default Main;