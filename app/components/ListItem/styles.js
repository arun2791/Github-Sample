import { StyleSheet } from 'react-native';
import ApplicationStyles from '../../config/styles';
import metrics from '../../config/metrics';
import color from '../../config/colors';

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
        color: color.COLOR_BLUE,
        fontSize: 16,
        lineHeight: metrics.titleHeight
    },
    textDesc: {
        ...ApplicationStyles.fontlight,
        fontSize: 12,
        marginBottom: metrics.smallMargin,
        marginTop: metrics.doubleMargin
    },
    textCount: {
        ...ApplicationStyles.fontlight,
        marginHorizontal: metrics.smallMargin,
        fontSize: 12,
        marginVertical: metrics.smallMargin
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
        marginLeft: metrics.smallMargin
    },
    iconStyle: {
        marginTop: metrics.smallMargin
    }

});

export default styles;
