import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Image, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


export default function Register({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const auth = getAuth();

  const registerUser = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      // Navigate to Home page
      navigation.navigate('ButtonGrid');
    } catch (error) {
      console.error('Error registering user:', error);
      throw error;
    }
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('./assets/HYDRO2.png')} // Replace with the path to your logo
        resizeMode='center' // This will ensure the entire logo is visible
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Palavra-passe"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirmar Palavra-passe" // New input for password confirmation
        secureTextEntry
        onChangeText={setConfirmPassword}
        value={confirmPassword}
      />
      <TouchableOpacity style={styles.button} onPress={() => registerUser(email, password)}>
  <Text style={styles.buttonText}>Registar</Text>
</TouchableOpacity>
      <TouchableOpacity
        style={styles.infoButton}
        onPress={() =>
          Alert.alert(
            "Information",
            "O email que usa para se registar deve ser o mesmo que usou na compra do HydroCharge."
          )
        }
      >
        <Ionicons name="information-circle-outline" size={24} color="black" />
      </TouchableOpacity>
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
    logo: {
      width: 500, // Set the width of the logo
      height: 200, // Set the height of the logo
      marginBottom: 0, // Add some margin at the bottom of the logo
      alignSelf: 'center', // Center the logo
    },
    infoButton: {
      width: 50,
      height: 50,
      borderRadius: 25,
      backgroundColor: '#44c767',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute', // Posiciona o botão no canto inferior direito
      right: 20,
      bottom: 20,
    },
  });