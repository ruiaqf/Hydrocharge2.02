import React, { useState, useEffect } from 'react';
import { View, Text, Dimensions, StyleSheet, Button, ScrollView, TouchableOpacity } from 'react-native';
import { LineChart, BarChart } from 'react-native-chart-kit';
import { LinearGradient } from 'expo-linear-gradient';

export default function Statistics() {
  const [data, setData] = useState([0]);
  const [isUpdating, setIsUpdating] = useState(true);


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
        <TouchableOpacity
          onPress={() => setIsUpdating(!isUpdating)}
          style={{ backgroundColor: '#7ed957', padding: 10, borderRadius: 5 }}>
          <Text>{isUpdating ? 'Parar' : 'Iniciar'}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.page}>
        <Text style={styles.centeredText}>Aproveitamento Últimos 6 meses</Text>
        <BarChart
          data={{
            labels: ['Dez', 'Jan', 'Fev', 'Mar', 'Abr', 'Mai',],
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
            labels: ['Dez', 'Jan', 'Fev', 'Mar', 'Abr', 'Mai',],
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

      </View>
    </ScrollView>

  );
}

const chartConfig = {
  backgroundColor: '#5e6268',
  backgroundGradientFrom: '#5e6268',
  backgroundGradientTo: '#5e6268',
  decimalPlaces: 0.1, // number of decimal places
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  propsForDots: { r: '6', strokeWidth: '2', stroke: '#1E2923' },
};

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
    borderRadius: 10, // Add rounded borders
    borderWidth: 1, // Add border
    borderColor: '#47c4b4', // Set border color
    backgroundColor: '#5e6268', // Set background color
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