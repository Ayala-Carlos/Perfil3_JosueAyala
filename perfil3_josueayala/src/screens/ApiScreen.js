import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { useFetchCharacters } from '../hooks/useFetchCharacters';
import { CustomCard } from '../components/CustomCard';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { CustomButton } from '../components/CustomButton';
 
export default function ApiScreen() {
  const { data, loading, error, refetch } = useFetchCharacters();
 
  if (loading) {
    return <LoadingSpinner message="Cargando catálogo desde la API..." />;
  }
 
  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>{error}</Text>
        <CustomButton title="Reintentar" onPress={refetch} variant="secondary" />
      </View>
    );
  }
 
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CustomCard
            title={item.name}
            image={item.image}
            status={item.status}
            species={item.species}
            origin={item.origin?.name}
          />
        )}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F1DE',
  },
  listContainer: {
    padding: 16,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#F4F1DE',
  },
  errorText: {
    fontSize: 16,
    color: '#E63946',
    textAlign: 'center',
    marginBottom: 16,
  },
});
 