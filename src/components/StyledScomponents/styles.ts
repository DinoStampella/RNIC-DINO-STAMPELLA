import {FlatListProps, TextInput, TextInputProps} from 'react-native';
import styled from 'styled-components/native';
import {TaskCardProps} from '../taskCard';
import {Ref} from 'react';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  background-color: #364950;
`;

export const KeyboardWrapper = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: space-between;
`;

export const TaskListTitle = styled.Text`
  font-size: 40px;
  text-align: center;
  margin: 10px;
  color: #fcfeff;
`;

export const CardsFlatList = styled.FlatList<FlatListProps<TaskCardProps>>`
  flex: 1;
`;

export const ListEmptyComponent = styled.Text`
  align-self: center;
  color: #fcfeff;
`;

export const Form = styled.View`
  padding: 10px;
  align-items: center;
`;

export const FormInput = styled.TextInput<
  TextInputProps & {ref?: Ref<TextInput>}
>`
  height: 50px;
  width: 100%;
  border-width: 1px;
  margin: 10px;
  padding: 5px 15px;
  border-radius: 10px;
  background-color: #fcfeff;
`;

export const Button = styled.TouchableOpacity`
  height: 50px;
  width: 60%;
  margin: 10px;
  padding: 5px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: #3177b3;
`;

export const TextButton = styled.Text`
  color: #fcfeff;
`;

export const TaskCardContainer = styled.View`
  flex: 1;
  margin: 5px;
  border-width: 1px;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  border-color: #3177b3;
  background-color: #dde4e6;
`;

export const TextContainer = styled.View`
  flex: 1;
  gap: 5px;
`;

export const CardTitle = styled.Text`
  font-size: 20px;
  color: #000;
`;

export const CardSubtitle = styled(CardTitle)`
  font-size: 15px;
`;
