import React, { useState } from 'react';
import { View, Image, TextInput, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = getAuth();

  const loginUser = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      // Navigate to Home page
      navigation.navigate('ButtonGrid');
    } catch (error) {
      if (error.code === 'auth/wrong-password' || error.code === 'auth/user-not-found' || error.code === 'auth/invalid-email') {
        Alert.alert('Erro', 'Email e/ou Password errada ou não existente.');
      } else {
        console.error('Error logging user:', error.toString());
        throw error;
      }
    }
  };

  const login = async () => {
    loginUser(email, password)
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('./assets/HYDRO2.png')}
        resizeMode='contain'
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
    padding: 20,
    backgroundColor: '#235b6f',
  },
  logo: {
    width: 350, // Set the width of the logo
    height: 150, // Set the height of the logo
    marginBottom: 40, // Add some margin at the bottom of the logo
    alignSelf: 'center', // Center the logo
  },
  input: {
    height: 50,
    width: '100%', // Reduce the width of the input boxes to 90% of the container's width
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
    margin: 10,
    width: '40%', // adjust this as needed
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});