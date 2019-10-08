import {StyleSheet} from 'react-native';

const Style = StyleSheet.create({
    mainContainer: {
        backgroundColor: 'white',
        padding: 20,
        margin: 20,
        borderRadius: 5,
    },
    mainTitle: {
        fontSize: 25,
    },
    textInput: {
        borderColor: 'grey',
        borderWidth: 1,
        fontSize: 18,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 5,
    },
    middle: {
        fontSize: 25,
        textAlign: 'center',
    },
    picker: {
        borderColor: 'black',
        borderWidth: 1, 
        backgroundColor: 'silver',
    },
    pickerItem: {
        height: 40,
    }
});

export default Style;