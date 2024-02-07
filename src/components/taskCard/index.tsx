import React, {useState} from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

function TaskCard(props: TaskCardProps): React.JSX.Element {
  const [status, setStatus] = useState<boolean>(props.state);
  return (
    <View style={styles.wrapper} onTouchEnd={() => setStatus(!status)}>
      <View style={styles.text}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.description}>{props.description}</Text>
      </View>
      <View style={status ? styles.done : styles.pending} />
    </View>
  );
}

export interface TaskCardProps {
  title: string;
  description: string;
  state: boolean;
}

export default TaskCard;
