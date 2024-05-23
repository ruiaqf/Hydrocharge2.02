import React, { useState } from 'react';
import { View, Image, TextInput, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import db from './db';

export default function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM users WHERE email = ? AND password = ?',
        [email, password],
        (_, { rows: { _array } }) => {
          if (_array.length > 0) {
            Alert.alert('Successo', 'Login bem sucedido');
            navigation.navigate('Home');
          } else {
            Alert.alert('Erro', 'Credenciais inválidas');
          }
        },
        (_, error) => Alert.alert('Erro na base de dados', 'Ocorreu um erro')
      );
    });
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('./assets/HYDRO2.png')} // Replace with the path to your logo file
        resizeMode='center' // This will ensure the entire logo is visible
      />
      <TextInput placeholder="Email" style={styles.input} onChangeText={setEmail} value={email} />
      <TextInput placeholder="Palavra-Passe" style={styles.input} secureTextEntry={true} onChangeText={setPassword} value={password} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Register')}>
          <Text style={styles.buttonText}>Registar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={login}>
          <Text style={styles.buttonText}>Seguinte</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 30,
    backgroundColor: '#235b6f',
  },
  logo: {
    width: 300, // Set the width of the logo
    height: 100, // Set the height of the logo
    marginBottom: 40, // Add some margin at the bottom of the logo
    alignSelf: 'center', // Center the logo
  },
  input: {
    height: 40,
    width: '90%', // Reduce the width of the input boxes to 90% of the container's width
    borderColor: 'gray',
    backgroundColor: 'white', // Set the background color of the input boxes to white
    borderWidth: 1,
    borderRadius: 30,
    marginBottom: 12,
    paddingLeft: 8,
    alignSelf: 'center', // Center the input boxes
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#44c767',
    padding: 5,
    margin: 20,
    width: '30%', // adjust this as needed
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});