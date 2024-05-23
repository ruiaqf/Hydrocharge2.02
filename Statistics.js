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
        return 'green';
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
  <View style={styles.page}>
    <Text style={styles.centeredText}>Fluxo p/segundo</Text>
    <LineChart
      data={{
        labels: ['10s', '9s', '8s', '7s', '6s', '5s', '4s', '3s', '2s', '1s'],
        datasets: [{ data }],
      }}
      width={Dimensions.get('window').width * 0.9} // 90% of the screen width
      height={Dimensions.get('window').height * 0.3} // 30% of the screen height
      yAxisSuffix="L/s"
      chartConfig={chartConfig}
      bezier
      style={styles.chart}
    />
    <Button title={isUpdating ? 'Parar' : 'Iniciar'} 
    onPress={() => setIsUpdating(!isUpdating)}
    backgroundColor="#47c4b4"
    />
  </View>
  <View style={styles.page}>
    <Text style={styles.centeredText}>Aproveitamento Últimos 6 meses</Text>
    <BarChart
      data={{
        labels: ['Dez','Jan', 'Fev', 'Mar', 'Abr', 'Mai',],
        datasets: [{ data: [120, 110, 125, 150, 180, 170,] }], // Replace with actual data
      }}
      width={Dimensions.get('window').width * 0.9}
      height={Dimensions.get('window').height * 0.3} // 30% of the screen height
      yAxisSuffix="kW"
      chartConfig={chartConfig}
      style={styles.chart}
    />
  </View>
  <View style={styles.page}>
  <Text style={styles.centeredText}>Euros poupados por mês</Text>
  <LineChart
    data={{
      labels: ['Dez','Jan', 'Fev', 'Mar', 'Abr', 'Mai',],
      datasets: [{
        data: [120, 110, 125, 150, 180, 170].map(kw => kw * 0.20), // Convert kW to euros
      }],
    }}
    width={Dimensions.get('window').width * 0.9}
    height={Dimensions.get('window').height * 0.3} // 30% of the screen height
    yAxisSuffix="€"
    chartConfig={chartConfig}
    style={styles.chart}
  />
</View>
<View>
  
<Text style={{...styles.centeredText, backgroundColor: "#ff4545"}}>Alertas</Text>

{alerts.map(alert => (
    <View key={alert.id} style={[styles.row, {backgroundColor: getAlertColor(alert.severity)}]}>
      <Text style={styles.cell}><Text style={styles.title}>Problema:</Text> {alert.problem}</Text>
      <Text style={styles.cell}><Text style={styles.title}>Descrição:</Text> {alert.description}</Text>
      <Text style={styles.cell}><Text style={styles.title}>Estado:</Text> {alert.status}</Text>
      <Text style={styles.cell}><Text style={styles.title}>Data:</Text> {alert.date}</Text>
    </View>
  ))}
</View>
</ScrollView>
  
  );
}

const chartConfig = {
  backgroundColor: '#235b6f',
  backgroundGradientFrom: '#235b6f',
  backgroundGradientTo: '#235b6f',
  decimalPlaces: 0.1, // number of decimal places
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  propsForDots: { r: '6', strokeWidth: '2', stroke: '#1E2923' },
};

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
});