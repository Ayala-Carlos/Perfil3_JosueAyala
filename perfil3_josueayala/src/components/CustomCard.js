import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
 
export const CustomCard = ({ title, image, status, species, origin }) => (
  <View style={styles.card}>
    <Image source={{ uri: image }} style={styles.image} resizeMode="cover" />
    <View style={styles.content}>
      <Text style={styles.title} numberOfLines={1}>{title}</Text>
      <View style={styles.badgeContainer}>
        <View style={[styles.statusDot, { backgroundColor: status === 'Alive' ? '#2A9D8F' : '#E63946' }]} />
        <Text style={styles.subtitle}>{status} - {species}</Text>
      </View>
      {origin && <Text style={styles.detail}>Origen: {origin}</Text>}
    </View>
  </View>
);
 
const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    marginBottom: 16,
    overflow: 'hidden',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },
  image: {
    width: '100%',
    height: 200,
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#264653',
    marginBottom: 6,
  },
  badgeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  statusDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#2A9D8F',
    fontWeight: '600',
  },
  detail: {
    fontSize: 13,
    color: '#6C757D',
  },
});
 