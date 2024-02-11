import React, {useEffect} from 'react';
import TaskList from './src/components/taskList';
import RNBootSplash from 'react-native-bootsplash';

function App(): React.JSX.Element {
  useEffect(() => {
    RNBootSplash.hide({fade: true});
  }, []);
  return <TaskList />;
}

export default App;
