import { useState } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import TaskInput from '../../components/TaskInput';
import TaskItem from '../../components/TaskItem';

export default function Home() {

  const [taskList, setTaskList] = useState([]);

  const handleAddTask = (task) => {
    setTaskList(currentList => [...currentList, task]);
  }

  const handleTaskPress = (index) => {
    setTaskList(currentList => {
      if (!currentList[index].done) {
        currentList[index].done = true;
        return [ ...currentList ];
      }
      
      currentList.splice(index, 1);
      return [ ...currentList ];
    });
  }

  const renderListItem = (data) => (
    <TaskItem index={data.index} task={data.item} handleTaskPress={handleTaskPress}/>
  );

  return (
    <View style={styles.screenContainer}>
      <View style={styles.listContainer}>
        <Text style={styles.title}>Task List</Text>
        <FlatList data={taskList} keyExtractor={(item,index) => index } renderItem={renderListItem} />
      </View>
      <TaskInput handleAddTask={handleAddTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  listContainer: {
    paddingTop: 24,
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 16,
  },
});
