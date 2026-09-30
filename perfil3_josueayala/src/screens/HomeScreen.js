import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { CustomButton } from '../components/CustomButton';
 
export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.cardInfo}>
        <View style={styles.avatarContainer}>
          <Text style={styles.avatarText}>JA</Text>
        </View>
        <Text style={styles.name}>Josué Carlos Ayala Reyes</Text>
        <Text style={styles.role}>Desarrollo de Software</Text>
        
        <View style={styles.divider} />
 
        <View style={styles.infoRow}>
          <Text style={styles.label}>Carnet:</Text>
          <Text style={styles.value}>20240001</Text>
        </View>
 
        <View style={styles.infoRow}>
          <Text style={styles.label}>Sección / Grupo:</Text>
          <Text style={styles.value}>3° Bachillerato - Grupo A</Text>
        </View>
      </View>
 
      <View style={styles.buttonContainer}>
        <CustomButton
          title="Ver Personajes (API)"
          onPress={() => navigation.navigate('ApiScreen')}
        />
      </View>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F1DE',
    padding: 24,
    justifyContent: 'center',
  },
  cardInfo: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
  },
  avatarContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#2A9D8F',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  avatarText: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: 'bold',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#264653',
    textAlign: 'center',
  },
  role: {
    fontSize: 14,
    color: '#2A9D8F',
    fontWeight: '600',
    marginTop: 4,
  },
  divider: {
    height: 1,
    backgroundColor: '#E0E0E0',
    width: '100%',
    marginVertical: 20,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 12,
  },
  label: {
    fontSize: 15,
    color: '#6C757D',
    fontWeight: '500',
  },
  value: {
    fontSize: 15,
    color: '#264653',
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginTop: 28,
  },
});
 