import React, {useState} from 'react';
import {
  ButtonsContainer,
  CardImage,
  CardSubtitle,
  CardTitle,
  ImageContainer,
  TaskCardContainer,
  TextButtonContainer,
  TextContainer,
} from './styles';
import EditButton from '../../assets/icons/editButton';
import DeleteButton from '../../assets/icons/deleteButton';

const images = [
  require('../../assets/images/cleaning.jpeg'),
  require('../../assets/images/cooking.jpeg'),
  require('../../assets/images/supermarket.jpeg'),
];
const noImage = require('../../assets/images/noImage.jpeg');

function TaskCard(props: TaskCardProps): React.JSX.Element {
  const [status, setStatus] = useState<boolean>(props.state);
  return (
    <TaskCardContainer onTouchEnd={() => setStatus(!status)}>
      <TextButtonContainer>
        <TextContainer>
          <CardTitle>{props.title}</CardTitle>
          <CardSubtitle numberOfLines={2}>{props.description}</CardSubtitle>
        </TextContainer>
        <ButtonsContainer>
          <EditButton width={30} height={30} />
          <DeleteButton width={30} height={30} fill={'#ad0c0c'} />
        </ButtonsContainer>
      </TextButtonContainer>
      <ImageContainer>
        <CardImage source={images[props.index] ?? noImage} />
      </ImageContainer>
    </TaskCardContainer>
  );
}

export interface TaskCardProps {
  title: string;
  description: string;
  state: boolean;
  index: number;
}

export default TaskCard;
