import React from 'react';
import { NavigationContainer, StackActions} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import { observer } from 'mobx-react';
import { Ionicons } from '@expo/vector-icons';

import ExhibitionDetails from './src/screens/ExhibitionDetails';
import Dashboard from './src/screens/Dashboard';
import Exhibitions from './src/screens/Exhibitions';
import { ScrollView } from 'react-native-gesture-handler';
import { darkTheme, lightTheme } from './src/theme';

const HomeNav = createStackNavigator();
const ExhibitionNav = createStackNavigator();
function HomeScreen() {
  return (
    <HomeNav.Navigator>
      <HomeNav.Screen name="Dashboard" component={Dashboard}></HomeNav.Screen>
      <HomeNav.Screen name="ExhibitionDetails" component={ExhibitionDetails}></HomeNav.Screen>
    </HomeNav.Navigator>
  )
}

function ExhibitionScreen() {
  return (
    <ExhibitionNav.Navigator>
      <ExhibitionNav.Screen name="Exhibitions" component={Exhibitions}></ExhibitionNav.Screen>
      <ExhibitionNav.Screen name="ExhibitionDetails" component={ExhibitionDetails}></ExhibitionNav.Screen>
    </ExhibitionNav.Navigator>
  )
}

function SettingsScreen() {
  return (
    <View>
      <Text>Exhibitions</Text>
    </View>
  )
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer theme={lightTheme}>
      <Tab.Navigator 
        tabBarOptions={{
          activeTintColor: '#e91e63',
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} 
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ios-home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen name="Exhibition" component={ExhibitionScreen}
          options={{
            tabBarLabel: 'Exhibition',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ios-book" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen name="Settings" component={SettingsScreen}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ios-settings" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
