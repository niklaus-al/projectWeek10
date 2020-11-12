import 'react-native-gesture-handler';
import * as React from 'react';
import { useEffect } from 'react';
import { Image, Button, StyleSheet, View, Text, FlatList, SafeAreaView, TouchableOpacity} from 'react-native';





const  ImageScreen = ({ navigation, route }) => {

    const { name, image } = route.params;

    const returnToHome = () => {
        navigation.navigate('Home')
    }

  return(
    <View>
        <Image style={styles.image} source={image}/>
        <Button title="go home" onPress={returnToHome}/>
    </View>
  );
}

export default ImageScreen

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 400,
        resizeMode: 'cover'
    },
  });
  