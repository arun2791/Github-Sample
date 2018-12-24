import { StyleSheet } from 'react-native';
import ApplicationStyles from '../../config/styles';
import color from '../../config/colors';
import metrics from '../../config/metrics';
const styles = StyleSheet.create({
    ...ApplicationStyles,
    seperator: {
        height: 1,
        backgroundColor: color.COLOR_GREY
    },
    dialogView: {
        height: metrics.screenHeight,
        width: metrics.screenWidth,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default styles;
