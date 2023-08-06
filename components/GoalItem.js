import React from 'react';
import {
    TouchableHighlight,
    Text,
    View,
    StyleSheet,
    Pressable,
} from 'react-native';

const styles = StyleSheet.create({
    singleGoal: {
        // borderColor: 'blue',
        borderWidth: 1,
        borderRadius: 6,
        margin: 8,
        backgroundColor: '#5e0acc',
        color: 'white',
    },
    textGoal: {
        color: 'white',
        padding: 8,
    },
    pressedItem: {
        opacity: 0.5,
    },
});
const GoalItem = ({ item, separators, onDeleteGoal }) => {
    return (
        // <TouchableHighlight
        //     key={item.key}
        //     onPress={() => this._onPress(item)}
        //     onShowUnderlay={separators.highlight}
        //     onHideUnderlay={separators.unhighlight}>
        <View style={styles.singleGoal}>
            <Pressable
                android_ripple={{ color: '#dabfff' }}
                style={({ pressed }) => pressed && styles.pressedItem}
                onPress={() => onDeleteGoal(item.todo)}>
                <Text style={styles.textGoal}>{item.todo}</Text>
            </Pressable>
        </View>
        // </TouchableHighlight>
    );
};

export default GoalItem;
