import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './components/HomeScreen';
import DetailsScreen from './components/DetailsScreen';
import LoaiHoa from './components/Loaihoa';
import Hoa from './components/Hoa';
import ChiTietHoa from './components/ChiTietHoa';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="LoaiHoa" component={LoaiHoa} />
        <Stack.Screen name="Hoa" component={Hoa} />
        <Stack.Screen name="ChiTietHoa" component={ChiTietHoa} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;