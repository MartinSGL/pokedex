import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './src/navigator/Tabs';
import Splash from './src/components/Splash';
import { ThemeProvider } from './src/contexts/ThemeContext';

export default function App() {

  return (
    <NavigationContainer>
      <ThemeProvider>
         <Tabs/>
      </ThemeProvider>
      <Splash/>
    </NavigationContainer>
  );
}