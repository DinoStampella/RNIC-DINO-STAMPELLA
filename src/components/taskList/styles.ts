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
