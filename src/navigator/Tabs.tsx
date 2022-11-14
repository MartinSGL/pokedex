import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Platform, StatusBar } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Tab2Screen from './Tab2'
import Tab1 from './Tab1'
import { ThemeContext } from '../contexts/ThemeContext'
import Splash from '../components/Splash'

const Tab = createBottomTabNavigator()

const Tabs = () => {

  const {theme} = useContext(ThemeContext)

  return (
    
    <NavigationContainer
     theme={theme}

    >
      {/* use this to control de color of battery,hour etc ios */}
      <StatusBar barStyle={theme.dark ? "light-content" : "dark-content" }/> 
      <Tab.Navigator
          screenOptions={{
              headerShown:false,
              headerTintColor:theme.colors.text,
              tabBarActiveTintColor:'#5856D6',
              tabBarLabelStyle:{
                  marginBottom: (Platform.OS==='ios' ? 0 : 10)
              },
              tabBarStyle:{
                  position:'absolute',
                  backgroundColor:'rgba(255,255,255,0.92)',
                  borderWidth:0,
                  elevation:0,
                  height:(Platform.OS ==='ios' ? 80 : 60)
              }
          }}
      >
        <Tab.Screen 
          name="Tab1"
          component={Tab1}
          options={{
              tabBarLabel:"Listado",
              tabBarIcon:({color})=> 
              <Icon name="list-outline" color={color} size={20} />
          }}
          />
        <Tab.Screen 
          name="Tab2Screen" 
          component={Tab2Screen}
          options={{
              tabBarLabel:"Busqueda",
              tabBarIcon:({color})=> 
              <Icon name="search-outline" color={color} size={20} />
          }}
          />
      </Tab.Navigator>
      <Splash/>
    </NavigationContainer>
  )
}

export default Tabs