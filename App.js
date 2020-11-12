import 'react-native-gesture-handler';
import * as React from 'react';
import { useState } from 'react';
import { Button, Stylesheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import './App.css';

import HomeScreen from './screens/home';
import ImageScreen from './screens/imageScreen';




const Stack = createStackNavigator();

const App = () => {

  const [items, setImage] = useState([
    { name: 'image-1', location: require('./images/image-1.jpg'), id: 1},
    { name: 'image-2', location: require('./images/image-2.jpg'), id: 2},
    { name: 'image-3', location: require('./images/image-3.jpg'), id: 3},
    { name: 'image-4', location: require('./images/image-4.jpg'), id: 4},
    { name: 'image-5', location: require('./images/image-5.jpg'), id: 5},
    { name: 'image-6', location: require('./images/image-6.jpg'), id: 6},
    { name: 'image-7', location: require('./images/image-7.jpg'), id: 7},
    { name: 'image-8', location: require('./images/image-8.jpg'), id: 8},
    { name: 'image-9', location: require('./images/image-9.jpg'), id: 9}
  ]);

  

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          initialParams={{ items: items }} 
        />
        <Stack.Screen name="Image" component={ImageScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/
