import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function DeletedAlertsPage({ route }) {
  const { deletedAlerts } = route.params;
  return (
    <ScrollView style={styles.background}>
      <View>
        <Text style={{ ...styles.centeredText, backgroundColor: "#ff4545" }}>Alertas Eliminados</Text>
        {deletedAlerts && deletedAlerts.map((alert, index) => (
          <View key={alert.id} style={[styles.row, { backgroundColor: "#235b6f" }]}>
            <Text style={[styles.cell, { color: getAlertColor(alert.severity) }]}>
              <Text style={styles.title}>Problema:</Text> {String(alert.problem)}
            </Text>
            <Text style={styles.cell}><Text style={styles.title}>Descrição:</Text> {String(alert.description)}</Text>
            <Text style={styles.cell}><Text style={styles.title}>Estado:</Text> {String(alert.status)}</Text>
            <Text style={styles.cell}><Text style={styles.title}>Data:</Text> {String(alert.date)}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

function getAlertColor(severity) {
  switch (severity) {
    case 'Alto':
      return 'red';
    case 'Médio':
      return 'orange';
    case 'Baixo':
      return '#30F31E';
    default:
      return 'black';
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#5e6268',
  },
  centeredText: {
    fontSize: 20, // Increase the font size
    color: '#fff', // Change the text color
    textAlign: 'center', // Center the text
    padding: 10, // Add some padding
    margin: 10, // Add some margin
    marginTop: 50, // Add some top margin
    borderRadius: 10, // Add rounded borders
    borderWidth: 1, // Add border
    borderColor: '#47c4b4', // Set border color
    backgroundColor: '#47c4b4', // Set background color
  },
  row: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    backgroundColor: '#f8f8f8',
  },
  cell: {
    fontSize: 16,
    color: '#fff',
  },
  title: {
    fontWeight: 'bold',
  },
});