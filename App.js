import React from 'react';
import AppContainer from './src/Navigation';
import { YellowBox,LogBox  } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/Redux/Store';
import 'react-native-gesture-handler';

const App = () => {
  YellowBox.ignoreWarnings([
    'V: Calling `getNode()`',
    'Animated: `useNativeDriver`',
    'FlatList: Calling `getNode()`',
  ]);
  LogBox.ignoreLogs(['Warning: ...']);
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
};

export default App;