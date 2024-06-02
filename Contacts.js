import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Contacts() {
  return (
    <View style={styles.background}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('./assets/HYDRO2.png')}
          resizeMode='contain' // This will ensure the entire logo is visible
        />
      </View>
      <View style={styles.contactsContainer}>
        <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('geo:0,0?q=Av. Heliodoro Salgado 3, 2710-569 Sintra')}>
          <Text style={styles.buttonText}>Morada: Av. Heliodoro Salgado 3, 2710-569 Sintra</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('tel:+351910123456')}>
          <Text style={styles.buttonText}>Telefone: +351 910 123 456</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('mailto:info@hydrocharge.pt')}>
          <Text style={styles.buttonText}>Email: info@hydrocharge.pt</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('http://www.hydrocharge.pt')}>
          <Text style={styles.buttonText}>Website: www.hydrocharge.pt</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#5e6268',
    alignItems: 'center',
  },
  logoContainer: {
    paddingTop: 50,
    flex: 0,
    justifyContent: 'center',
  },
  logo: {
    width: 350,
  },
  contactsContainer: {
    flex: 2,
  },
  button: {
    flex: 1,
    backgroundColor: '#DCEADB',
    padding: 20,
    margin: 15,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 1, // Add opacity
    // Add shadow effects
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: '#24596C',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
});