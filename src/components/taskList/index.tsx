import React, {useEffect, useRef, useState} from 'react';
import {
  AppState,
  FlatList,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import TaskCard, {type TaskCardProps} from '../taskCard';
import styles from './styles';

function TaskList(): React.JSX.Element {
  const [tasks, setTasks] = useState<TaskCardProps[]>([]);
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const descriptionInputRef = useRef<TextInput>(null);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (nextAppState === 'background') {
        setTasks([]);
      }
    });
    return () => {
      subscription.remove();
    };
  }, []);

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
            returnKeyType="next"
            onSubmitEditing={() => descriptionInputRef.current?.focus()}
          />
          <TextInput
            ref={descriptionInputRef}
            style={styles.descriptionInput}
            placeholder="Descripción (opcional)"
            onChangeText={setDescription}
            value={description}
            returnKeyType="done"
            onSubmitEditing={() => onPress(title, description)}
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

export default TaskList;
