import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Alert } from 'react-native';
import TextInputBox from '../../components/TextInput/TextInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import FuncaoBhaskara from '../../actions/FuncaoBhaskara';

function BhaskaraScreen() {
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [c, setC] = useState('');
  const [resultado, setResultado] = useState(null);

  const handleCalculoBhaskara = () => {
    const bhaskaraResultado = FuncaoBhaskara.CalculoBhaskara(a, b, c);
    if (bhaskaraResultado) {
      setResultado(bhaskaraResultado);
      alert( `x1 = ${bhaskaraResultado.x1}, x2 = ${bhaskaraResultado.x2}`);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>Cálculo de Bhaskara</Text>

      <TextInputBox
        value={a}
        onChangeText={setA}
        placeholder="Digite o valor de a"
        keyboardType="numeric"
      />
      
      <TextInputBox
        value={b}
        onChangeText={setB}
        placeholder="Digite o valor de b"
        keyboardType="numeric"
      />
      
      <TextInputBox
        value={c}
        onChangeText={setC}
        placeholder="Digite o valor de c"
        keyboardType="numeric"
      />
      
      <CustomButton
        title="Calcular"
        onPress={handleCalculoBhaskara}
        style={styles.button}
      />

      {resultado && (
        <View style={styles.resultado}>
          <Text>Resultado:</Text>
          <Text>x1 = {resultado.x1}</Text>
          <Text>x2 = {resultado.x2}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    marginTop: 20,
  },
  resultado: {
    marginTop: 20,
    alignItems: 'center',
  },
});

export default BhaskaraScreen;
