import {Platform, StyleSheet} from 'react-native';

const isIos = Platform.OS === 'ios';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: isIos ? '#364950' : '#edeff1',
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
    color: isIos ? '#fcfeff' : '#202425',
  },
  taskList: {flex: 1},
  listEmptyComponent: {
    alignSelf: 'center',
    color: isIos ? '#fcfeff' : '#202425',
  },
  form: {padding: 10, alignItems: 'center'},
  input: {
    height: 50,
    width: '100%',
    borderWidth: 1,
    margin: 10,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 10,
    backgroundColor: '#fcfeff',
  },
  touchable: {
    height: 50,
    width: '60%',
    margin: 10,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#3177b3',
  },
  touchableText: {
    color: '#fcfeff',
  },
});

export default styles;
