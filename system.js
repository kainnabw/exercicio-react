import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ArmazenarDados = () => {
  const [dados, setDados] = useState('faça login');
  const [senha, setSenha] = useState('');

  const salvarDados = async () => {
    try {
      await AsyncStorage.setItem('usuario', dados);
      setDados(dados);
      Alert.alert('Sucesso', 'Usuário salvo com sucesso!');
    } catch (erro) {
      console.error('Erro ao salvar o usuário:', erro);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>{dados}</Text>
      <TextInput
        style={styles.input}
        placeholder="Usuário"
        value={dados}
        onChangeText={setDados}
      />
      <TextInput
        secureTextEntry={true}
        style={styles.input}
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
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
    padding: 20,
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
  },
});

export default ArmazenarDados;
