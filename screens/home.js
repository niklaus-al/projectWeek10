import 'react-native-gesture-handler';
import * as React from 'react';
import { useEffect } from 'react';
import { Image, StyleSheet, View, Text, FlatList, SafeAreaView, TouchableOpacity} from 'react-native';

//import './App.css';

const HomeScreen = ({ route, navigation }) => {

    const { items } = route.params
  
   /* useEffect = ( () => {
        console.log(items)
    })*/

    const goToImage = (item) => {
        navigation.navigate('Image', {name: item.name, image: item.location})
    }
  
    const itemRow = ({ item }) => (
        <TouchableOpacity onPress={()=> goToImage(item)}>
            <View style={styles.cell}>
                <Image  style={styles.image} source={item.location}/>
            </View>
        </TouchableOpacity>   
    )

    return(
        <SafeAreaView style={styles.grid}>
            <FlatList 
                contentContainerStyle={styles.grid}
                data={items}
                renderItem={itemRow}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );

}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    grid: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    cell: {
        width: 100,
        height: 100
    },
    row: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: '#DFE5E5',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 10
    },
    image: {
      maxWidth: 120,
      maxHeight: 120
    },
  });
  