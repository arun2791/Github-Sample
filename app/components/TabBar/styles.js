import { StyleSheet } from 'react-native';
import ApplicationStyles from 'app/config/styles';
import metrics from '../../config/metrics';
import color from 'app/config/colors';

const styles = StyleSheet.create({
    tabBarView: {
        backgroundColor: color.COLOR_PRIMARY,
        height: metrics.navBarHeight,
        width: metrics.screenWidth
    },
    itemView: {
        flexDirection: 'row',
        paddingHorizontal: metrics.basePadding,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textSelected: {
        color: 'white'
    },
    textUnSelected:{
        color: 'grey'
    },
    count: {
        color: 'white',
        paddingHorizontal: metrics.smallMargin,
        borderRadius: metrics.smallMargin,
        backgroundColor: color.COLOR_GREY,
        margin: metrics.baseMargin
    }
});

export default styles;
