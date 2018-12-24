import { StyleSheet } from 'react-native';
import ApplicationStyles from 'app/config/styles';
import metrics from '../../config/metrics';
import color from 'app/config/colors';

const styles = StyleSheet.create({
    container: {
        height: metrics.screenHeight,
        width: metrics.screenWidth,
        alignItems: 'center',
        justifyContent: 'center',  
    },
    dialog: {
        backgroundColor: color.COLOR_WHITE,
        elevation: 2,
        padding: metrics.basePadding
    }
});

export default styles;
