import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
 
export const CustomButton = ({ title, onPress, variant = 'primary' }) => (
  <TouchableOpacity
    style={[styles.button, variant === 'secondary' ? styles.secondary : styles.primary]}
    onPress={onPress}
    activeOpacity={0.8}
  >
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);
 
const styles = StyleSheet.create({
  button: {
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  primary: {
    backgroundColor: '#2A9D8F',
  },
  secondary: {
    backgroundColor: '#E76F51',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
 