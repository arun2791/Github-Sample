import { StyleSheet } from 'react-native';
import ApplicationStyles from 'app/config/styles';
import metrics from 'app/config/metrics';
import color from 'app/config/colors';

const styles = StyleSheet.create({
    tabBarView: {
        backgroundColor: color.COLOR_PRIMARY,
        height: metrics.navBarHeight,
        width: metrics.screenWidth
    }
});

export default styles;
