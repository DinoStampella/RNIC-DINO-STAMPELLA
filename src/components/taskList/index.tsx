import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import TaskCard, {type TaskCardProps} from '../taskCard';

function TaskList(): React.JSX.Element {
  const tasks: TaskCardProps[] = [
    {title: 'Cocinar', description: 'Milanesas con pure', state: false},
    {title: 'Cocinar', description: 'Milanesas con pure', state: false},
    {title: 'Cocinar', description: 'Milanesas con pure', state: false},
    {title: 'Cocinar', description: 'Milanesas con pure', state: true},
  ];
  return (
    <FlatList
      style={styles.wrapper}
      data={tasks}
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
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  title: {
    flex: 1,
  },
  description: {
    flex: 1,
  },
  status: {
    flex: 1,
  },
});

export default TaskList;
