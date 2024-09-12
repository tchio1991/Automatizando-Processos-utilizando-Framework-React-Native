import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import axios from 'axios';

const App = () => {
  const executarAutomacao = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/execute-automation');
      alert(response.data.message);
    } catch (error) {
      alert("Erro ao executar automação: " + error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Automação Petshop</Text>
      <Button title="Executar Automação" onPress={executarAutomacao} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default App;
