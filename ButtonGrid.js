import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const ButtonGrid = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('./assets/HYDRO2.png')} // Replace with the path to your logo file
      />
      <View style={styles.row}>
        <LinearGradient
          // Button Linear Gradient
          colors={['#7ed957', '#0097b2']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.button}>
          <TouchableOpacity onPress={() => navigation.navigate('Statistics')}>
            <Image source={require('./assets/bar-chart.png')} style={styles.buttonImage} />
            <Text style={styles.buttonText}>Estatísticas</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient
          // Button Linear Gradient
          colors={['#7ed957', '#0097b2']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.button}>
          <TouchableOpacity onPress={() => navigation.navigate('AccountDetails')}>
            <Image source={require('./assets/user.png')} style={styles.buttonImage} />
            <Text style={styles.buttonText}>Detalhes da Conta</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
      <View style={styles.row}>
        <LinearGradient
          // Button Linear Gradient
          colors={['#7ed957', '#0097b2']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.button}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Image source={require('./assets/data-management.png')} style={styles.buttonImage} />
            <Text style={styles.buttonText}>Dados em Tempo Real</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient
          // Button Linear Gradient
          colors={['#7ed957', '#0097b2']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.button}>
          <TouchableOpacity onPress={() => navigation.navigate('Alerts')}>
            <Image source={require('./assets/warning-sign.png')} style={styles.buttonImage} />
            <Text style={styles.buttonText}>Alertas</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
      <View style={styles.row}>
        <LinearGradient
          // Button Linear Gradient
          colors={['#7ed957', '#0097b2']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.button}>
          <TouchableOpacity onPress={() => navigation.navigate('Information')}>
            <Image source={require('./assets/info.png')} style={styles.buttonImage} />
            <Text style={styles.buttonText}>Informações</Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient
          // Button Linear Gradient
          colors={['#7ed957', '#0097b2']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.button}>
          <TouchableOpacity onPress={() => navigation.navigate('Contacts')}>
            <Image source={require('./assets/phone.png')} style={styles.buttonImage} />
            <Text style={styles.buttonText}>Contactos</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 80,
    paddingBottom: 50,
    backgroundColor: '#5e6268',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    flex: 1,
    backgroundColor: '#7ed957',
    padding: 15,
    margin: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.8, // Add opacity
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
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  buttonImage: {
    width: 130,
    height: 130,
    marginBottom: 10,
  },
  logo: {
    width: 300,
    height: 100,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  signOutContainer: {
    position: 'absolute',
    right: 10,
    bottom: 10,
  },
  signOutText: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 10,
  },
});

export default ButtonGrid;
