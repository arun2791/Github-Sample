import React, {Component} from 'react';
import { View, FlatList, Text } from 'react-native';
import styles from './styles';
const Tabs = [{name:"Overview", selected: false},{name:"Repositories", selected: true, count: 14},{name:"Stars", selected: false, count: 2},{name:"Fork", selected: false, count: 2}]
const TabBar = (props) => {
    return(
        <View style={styles.tabBarView}>
            <FlatList
                data={Tabs}
                horizontal={true}
                renderItem={renderItem}
            />
        </View>
    );
}

const renderItem = ({item}) => {
    const textNameStyle = item.selected ? styles.textSelected : styles.textUnSelected
    return(
        <View style={styles.itemView}>
            <Text style={textNameStyle}>{item.name}</Text>
            {item.count && <Text style={styles.count}>{item.count}</Text>}
        </View>
    );
}

export default TabBar;