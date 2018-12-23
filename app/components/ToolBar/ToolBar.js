import React, {Component} from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { Toolbar } from 'react-native-material-ui';
import metrics from '../../config/metrics';
import Colors from '../../config/colors';
const ToolBar = (props) => {
    return(
        <Toolbar
            leftElement= "menu"
            centerElement={
                <View style={{justifyContent: "center", alignItems: "center", marginRight: 30}}>
                    <Icon name="logo-github" size={metrics.logo} color={Colors.COLOR_WHITE}/>
                </View>
            }
            rightElement={
                <View style={{justifyContent: "center", alignItems: "center", marginRight: 20}}>
                    <Icon name="ios-notifications" size={metrics.notif} color={Colors.COLOR_WHITE}/>
                </View>
            }
        />
    );
}

export default ToolBar;