import {Platform, StyleSheet} from 'react-native';

const isIos = Platform.OS === 'ios';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    margin: 5,
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderColor: '#3177b3',
    backgroundColor: isIos ? '#dde4e6' : '#364950',
  },
  text: {flex: 1, gap: 5},
  title: {
    flex: 1,
    fontSize: 20,
    color: isIos ? '#000' : '#fff',
  },
  titleDone: {
    textDecorationLine: 'line-through',
    flex: 1,
    fontSize: 20,
    color: isIos ? '#000' : '#fff',
  },
  description: {
    flex: 1,
    fontSize: 15,
    color: isIos ? '#000' : '#fff',
  },
  descriptionDone: {
    flex: 1,
    fontSize: 15,
    textDecorationLine: 'line-through',
    color: isIos ? '#000' : '#fff',
  },
});

export default styles;
