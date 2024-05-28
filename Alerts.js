import React, { useState, useEffect } from 'react';
import { View, Text, Dimensions, StyleSheet, Button, ScrollView } from 'react-native';
import { LineChart, BarChart } from 'react-native-chart-kit';

export default function Statistics() {
  const [data, setData] = useState([0]);
  const [isUpdating, setIsUpdating] = useState(true);
  const alerts = [
    {id: '1', problem: 'Falha na Turbina', description: 'Uma das turbinas parou de funcionar.', status: 'Não resolvido', date: '2023-01-01', severity: 'Alto'},
    {id: '2', problem: 'Nível de Água Baixo', description: 'O nível de água no reservatório está mais baixo do que o esperado.', status: 'Monitorização', date: '2023-01-02', severity: 'Médio'},
    {id: '3', problem: 'Desconexão da Rede Elétrica', description: 'A rede elétrica foi desconectada inesperadamente.', status: 'Não resolvido', date: '2023-01-03', severity: 'Baixo'},
    {id: '4', problem: 'Sobreaquecimento do Gerador', description: 'Um gerador está a sobreaquecer.', status: 'Resolvido', date: '2023-01-04', severity: 'Alto'},
    {id: '5', problem: 'Fuga na Barragem', description: 'Foi detetada uma fuga na barragem.', status: 'Resolvido', date: '2023-01-05',  severity: 'Médio'},
    {id: '6', problem: 'Falha no Transformador', description: 'Um transformador falhou.', status: 'Não resolvido', date: '2023-01-06', severity: 'Baixo'},
    {id: '7', problem: 'Erro no Sistema de Controlo', description: 'Ocorreu um erro no sistema de controle.', status: 'Resolvido', date: '2023-01-07', severity: 'Baixo'},
    {id: '8', problem: 'Flutuação na Produção de Energia', description: 'A produção de energia está a flutuar mais do que o esperado.', status: 'Monitorização', date: '2023-01-08', severity: 'Baixo'},
    // Adicione mais alertas aqui

  ];

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
  
  useEffect(() => {
    if (isUpdating) {
      const interval = setInterval(() => {
        setData(prevData => {
          const newData = [...prevData];
          newData.push(Math.random() * 20 + 45); // Generates a random number between 45 and 65s
          if (newData.length > 10) newData.shift(); // Keep only the last 10 data points
          return newData;
        });
      }, 1000); // Update the data every second

      return () => clearInterval(interval);
    }
  }, [isUpdating]);

  return (
    
<ScrollView style={styles.background}>

<View>
  
<Text style={{...styles.centeredText, backgroundColor: "#ff4545"}}>Alertas</Text>

{alerts.map(alert => (
  <View key={alert.id} style={[styles.row, {backgroundColor: "#235b6f"}]}>
  <Text style={[styles.cell, {color: getAlertColor(alert.severity)}]}>
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


const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#235b6f',
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