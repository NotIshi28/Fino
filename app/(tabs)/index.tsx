import { Text, View, StyleSheet } from "react-native";
import React, { useState } from 'react';
import { useFonts ,Outfit_400Regular, Outfit_700Bold } from '@expo-google-fonts/outfit';

export default function HomeScreen() {
  let [fontsLoaded] = useFonts({
    Outfit_400Regular,
    Outfit_700Bold
  });

  if (!fontsLoaded) {
    return null;
  }


  return (
    <View
      style={styles.container}
    >
      <Text style={styles.heading}>yo buddy</Text>
      <Text style={styles.text}>Welcome to Greener</Text>
      
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
  },
  heading: {
    fontFamily: "Outfit_700Bold",
    fontSize: 40,
    marginBottom: 50,
    color:'#16e16e',
  },
  text: {
    fontFamily: "Outfit_400Regular",
    fontSize: 20,
    color:'#16e16e',
  },
})