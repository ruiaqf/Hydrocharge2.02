import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking} from 'react-native';

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
    backgroundColor: '#235b6f',
    alignItems: 'center',
  },
  logoContainer: {
    paddingTop: 20,
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    width: 350,
    height: 500,
  },
  contactsContainer: {
    flex: 2,
    margin: 20,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    margin: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
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
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});