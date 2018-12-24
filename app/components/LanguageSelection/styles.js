import { StyleSheet } from 'react-native';
import ApplicationStyles from 'app/config/styles';
import metrics from '../../config/metrics';
import color from 'app/config/colors';

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        padding: metrics.basePadding
    },
    dropDown: {
        borderWidth: 1,
        borderColor: color.COLOR_GREY,
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: metrics.basePadding
    },
    text: {
        flex: 1,
        textAlign: 'center',
    },
    selectedLanguageText: {
        flex: 1,
        textAlign: 'center',
        fontSize: 12
    },
    
});

export default styles;
