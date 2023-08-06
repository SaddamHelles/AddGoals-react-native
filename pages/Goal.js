import { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    FlatList,
    StatusBar,
} from 'react-native';
import GoalInput from '../components/GoalInput';
import GoalItem from '../components/GoalItem';

const Goal = () => {
    const [goals, setGoals] = useState([]);
    const [open, setOpen] = useState(false);

    const handleAddGoal = goalText => {
        setGoals(prev => [...prev, goalText]);
    };

    const handleDeleteGoal = goal => {
        const updatedGoals = goals.filter(item => item !== goal);
        setGoals(updatedGoals);
        handleClose();
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <StatusBar style="light" />
            <View style={styles.appContainer}>
                <Button
                    title="Add new Goal"
                    color="#5e0acc"
                    onPress={() => setOpen(true)}
                />
                {open && (
                    <GoalInput
                        onAddGoal={handleAddGoal}
                        isOpen={open}
                        onClose={handleClose}
                    />
                )}
                <View style={{ alignItems: 'center', marginTop: 32 }}>
                    <Text style={styles.listTitle}>List of goals...</Text>
                    <View style={{ width: '100%' }}>
                        <FlatList
                            ItemSeparatorComponent={
                                Platform.OS !== 'android' &&
                                (({ highlighted }) => (
                                    <View
                                        style={[
                                            styles.separator,
                                            highlighted && { marginLeft: 0 },
                                        ]}
                                    />
                                ))
                            }
                            data={goals.map((item, index) => ({
                                todo: item,
                                key: `${item}-${index}`,
                            }))}
                            renderItem={({ item, index, separators }) => (
                                <GoalItem
                                    item={item}
                                    separators={separators}
                                    onDeleteGoal={handleDeleteGoal}
                                />
                            )}
                        />
                    </View>
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 16,
    },
    goalsContainer: {
        flex: 5,
        flexBasis: 1000,
    },

    listTitle: {
        borderTopColor: 'gray',
        borderTopWidth: 1,
        paddingTop: 8,
        width: '100%',
        textAlign: 'center',
    },
});

export default Goal;
