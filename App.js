import 'react-native-gesture-handler';
import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import './App.css';

function FirstScreen({ navigation }) {
  return(
    <View>
      <Text View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        You are on Screen One
      </Text>
      <Button
        title="Go to screen two"
        onPress={() => navigation.navigate('Second')}
      />
    </View>
  );
}

function SecondScreen() {
  return(
    <View>
      <Text View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        You are on Screen Two
      </Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="First" component={FirstScreen} />
        <Stack.Screen name="Second" component={SecondScreen} />
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
