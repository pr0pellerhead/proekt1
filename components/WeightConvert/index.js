import React from 'react';
import {Text, View, TextInput, Picker, Button} from 'react-native';
import Style from './style';

class WeightConvert extends React.Component {
    constructor() {
        super();
        this.state = {
            in: '0',
            out: '0',
            from: 'kg',
            to: 'lb'
        };
    }

    changeIn = (v) => {
        this.setState({in: v});
    }

    changeFrom = (v) => {
        this.setState({from: v});
    }

    changeTo = (v) => {
        this.setState({to: v});
    }

    calculate = () => {
        switch(`${this.state.from}${this.state.to}`){
            case 'kglb':
                this.setState({
                    out: (Number(this.state.in) / 0.45359237) + ''
                });
                break;
            case 'kgoz':
                this.setState({
                    out: (Number(this.state.in) / 0.02834952) + ''
                });
                break;
            case 'lbkg':
                this.setState({
                    out: (Number(this.state.in) * 0.45359237) + ''
                });
                break;
            case 'lboz':
                this.setState({
                    out: (Number(this.state.in) * 16) + ''
                });
                break;
            case 'ozkg':
                this.setState({
                    out: (Number(this.state.in) * 0.02834952) + ''
                });
                break;
            case 'ozlb':
                this.setState({
                    out: (Number(this.state.in) / 16) + ''
                });
                break;
            case 'kgkg':
            case 'lblb':
            case 'ozoz':
                this.setState({out: this.state.in});
                break;
        }
    }

    render() {
        return (
            <View style={Style.mainContainer}>
                <Text style={Style.mainTitle}>Weight Convert</Text>
                <View>
                    <TextInput 
                        style={Style.textInput} 
                        keyboardType="numeric"
                        value={this.state.in}
                        onChangeText={this.changeIn}
                    />
                    <Picker 
                        style={Style.picker} 
                        styleItem={Style.pickerItem}
                        onValueChange={this.changeFrom}
                        selectedValue={this.state.from}
                    >
                        <Picker.Item label="Kg" value="kg"/>
                        <Picker.Item label="Pounds" value="lb"/>
                        <Picker.Item label="Ounce" value="oz"/>
                    </Picker>
                    <Text style={Style.middle}>In</Text>
                    <Picker 
                        style={Style.picker} 
                        onValueChange={this.changeTo}
                        selectedValue={this.state.to}
                    >
                        <Picker.Item label="Kg" value="kg"/>
                        <Picker.Item label="Pounds" value="lb"/>
                        <Picker.Item label="Ounce" value="oz"/>
                    </Picker>
                    <TextInput 
                        style={Style.textInput} 
                        keyboardType="numeric"
                        value={this.state.out}
                    />
                    <Button title="Calculate" onPress={this.calculate}/>
                </View>
            </View>
        );
    }
}

export default WeightConvert;