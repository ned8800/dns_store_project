import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ShopScreen from './screens/ShopScreen';
import ProductScreen from './screens/ProductScreen';
import { store } from './store';
import { Provider } from 'react-redux';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name='NSD' component={ShopScreen} />
                    <Stack.Screen name='Товар' component={ProductScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}
