import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Tela1 = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.title}>U N I P A R</Text>
    <Button color="green" title="A V A N Ç A R" onPress={() => navigation.navigate('Tela2')} />
  </View>
);

const Tela2 = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={(text) => setNome(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Sobrenome"
        value={sobrenome}
        onChangeText={(text) => setSobrenome(text)}
      />
      <View style={styles.buttonContainer}>
        <Button
          title="AVANÇAR"
          color="green"
          onPress={() => navigation.navigate('Tela3', { nome, sobrenome })}
        />
        <Button title="VOLTAR" color="red" onPress={() => navigation.goBack()}  />
      </View>
    </View>
  );
};

const Tela3 = ({ navigation, route }) => {
  const [cpf, setCPF] = useState('');
  const [rg, setRG] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="CPF"
        value={cpf}
        onChangeText={(text) => setCPF(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="RG"
        value={rg}
        onChangeText={(text) => setRG(text)}
      />
      <View style={styles.buttonContainer}>
        <Button
          title="AVANÇAR"
          color="green"
          onPress={() =>
            navigation.navigate('Tela4', {
              nome: route.params.nome,
              sobrenome: route.params.sobrenome,
              cpf,
              rg,
            })
          }
        />
        <Button title="VOLTAR" color="red" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
};

const Tela4 = ({ route, navigation }) => (
  <View style={styles.container}>
    <Text style={[styles.textFinal, { fontSize: 20 }]}>Olá, {route.params.nome} {route.params.sobrenome}</Text>
    <Text style={[styles.textFinal, { fontSize: 30 }]}>CPF: </Text>
    <Text style={[styles.textFinal, { fontSize: 30 }]}>{route.params.cpf}</Text>
    <Text style={[styles.textFinal, { fontSize: 30 }]}>RG: {route.params.rg}</Text>
    <Text style={[styles.textFinal, { fontSize: 30 }]}>{route.params.rg}</Text>
    <View style={styles.buttonContainer}>
      <Button title="VOLTAR" color="red" onPress={() => navigation.goBack()} />
      
    </View>
  </View>
  
);

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Tela1">
      <Stack.Screen name="Tela1" component={Tela1} />
      <Stack.Screen name="Tela2" component={Tela2} />
      <Stack.Screen name="Tela3" component={Tela3} />
      <Stack.Screen name="Tela4" component={Tela4} />
    </Stack.Navigator>
  </NavigationContainer>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
    width: '100%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 200,
    
  },
  ColorButonAvançar:{

    
  }
});

export default App;
