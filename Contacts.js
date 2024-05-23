import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking} from 'react-native';

export default function Contacts() {
  return (
    <View style={styles.background}>
      <View style={styles.logoContainer}>
        <Image 
          style={styles.logo}
          source={require('./assets/HYDRO2.png')}
          resizeMode='center' // This will ensure the entire logo is visible
        />
      </View>
      <View style={styles.contactsContainer}>
      <TouchableOpacity onPress={() => Linking.openURL('geo:0,0?q=Av. Heliodoro Salgado 3, 2710-569 Sintra')}>
          <Text style={styles.linkText}>Morada: Av. Heliodoro Salgado 3, 2710-569 Sintra</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('tel:+351910123456')}>
          <Text style={styles.linkText}>Telefone: +351 910 123 456</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('mailto:info@hydrocharge.pt')}>
          <Text style={styles.linkText}>Email: info@hydrocharge.pt</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('http://www.hydrocharge.pt')}>
          <Text style={styles.linkText}>Website: www.hydrocharge.pt</Text>
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
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    width: 500,
    height: 500,
  },
  contactsContainer: {
    flex: 2,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 10,
  },
  linkText: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 10,
    textDecorationLine: 'underline',
  },
});