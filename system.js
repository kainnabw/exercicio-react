import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ArmazenarDados = () => {
  const [dados, setDados] = useState('faça login'); 
  const [input, setInput] = useState(''); 

  const salvarDados = async () => {
    try {
      
      await AsyncStorage.setItem('usuario', input);
      setDados(input); 
      Alert.alert('Sucesso', 'Usuário salvo com sucesso!');
    } catch (erro) {
      console.error('Erro ao salvar o usuário:', erro);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>login</Text>

      <Text style={styles.texto}>{dados}</Text>

      <TextInput
        style={styles.input}
        placeholder="Usuário"
        value={input} 
        onChangeText={setInput} 
      />
      <TextInput
        secureTextEntry={true}
        style={styles.input}
        placeholder="Senha"
      />
      <Button title="Confirmar" onPress={salvarDados} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    borderRadius: 5,
  },
  texto: {
    marginTop: 20,
    fontSize: 18,
    color: 'green',
  },
  titulo: {
    fontSize: 30,
  },
});

export default ArmazenarDados;
