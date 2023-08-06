import React from 'react';
import { Link } from 'react-router-native';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    nav: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 38,
    },
    navItem: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
    },
});
const Nav = () => {
    return (
        <View style={styles.nav}>
            <Link to="/" underlayColor="#f0f4f7" style={styles.navItem}>
                <Text>Home</Text>
            </Link>
            <Link to="/about" underlayColor="#f0f4f7" style={styles.navItem}>
                <Text>About</Text>
            </Link>
        </View>
    );
};

export default Nav;
