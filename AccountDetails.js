import { View, Text, StyleSheet, Image, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react';
import { getUserEmail } from './db.js';

let date = new Date();
let formattedDate = date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear();

export default function AccountDetails() {
  const [email, setEmail] = useState('');
  const [user, setUser] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  useEffect(() => {
    getUserEmail(1, setEmail);
    AsyncStorage.getItem('user').then(value => setUser(value || ''));
    AsyncStorage.getItem('phone').then(value => setPhone(value || ''));
    AsyncStorage.getItem('address').then(value => setAddress(value || ''));
  }, []);
  
  const accountDetails = {
    Utilizador: user,
    Email: email,
    Telefone: phone,
    Morada: address,
    Conta: 'Premium',
    Subscrição: 'Ativa',
    Criação: formattedDate,
    Idioma: 'Português',
  };

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
      {Object.entries(accountDetails).map(([key, value], index) => {
  if (key === 'Utilizador' || key === 'Telefone' || key === 'Morada') {
    return (
      <View key={index} style={styles.inputContainer}>
        <Text style={styles.text}>{key}:</Text>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={text => {
            if (key === 'Utilizador') {
              setUser(text);
              AsyncStorage.setItem('user', text);
            } else if (key === 'Telefone') {
              setPhone(text);
              AsyncStorage.setItem('phone', text);
            } else if (key === 'Morada') {
              setAddress(text);
              AsyncStorage.setItem('address', text);
            }
          }}
        />
      </View>
    );
  } else {
    return <Text key={index} style={styles.text}>{`${key}: ${value}`}</Text>;
  }
})}
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
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 18,
    color: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
  },
});