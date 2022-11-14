import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Platform } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Tab2Screen from './Tab2'
import Tab1 from './Tab1'

const Tab = createBottomTabNavigator()

const Tabs = () => {
  return (
    <Tab.Navigator
        sceneContainerStyle={{
            backgroundColor:'white'
        }}
        screenOptions={{
            headerShown:false,
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
  )
}

export default Tabs