import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, ImageBackground, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as SQLite from 'expo-sqlite';

export default function Information() {
  const navigation = useNavigation();
  const [savings, setSavings] = useState(0);
  const [monthly, setMonthly] = useState(0);
  const [yearly, setYearly] = useState(0);

  useEffect(() => {
    const db = SQLite.openDatabase('db.db');

    db.transaction((tx) => {
      tx.executeSql('SELECT monthly FROM savings', [], (_, { rows: { _array } }) => {
        setSavings(_array[0].Savings);
      });
    });
    db.transaction((tx) => {
      tx.executeSql('SELECT monthly FROM savings', [], (_, { rows: { _array } }) => {
        setMonthly(_array[0].Monthly);
      });
    }
    );
    db.transaction((tx) => {
      tx.executeSql('SELECT yearly FROM savings', [], (_, { rows: { _array } }) => {
        setYearly(_array[0].Yearly);
      });
    }
    );
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.logoContainer}>
          <Image 
            style={styles.logo}
            source={require('./assets/HYDRO2.png')}
            resizeMode='contain'
          />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>Obrigado por escolher a HydroCharge!</Text>
          <Text style={styles.text}>
            Esta aplicação foi criada para fornecer informações sobre os gastos e aproveitamento que o seu HydroCharge terá.
            Aqui, encontrará detalhes sobre o uso da água para ter uma melhor noção dos gastos e uma gestão mais cuidada, os benefícios da energia hidrelétrica e muito mais.
          </Text>
          <Text style={styles.text}>Esperamos que encontre as informações aqui encontradas úteis e informativas. Se tiver alguma dúvida ou comentário, não hesite em nos contactar.</Text>
          <Button 
            title="Contacte-nos" 
            onPress={() => navigation.navigate('Contacts')}
          />
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.title}>Alguns sítios onde encontra o HydroCharge</Text>
          <View style={styles.mapContainer}>
            <ImageBackground 
              source={require('./assets/map.png')} 
              style={styles.map}
              resizeMode="contain"
            >
              <View style={[styles.dot, { top: 100, left: 200 }]}></View>
              <View style={[styles.dot, { top: 20, left: 150 }]}></View>
              <View style={[styles.dot, { top: 50, left: 160 }]}></View>
              <View style={[styles.dot, { top: 200, left: 160 }]}></View>
              <View style={[styles.dot, { top: 250, left: 148 }]}></View>
              <View style={[styles.dot, { top: 280, left: 160 }]}></View>
              <View style={[styles.dot, { top: 280, left: 200 }]}></View>
              <View style={[styles.dot, { top: 190, left: 120 }]}></View>
              <View style={[styles.dot, { top: 190, left: 130 }]}></View>
              {/* Add more dots as needed */}
            </ImageBackground>
          </View>
        </View>
        <View style={styles.infoContainer}>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Água Poupada</Text>
        <Text style={styles.cardValue}>{savings} litros</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Energia Poupada</Text>
        <Text style={styles.cardValue}>{monthly} kWh</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>CO2 Poupado</Text>
        <Text style={styles.cardValue}>{yearly} toneladas</Text>
      </View>
    </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#235b6f',
    alignItems: 'center',
    padding: 10,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: '100%',
    height: 200,
  },
  infoContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#235b6f',
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    color: '#235b6f',
    marginBottom: 10,
  },
  mapContainer: {
    width: '100%',
    height: 300,
    marginBottom: 20,
  },
  map: {
    width: '100%',
    height: '100%',
    position: 'relative', // This allows the dots to be positioned absolutely
  },
  dot: {
    position: 'absolute',
    width: 10,
    height: 10,
    backgroundColor: 'red',
    borderRadius: 5,
  },
  card: {
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 20,
    marginBottom: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardValue: {
    fontSize: 16,
  },
});