import React, { useState, useEffect } from 'react';
import { View, Text, Dimensions, StyleSheet, Button, ScrollView, Animated } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Statistics() {
  const [data, setData] = useState([0]);
  const [isUpdating, setIsUpdating] = useState(true);
  const [alerts, setAlerts] = useState([
    { id: '1', problem: 'Falha na Turbina', description: 'Uma das turbinas parou de funcionar.', status: 'Não resolvido', date: '2023-01-01', severity: 'Alto' },
    { id: '2', problem: 'Nível de Água Baixo', description: 'O nível de água no reservatório está mais baixo do que o esperado.', status: 'Monitorização', date: '2023-01-02', severity: 'Médio' },
    { id: '3', problem: 'Desconexão da Rede Elétrica', description: 'A rede elétrica foi desconectada inesperadamente.', status: 'Não resolvido', date: '2023-01-03', severity: 'Baixo' },
    { id: '4', problem: 'Sobreaquecimento do Gerador', description: 'Um gerador está a sobreaquecer.', status: 'Resolvido', date: '2023-01-04', severity: 'Alto' },
    { id: '5', problem: 'Fuga na Barragem', description: 'Foi detetada uma fuga na barragem.', status: 'Resolvido', date: '2023-01-05', severity: 'Médio' },
    { id: '6', problem: 'Falha no Transformador', description: 'Um transformador falhou.', status: 'Não resolvido', date: '2023-01-06', severity: 'Baixo' },
    { id: '7', problem: 'Erro no Sistema de Controlo', description: 'Ocorreu um erro no sistema de controle.', status: 'Resolvido', date: '2023-01-07', severity: 'Baixo' },
    { id: '8', problem: 'Flutuação na Produção de Energia', description: 'A produção de energia está a flutuar mais do que o esperado.', status: 'Monitorização', date: '2023-01-08', severity: 'Baixo' },
    // Adicione mais alertas aqui
  ]);
  const [deletedAlerts, setDeletedAlerts] = useState([]);
  const navigation = useNavigation();
  const handleDelete = (id) => {
    const alertToDelete = alerts.find((alert) => alert.id === id);
    setDeletedAlerts([...deletedAlerts, alertToDelete]);
    setAlerts(alerts.filter((alert) => alert.id !== id));
  };


  function renderRightActions(id, progress, dragX) {
    const trans = dragX.interpolate({
      inputRange: [0, 50, 100, 101],
      outputRange: [-20, 0, 0, 1],
    });
    return (
      <Button
        title="Remover"
        color="red"
        onPress={() => handleDelete(id)}
      />
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

  return (

    <ScrollView style={styles.background}>

      <View>

        <Text style={{ ...styles.centeredText, backgroundColor: "#ff4545" }}>Alertas</Text>

        {alerts.map((alert, index) => (
          <Swipeable key={alert.id} renderRightActions={(progress, dragX) => renderRightActions(alert.id, progress, dragX)}>
            <View style={[styles.row, { backgroundColor: "#235b6f" }]}>
              <Text style={[styles.cell, { color: getAlertColor(alert.severity) }]}>
                <Text style={styles.title}>Problema:</Text> {String(alert.problem)}
              </Text>
              <Text style={styles.cell}><Text style={styles.title}>Descrição:</Text> {String(alert.description)}</Text>
              <Text style={styles.cell}><Text style={styles.title}>Estado:</Text> {String(alert.status)}</Text>
              <Text style={styles.cell}><Text style={styles.title}>Data:</Text> {String(alert.date)}</Text>
            </View>
          </Swipeable>
        ))}
        <Button title="Ir para alertas eliminados" onPress={() => navigation.navigate('DeletedAlerts', { deletedAlerts: deletedAlerts })} />
      </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#5e6268',
  },
  page: {
    width: Dimensions.get('window').width,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    marginTop: 20,
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
  chart: {
    marginVertical: 8,
    borderRadius: 16,
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
  problem: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    color: '#666',
  },
  status: {
    fontSize: 16,
    color: '#333',
  },
  date: {
    fontSize: 14,
    color: '#999',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#47c4b4', // Set a different background color for the header
  },
  headerCell: {
    fontSize: 16,
    fontWeight: 'bold', // Make the header cells bold
    color: '#fff', // Change the text color to white
  },
  cell: {
    fontSize: 16,
    color: '#fff',
  },
  title: {
    fontWeight: 'bold',
  },
});