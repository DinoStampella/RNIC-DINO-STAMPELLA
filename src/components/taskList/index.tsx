import React, {useEffect, useRef, useState} from 'react';
import {AppState, Keyboard, Platform, TextInput} from 'react-native';
import TaskCard, {type TaskCardProps} from '../taskCard';
import {
  Wrapper,
  KeyboardWrapper,
  TaskListTitle,
  Form,
  FormInput,
  Button,
  TextButton,
  CardsFlatList,
  ListEmptyComponent,
} from './styles';

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
      {
        title: titleValue,
        description: descriptionValue,
        state: false,
        index: 0,
      },
    ]);
  };

  return (
    <Wrapper>
      <KeyboardWrapper behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TaskListTitle>Lista de tareas</TaskListTitle>
        <CardsFlatList
          data={tasks}
          ListEmptyComponent={
            <ListEmptyComponent>No hay tareas pendientes</ListEmptyComponent>
          }
          renderItem={item => {
            return (
              <TaskCard
                title={item.item.title}
                description={item.item.description}
                state={item.item.state}
                index={item.index}
              />
            );
          }}
        />
        <Form>
          <FormInput
            placeholder="Título"
            onChangeText={setTitle}
            value={title}
            returnKeyType="next"
            onSubmitEditing={() => descriptionInputRef.current?.focus()}
          />
          <FormInput
            ref={descriptionInputRef}
            placeholder="Descripción (opcional)"
            onChangeText={setDescription}
            value={description}
            returnKeyType="done"
            onSubmitEditing={() => onPress(title, description)}
          />
          <Button onPress={() => onPress(title, description)}>
            <TextButton>Create task</TextButton>
          </Button>
        </Form>
      </KeyboardWrapper>
    </Wrapper>
  );
}

export default TaskList;
