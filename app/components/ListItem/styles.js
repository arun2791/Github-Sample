import { StyleSheet } from 'react-native';
import ApplicationStyles from 'app/config/styles';
import metrics from 'app/config/metrics';
import color from 'app/config/colors';

const styles = StyleSheet.create({
    ...ApplicationStyles,
    heading: {
        paddingHorizontal: metrics.basePadding,
        flex: 1,
    },
    image: {
        height: metrics.screenHeight*0.27,
        width: metrics.titleImage,
        resizeMode:'contain'
    },
    textTitle: {
        ...ApplicationStyles.fontlight,
        textAlign: 'left',
        color: color.COLOR_BLUE,
        fontSize: 18
    },
    textDesc: {
        ...ApplicationStyles.fontlight,
        textAlign: 'left',
        marginVertical: metrics.smallMargin
    },
    textCount: {
        ...ApplicationStyles.fontlight,
        textAlign: 'left',
        marginHorizontal: metrics.smallMargin
    },
    itemView: {
        flexDirection: 'row',
        width: metrics.screenWidth,
        padding: metrics.basePadding,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    circle: {
        width: metrics.circle,
        height: metrics.circle,
        borderRadius: metrics.circle/2,
        backgroundColor: color.COLOR_ORANGE,
    }

});

export default styles;
