import React from 'react';
import { View, ScrollView, Text, StyleSheet, Dimensions } from 'react-native';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');
export default function App(){
  return (
    <ScrollView style={styles.container}>
      <View style={{flex:1, height: screenHeight}}>
         <View style={{...StyleSheet.absoluteFill, backgroundColor: '#000'}}>

         </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create( {
  container: {
    flex: 1,
  },
});