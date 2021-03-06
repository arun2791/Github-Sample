import { StyleSheet } from 'react-native';
import ApplicationStyles from 'app/config/styles';
import metrics from '../../config/metrics';
import color from 'app/config/colors';

const styles = StyleSheet.create({
    searchBar: {
        margin: metrics.baseMargin, borderWidth: 1, borderColor: 'black', height: metrics.searchBar,
        fontSize: 12,
    }
});

export default styles;
