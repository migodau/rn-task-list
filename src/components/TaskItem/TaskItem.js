import { StyleSheet, Text, View, Pressable } from 'react-native';

export default TaskItem = ({ task, index, handleTaskPress }) => {
  return (
    <Pressable onPress={() => handleTaskPress(index)} style={({pressed}) => pressed && styles.pressedItem}>
      <View style={[styles.listItem, task.done ? styles.listItemDone :styles.listItemToDo  ]}>
        <Text>{task.text}</Text>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: '#B6E2F3',
    justifyContent: 'center',
    marginBottom: 8,
    padding: 16,
  },
  pressedItem: {
    opacity: 0.6,
  },
  listItemToDo: {
    backgroundColor: '#D0E9FB',
  },
  listItemDone: {
    backgroundColor: '#CFFADF',
  },
});