import {
    View,
    Text,
    StyleSheet,
    Pressable,
    Button,
    FlatList,
    ScrollView,
    TouchableHighlight,
    StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, ProfileScreen } from '../pages/Home';
import Goal from '../pages/Goal';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ title: 'Welcome to Home Page' }}
                />
                <Stack.Screen name="Profile" component={ProfileScreen} />
                <Stack.Screen
                    name="Goal"
                    component={Goal}
                    options={{ title: 'Add new Goal' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
