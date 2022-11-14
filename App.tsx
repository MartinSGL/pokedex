
import * as React from 'react';
import 'react-native-gesture-handler';
import { ThemeProvider } from './src/contexts/ThemeContext';
import Tabs from './src/navigator/Tabs';

export default function App() {
  return (
    <ThemeProvider>
      <Tabs/>
    </ThemeProvider>
  );
}