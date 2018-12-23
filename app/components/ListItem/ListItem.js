import React, {Componenet} from 'react';
import Icon from 'react-native-vector-icons/Ionicons'
import { View, Image, Text, Dimensions } from 'react-native';
import styles from './styles';
import metrics from '../../config/metrics';
import Colors from '../../config/colors';
const {height, width} = Dimensions.get('window');
const ListItem = (props) => {
    const {description, full_name, stargazers_count, language} = props.item;
    //const imagePath = getImagePath(image);
    
    return(
        <View style={styles.itemView}> 
            <Icon name="ios-git-branch" size={metrics.titleImage} color={Colors.COLOR_GREY}/>
            <View style={styles.heading}>  
                <Text style={styles.textTitle}>{full_name}</Text>
                <Text style={styles.textDesc}>{description}</Text>
                <View style={styles.row}>
                    <StarCount count = {stargazers_count}/>
                    {language && <Language language = {language}/>}
                </View>
            </View>
            
        </View>
    )
}
const StarCount = (props) => {
    const { count } = props
    return(
        <View style={styles.row}>
            <Icon name="ios-star" size={metrics.star} color={Colors.COLOR_GREY}/>
            <Text style={styles.textCount}>{count}</Text>
        </View>
    );
}
const Language = (props) => {
    const { language } = props
    return(
        <View style={styles.row}>
            <View style={styles.circle}/>
            <Text style={styles.textCount}>{language}</Text>
        </View>
    );
}
export default ListItem;