import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import StackNavigator from './src/navigator/Tab1'
import Tabs from './src/navigator/Tabs';

export default function App() {
  return (
    <NavigationContainer>
      <Tabs/>
    </NavigationContainer>
  );
}