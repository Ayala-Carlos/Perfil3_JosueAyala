import React from 'react';
import { View, ActivityIndicator, Text, StyleSheet } from 'react-native';
 
export const LoadingSpinner = ({ message = 'Cargando datos...' }) => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color="#2A9D8F" />
    <Text style={styles.text}>{message}</Text>
  </View>
);
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4F1DE',
  },
  text: {
    marginTop: 12,
    fontSize: 16,
    color: '#264653',
    fontWeight: '500',
  },
});
 