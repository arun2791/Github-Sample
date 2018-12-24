import { StyleSheet } from 'react-native';
import ApplicationStyles from 'app/config/styles';
import metrics from '../../config/metrics';
import color from 'app/config/colors';

const styles = StyleSheet.create({
    container: {
        height: metrics.screenHeight,
        width: metrics.screenWidth,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default styles;
