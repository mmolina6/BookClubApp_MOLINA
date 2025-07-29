import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      {/* Edit Button */}
      <TouchableOpacity style={styles.editButton} onPress={() => console.log('Edit pressed')}>
        <Text style={styles.editText}>Edit</Text>
      </TouchableOpacity>

      {/* Profile Image */}
      <Image
        source={require('../../assets/images/et_prof.png')}
        style={styles.avatar}
      />

      <View style={styles.infoSection}>
        <InfoRow label="Name" value="Alejandra Molina" />
        <InfoRow label="Favorite Genre" value="Romance" />
        <InfoRow label="E-Mail" value="ale.molina.funes@gmail.com" />
        <InfoRow label="Book Club" value="Reading Girlies" />
        <InfoRow label="Last Book Read" value="The Will of The Many - James Islington" />
      </View>
    </View>
  );
}

type InfoRowProps = {
  label: string;
  value: string;
};

const InfoRow = ({ label, value }: InfoRowProps) => (
  <View style={styles.infoBox}>
    <Text style={styles.label}>{label}</Text>
    <Text style={styles.value}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  editButton: {
    alignSelf: 'flex-end',
    padding: 5,
    marginBottom: 10,
  },
  editText: {
    fontSize: 16,
    color: '#007AFF',
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    alignSelf: 'center',
    marginVertical: 20,
  },
  infoSection: {
    marginTop: 10,
  },
  infoBox: {
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    elevation: 2, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 4,
    fontSize: 14,
    color: '#555',
  },
  value: {
    fontSize: 16,
    color: '#111',
  },
});