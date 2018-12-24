import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import styles from './styles';

const LoadingIndicator = (props) => {
    return(
        <View style={styles.container}>
            <ActivityIndicator size="small" />
        </View>
    );
}

export default LoadingIndicator;