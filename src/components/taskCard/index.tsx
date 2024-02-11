import React, {useState} from 'react';
import {
  CardSubtitle,
  CardTitle,
  TaskCardContainer,
  TextContainer,
} from '../StyledScomponents/styles';

function TaskCard(props: TaskCardProps): React.JSX.Element {
  const [status, setStatus] = useState<boolean>(props.state);
  return (
    <TaskCardContainer onTouchEnd={() => setStatus(!status)}>
      <TextContainer>
        <CardTitle>{props.title}</CardTitle>
        <CardSubtitle numberOfLines={2}>{props.description}</CardSubtitle>
      </TextContainer>
    </TaskCardContainer>
  );
}

export interface TaskCardProps {
  title: string;
  description: string;
  state: boolean;
}

export default TaskCard;
