import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import metrics from '../../config/metrics';
import Colors from '../../config/colors';
import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';



const LangaugeSelection = (props) => {
    const { selectedItem } = props
    return(
        <View style={styles.row}>
            <Text style={styles.text}>Language</Text>
            <TouchableOpacity style={styles.dropDown} onPress={()=>props.onClick()}>
                <Text style={styles.selectedLanguageText}>{selectedItem}</Text>
                <Icon name="md-arrow-dropdown" size={metrics.dropDown} color={Colors.COLOR_GREY}/>
            </TouchableOpacity>
           
        </View>
    );
}

onPress = data => console.log(data);


const DialogView = (props) => {
    return(
        <View style={styles.dialogView}>
           
        </View>
    );
}
export default LangaugeSelection;