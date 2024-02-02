import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

function TaskCard(props: TaskCardProps): React.JSX.Element {
  const status: 'pending' | 'done' = props.state ? 'done' : 'pending';
  return (
    <View style={styles.wrapper}>
      <View style={styles.text}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.description}>{props.description}</Text>
      </View>
      <View style={styles[status]} />
    </View>
  );
}

export interface TaskCardProps {
  title: string;
  description: string;
  state: boolean;
}

export default TaskCard;
