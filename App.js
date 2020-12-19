import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from './screens/HomeScreen';
import OrderDeliveryScreen from './screens/OrderDeliveryScreen';
import Tabs from './navigation/tabs';
import Restaurant from './screens/Restaurant';

const StackTabs = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <StackTabs.Navigator screenOptions={{
      headerShown:false
    }}
    initialRouteName={"Home"}>
    <StackTabs.Screen name="Home" component={Tabs} />
    <StackTabs.Screen name="Restaurant" component={Restaurant} />
    <StackTabs.Screen name="OrderDelivery" component={OrderDeliveryScreen} />
    </StackTabs.Navigator>
    </NavigationContainer>
  );
}


