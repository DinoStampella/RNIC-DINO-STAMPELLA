import styled from 'styled-components/native';

export const TaskCardContainer = styled.View`
  flex-direction: row;
  margin: 5px;
  border-width: 1px;
  border-radius: 10px;
  padding: 10px 20px;
  border-color: #3177b3;
  background-color: #dde4e6;
`;

export const TextButtonContainer = styled.View`
  flex: 1;
`;

export const TextContainer = styled.View`
  flex: 1;
  gap: 5px;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  gap: 10px;
  align-items: center;
`;

export const CardTitle = styled.Text`
  font-size: 20px;
  color: #000;
`;

export const CardSubtitle = styled(CardTitle)`
  font-size: 15px;
`;

export const ImageContainer = styled.View`
  flex: 1;
  align-items: center;
  max-width: 100px;
  max-height: 100px;
`;

export const CardImage = styled.Image`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
