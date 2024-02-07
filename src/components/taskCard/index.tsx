import React, {useState} from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

function TaskCard(props: TaskCardProps): React.JSX.Element {
  const [status, setStatus] = useState<boolean>(props.state);
  return (
    <View style={styles.wrapper} onTouchEnd={() => setStatus(!status)}>
      <View style={styles.text}>
        <Text style={status ? styles.titleDone : styles.title}>
          {props.title}
        </Text>
        <Text
          style={status ? styles.descriptionDone : styles.description}
          numberOfLines={2}>
          {props.description}
        </Text>
      </View>
    </View>
  );
}

export interface TaskCardProps {
  title: string;
  description: string;
  state: boolean;
}

export default TaskCard;
