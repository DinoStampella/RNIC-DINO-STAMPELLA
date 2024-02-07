import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
  },
  taskList: {flex: 1},
  listEmptyComponent: {alignSelf: 'center'},
  form: {padding: 10, alignItems: 'center'},
  titleInput: {
    height: 50,
    width: '100%',
    borderWidth: 1,
    margin: 10,
    padding: 5,
    borderRadius: 10,
  },
  descriptionInput: {
    height: 50,
    width: '100%',
    borderWidth: 1,
    margin: 10,
    padding: 5,
    borderRadius: 10,
  },
  touchable: {
    height: 50,
    width: '60%',
    borderWidth: 1,
    margin: 10,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
});

export default styles;
