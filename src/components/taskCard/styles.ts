import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    margin: 5,
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  text: {flexDirection: 'column'},
  title: {
    flex: 1,
    fontSize: 20,
  },
  description: {
    flex: 1,
    fontSize: 15,
  },
  pending: {
    marginRight: 20,
    height: 15,
    width: 15,
    borderRadius: 50,
    backgroundColor: 'grey',
  },
  done: {
    marginRight: 20,
    height: 15,
    width: 15,
    borderRadius: 50,
    backgroundColor: 'green',
  },
});

export default styles;
