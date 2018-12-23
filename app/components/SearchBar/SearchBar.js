import React, {Component} from 'react';
import { View, TextInput } from 'react-native';
import styles from './styles';

const SearchBar = (props) => {
    return(
        <TextInput
            onChangeText={(text)=>props.onChangeText(text)}
            style={styles.searchBar}/>
    );
}

export default SearchBar;