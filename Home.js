import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Animated, Button } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


export default function App({ navigation }) {
  //const energySpent = 10; // Replace this with the actual value
  const [energySpent, setEnergySpent] = useState(null); // Initialize the state with a default value
  const [selectedBox, setSelectedBox] = useState(null);
  const [menuVisible, setMenuVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [menuAnimation] = useState(new Animated.Value(0)); // initial hidden state
  const [showText, toggleText] = useState(false);
  const [unit, setUnit] = useState('');

  const toggleMenu = () => {
    if (isAnimating) return; // prevent starting a new animation while one is in progress
  
    setIsAnimating(true);
    Animated.timing(menuAnimation, {
      toValue: menuVisible ? -500 : 0, // show or hide
      duration: 0, // duration of animation
      useNativeDriver: false,
    }).start(() => {
      setMenuVisible(!menuVisible);
      setIsAnimating(false);
    });
  };
  const Separator = () => (
    <View style={styles.separator} />
  );
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('./assets/HYDRO2.png')} // Replace with the path to your logo file
        resizeMode='center' // This will ensure the entire logo is visible
      />
      {showText && <Text style={styles.whiteText}>Média por hora</Text>}
      <View style={styles.square}>
        <Text style={styles.text}>{energySpent} {unit}</Text>
      </View>
      <View style={styles.menuContainer}>
      <TouchableOpacity activeOpacity={0.5} style={styles.menuItem} onPress={() => {setEnergySpent(20); setSelectedBox('Energia gasta');toggleText(false);setUnit('kW');}}>
        {selectedBox === 'Energia gasta' && <MaterialIcons name="arrow-drop-down" size={50} color="#80a729" />}        
        <Image source={require('./assets/energia_gasta3.png')} style={styles.boxImage} />
        <Text style={styles.smallText}>Energia gasta</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.5} style={styles.menuItem} onPress={() => {setEnergySpent(30); setSelectedBox('Energia em Stock');toggleText(false);setUnit('kW');}}>
        {selectedBox === 'Energia em Stock' && <MaterialIcons name="arrow-drop-down" size={50} color="#80a729" />}        
        <Image source={require('./assets/energia_stock.png')} style={styles.boxImage} />
        <Text style={styles.smallText}>Energia em Stock</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.5} style={styles.menuItem} onPress={() => {setEnergySpent(40); setSelectedBox('Fluxo');toggleText(true);setUnit('L');}}>
        {selectedBox === 'Fluxo' && <MaterialIcons name="arrow-drop-down" size={50} color="#80a729" />}
        <Image source={require('./assets/fluxo.png')} style={styles.boxImage} />
        <Text style= {styles.smallText}> Fluxo </Text>
      </TouchableOpacity>
    </View>
    {menuVisible && (
      <Animated.View style={[styles.menu, { bottom: menuAnimation }]}>
        <View style={styles.buttonContainer}>
        <Button
        title="Informações"
        color="#44c767"
        onPress={() => navigation.navigate('Information')}
        />
        </View>
        <View style={styles.buttonContainer}>
        <Button
        title="Estatísticas"
        color="#44c767"
        onPress={() => navigation.navigate('Statistics')}
        />
        </View>
        <View style={styles.buttonContainer}>
        <Button
        title="Detalhes da Conta"
        color="#44c767"
        onPress={() => navigation.navigate('AccountDetails')}
        />
        </View>
        <View style={styles.buttonContainer}>
        <Button
        title="Contactos"
        color="#44c767"
        onPress={() => navigation.navigate('Contacts')}
        />
        </View>
        <View style={styles.buttonContainer}>
        <Button
        title="Terminar Sessão"
        color="#44c767"
        onPress={() => navigation.navigate('Login')}
        />
        </View>
      </Animated.View>
    )}
  <TouchableOpacity style={[styles.button, styles.menuBar]} onPress={toggleMenu}>
  <Image source={require('./assets/Hamburger_icon.png')} style={styles.menuIcon} />
  </TouchableOpacity>
</View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    margin: 5, // Adjust this to increase/decrease the space between buttons
    borderRadius: 10, // Adjust this to increase/decrease the button edge
    overflow: 'hidden', // This is needed to apply the borderRadius to the Button
    padding: 2,
  },
  smallText: {
    color: 'white',
  },
  menuIcon: {
    width: 30,
    height: 30,
  },
  menuBar: {
    backgroundColor: '#235b6f',
  },
  container: {
    flex: 1,
    backgroundColor: '#235b6f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    position: 'absolute',
    top: 0,
    width: 400,
    height: 100,
    marginTop: 50,
  },
  square: {
    width: 270,
    height: 270,
    borderColor: 'white',
    borderWidth: 5,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  text: {
    fontSize: 40,
    color: 'white',
  },
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '68%',
  },
  menuItem: {
    alignItems: 'center',
  },
  smallSquare: {
    width: 70,
    height: 70,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 5,
  },
  button: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 30,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
    margin: 10,
  },
  menu: {
    position: 'absolute',
    bottom: 0, // adjust this as needed
    marginBottom: 20, // adjust this as needed
    width: '100%',
    height: '38%', // adjust this as needed
    backgroundColor: '#235b6f',
    padding: 20, // adjust this as needed
  },
  menuText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 25,
    fontWeight: '100',
    borderRadius: 10, // Add this line
    padding: 5, // Add padding to make the borderRadius visible
    marginBottom: 10, // Add some margin at the bottom of each menu item
    backgroundColor: '#44929a', // Add a background color to make the button visible
  },
  whiteText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'normal',
    marginBottom: 10,
  },
  separator: {
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    width: '102%',
    left: -5,
    height: 1, // Add this line
    marginVertical: 8,
  },
});