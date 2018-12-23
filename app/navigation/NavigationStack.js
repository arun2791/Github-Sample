import { createStackNavigator, createAppContainer } from 'react-navigation';
import Contents from 'app/screens/Contents';

const RNApp = createStackNavigator(
    {
        Contents: {
            screen: Contents,
            navigationOptions: { header: null, gesturesEnabled: false }
        }
    },
    {
        initialRouteName: 'Contents'
    }
);

const App = createAppContainer(RNApp)

export default App;
