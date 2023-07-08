import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import ListScreen from './screens/ListScreen';
import Homescreen from './screens/Homescreen';
import CounterScreen from './screens/CounterScreen';

const theme = {
  ...DefaultTheme,
  fonts: {
    regular: 'Roboto',
    medium: 'Roboto-Medium',
    light: 'Roboto-Light',
    thin: 'Roboto-Thin',
  },
};

const initialState = { counter: 0 };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { counter: state.counter + 1 };
    case 'DECREMENT':
      return { counter: state.counter - 1 };
    default:
      return state;
  }
};

const store = createStore(reducer);

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Home" component={Homescreen} />
            <Tab.Screen name="Counter" component={CounterScreen} />
            <Tab.Screen name="List" component={ListScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
};

export default App;