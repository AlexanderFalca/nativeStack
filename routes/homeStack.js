import {createStackNavigator} from 'react-navigation';
import Main from '../screens/main';
import Product from '../screens/product';

export default createStackNavigator(
  {
    Main,
    Product,
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#DA552F',
      },
      headerTintColor: '#FFF',
    },
  },
);
