import React, { useState } from 'react';
import {
    TextInput,
    Button,
    View,
    StyleSheet,
    Modal,
    Image,
} from 'react-native';

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#311b6b',
        // marginBottom: 24,
        // gap: 16,
    },
    textInput: {
        padding: 8,
        marginRight: 8,
        borderWidth: 1,
        borderColor: '#e4d0ff',
        borderRadius: 4,
        width: '70%',
    },
    buttonsContainer: {
        flexDirection: 'row',
        marginTop: 16,
        gap: 8,
    },
    button: {
        width: 100,
        marginHorizontal: 8,
    },
    image: {
        width: 100,
        height: 100,
        margin: 20,
    },
});
const GoalInput = ({ onAddGoal, isOpen, onClose }) => {
    const [goalText, setGoalText] = useState('');
    const handleAddGoal = () => {
        onAddGoal(goalText);
        setGoalText('');
    };
    return (
        <Modal visible={isOpen} animationType="slide">
            <View style={styles.inputContainer}>
                <Image
                    source={require('../assets/images/goal-icon.jpg')}
                    style={styles.image}
                />
                <TextInput
                    style={styles.textInput}
                    value={goalText}
                    onChangeText={value => setGoalText(value)}
                    placeholder="Your course goal!"
                />
                <View style={styles.buttonsContainer}>
                    <View style={styles.button}>
                        <Button
                            onPress={handleAddGoal}
                            title="Add Goal"
                            disabled={!goalText}
                            color="#5e0fff"
                        />
                    </View>
                    <View style={styles.button}>
                        <Button
                            title="Cancel"
                            onPress={onClose}
                            color="#f31282"
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default GoalInput;
