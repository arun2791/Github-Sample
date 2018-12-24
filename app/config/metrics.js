/*
 * platform/application wide metrics for proper styling
*/
import { Dimensions, Platform } from 'react-native';
import Normalize from 'app/lib/normalize'
const { width, height } = Dimensions.get('window');

const metrics = {
    screenWidth: width < height ? width : height,
    screenHeight: width < height ? height : width,
    navBarHeight: Platform.OS === 'ios' ? Normalize(54) : Normalize(66),
    searchBar: Normalize(50),
    basePadding: Normalize(10),
    baseMargin: Normalize(10),
    doubleMargin: Normalize(20),
    titleImage: Normalize(20,true),
    star: Normalize(15,true),
    logo: Normalize(30,true),
    dropDown: Normalize(20,true),
    notif: Normalize(20,true),
    smallMargin: Normalize(5),
    circle: Normalize(12),
    titleHeight: Normalize(25),
};

export default metrics;
