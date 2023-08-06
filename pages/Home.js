import { Button, Text, View } from 'react-native';
import Nav from '../components/Nav';

export const HomeScreen = ({ navigation }) => {
    return (
        <View>
            <Button
                title="Go to Seraj's profile"
                onPress={() =>
                    navigation.navigate('Profile', { name: 'Seraj' })
                }
            />
            <Button
                title="Go to Add Goal"
                onPress={() => navigation.navigate('Goal', { name: 'Goal' })}
            />
            {/* <Nav /> */}
            <Text>Saddam Atef Helles</Text>
        </View>
    );
};
export const ProfileScreen = ({ navigation, route }) => {
    return (
        <View>
            <Text>This is {route.params.name}'s profile</Text>
        </View>
    );
};
