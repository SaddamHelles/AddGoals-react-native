import { Button, Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    buttons: {
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 16,
    },
});
export const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.buttons}>
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
