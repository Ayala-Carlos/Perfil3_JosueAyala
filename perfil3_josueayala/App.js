import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
 
import HomeScreen from './src/screens/HomeScreen';
import ApiScreen from './src/screens/ApiScreen';
 
const Stack = createNativeStackNavigator();
 
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: '#2A9D8F' },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Datos del Estudiante' }}
        />
        <Stack.Screen
          name="ApiScreen"
          component={ApiScreen}
          options={{ title: 'Catálogo de Personajes' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
 