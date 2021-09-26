import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import login from "./components/login/login"

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Give It For Free</Text>
      <StatusBar style="auto" />
      <login />
    </View>
    

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
