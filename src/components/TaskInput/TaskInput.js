import { useState } from 'react';
import { StyleSheet, View, Button, TextInput, Modal, Image } from 'react-native';

export default TaskInput = ({ handleAddTask }) => {

  const [task, setTask] = useState();
  const [showModal, setShowModal] = useState(false);

  const handleAddNewTask = () => {
    setShowModal(true);
  }
  const handleTaskInput = (text) => {
    setTask({text, done: false});
  }

  const handleAddPress = () => {
    if (!task?.text) {
      return;
    }
    handleAddTask(task);
    setTask(null);
    hideModal();
  }

  const handleCancelPress = () => {
    hideModal();
  }

  const hideModal = () => {
    setShowModal(false);
  }

  return (
    <View style={styles.addTaskContainer}>
      <Button color="#85CAFB" title='Add New Task' onPress={handleAddNewTask} />
      <Modal visible={showModal} animationType="slide">
        <View style={styles.taskInputContainer}>
          <View style={styles.imageContainer}>
            <Image 
              resizeMode="contain" 
              style={styles.image} 
              source={require('../../assets/new.jpg')} 
            />
          </View>
          <TextInput 
            style={styles.textInput}
            placeholder="type your task" 
            onChangeText={handleTaskInput}
            value={task?.text}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button color="#85CAFB" title="Add" onPress={handleAddPress} />
            </View>
            <View style={styles.button}>
              <Button title="Cancel" color="#FA989F" onPress={handleCancelPress} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  taskInputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    paddingHorizontal: 16
  },
  imageContainer: {
    alignItems: 'center',
    paddingVertical: 24
  },
  image: {
    height: 126
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 16,
    padding: 8,
  },
  buttonContainer: {
    alignItems: 'stretch',
  },
  button: {
    paddingBottom: 8
  }
});