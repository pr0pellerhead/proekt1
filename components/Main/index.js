import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import Style from './style';
import Header from '../Header';
import ConvertorList from '../ConvertorList';
import {NativeRouter, Switch, Route} from 'react-router-native';
import WeightConvert from '../WeightConvert';

class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            convertors: [
                {name: 'Weight', link: '/weight'},
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
            <NativeRouter>
                <View style={Style.mainContainer}>
                    <Header/>
                    <ScrollView style={Style.moduleContainer}>
                        <Switch>
                            <Route 
                                exact 
                                path="/" 
                                render={() => <ConvertorList convertors={this.state.convertors}/>}
                            />
                            <Route
                                exact
                                path="/weight"    
                                component={WeightConvert}
                            />
                        </Switch>
                    </ScrollView>
                </View>
            </NativeRouter>
        )
    }
}

export default Main;