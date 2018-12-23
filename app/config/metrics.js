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
    basePadding: Normalize(10),
    titleImage: Normalize(20,true),
    star: Normalize(15,true),
    logo: Normalize(30,true),
    notif: Normalize(20,true),
    smallMargin: Normalize(5),
    circle: Normalize(16),
};

export default metrics;
