import React, {useState} from 'react';
import {
  FlatList,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import TaskCard, {type TaskCardProps} from '../taskCard';

function TaskList(): React.JSX.Element {
  const [tasks, setTasks] = useState<TaskCardProps[]>([]);
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const onPress = (titleValue: string, descriptionValue: string) => {
    setTitle('');
    setDescription('');
    Keyboard.dismiss();
    if (!titleValue) {
      return;
    }
    setTasks([
      ...tasks,
      {title: titleValue, description: descriptionValue, state: false},
    ]);
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.wrapper}>
        <Text style={styles.title}>Lista de tareas</Text>
        <FlatList
          style={styles.taskList}
          data={tasks}
          ListEmptyComponent={
            <Text style={styles.listEmptyComponent}>
              No hay tareas pendiente
            </Text>
          }
          renderItem={item => {
            return (
              <TaskCard
                title={item.item.title}
                description={item.item.description}
                state={item.item.state}
              />
            );
          }}
        />
        <View style={styles.form}>
          <TextInput
            style={styles.titleInput}
            placeholder="Título"
            onChangeText={setTitle}
            value={title}
          />
          <TextInput
            style={styles.descriptionInput}
            placeholder="Descripción"
            onChangeText={setDescription}
            value={description}
          />
          <TouchableOpacity
            style={styles.touchable}
            onPress={() => onPress(title, description)}>
            <Text>Create task</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
  },
  taskList: {flex: 1},
  listEmptyComponent: {alignSelf: 'center', height: '100%'},
  form: {padding: 10, alignItems: 'center'},
  titleInput: {
    height: 50,
    width: '100%',
    borderWidth: 1,
    margin: 10,
    padding: 5,
    borderRadius: 10,
  },
  descriptionInput: {
    height: 50,
    width: '100%',
    borderWidth: 1,
    margin: 10,
    padding: 5,
    borderRadius: 10,
  },
  touchable: {
    height: 50,
    width: '60%',
    borderWidth: 1,
    margin: 10,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
});

export default TaskList;
