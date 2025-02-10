import { Image, StyleSheet, Platform, Text, View, TextInput, Pressable } from 'react-native';
import { Checkbox } from 'expo-checkbox';
import React, { useState } from 'react';  

export default function HomeScreen() {
  const [isChecked, setChecked] = useState(false);

  return (
    <View style={styles.background}>
      <View style={styles.redCircle2} />
      <View style={styles.redCircle} />
      <View style={styles.redLine} />
      <Text style={styles.title}>
        Osaka <Text style={styles.dev}>Software</Text>
      </Text>
      <View style={styles.body}>
        <Text> Correo </Text>
        <TextInput style={styles.input1}/>
        <Text style={styles.textPass}> Contraseña </Text>
        <TextInput style={styles.input2}/>
        <View style={styles.section}>
          <Checkbox
            style={styles.checkbox}
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? 'red' : undefined}
          />
          <Text style={styles.paragraph}>Recordar Contraseña</Text>
        </View>
        <View style={styles.section}>
          <Pressable style={styles.button} onPress={() => alert('Iniciando Sesion')}>
            <Text style={styles.textButtonLogIn}>Iniciar Sesion</Text>
          </Pressable>
        </View>
        <View style={styles.section}>
          <Pressable style={styles.buttonRegister} onPress={() => alert('Registrando')}>
            <Text style={styles.textButtonRegister}>Registrarme</Text>
          </Pressable>
        </View>
        <View style={styles.section}>
          <Pressable style={styles.buttonForgotPass} onPress={() => alert('Olvidaste tu contraseña')}>
            <Text style={styles.textForgotPass}>¿Olvidaste tu contraseña?</Text>
          </Pressable>
        </View>
        <View style={styles.border}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({   //Archivo css
  title: {
    position: 'absolute',
    top: 90,
    left: 170,
    right: 0,
    textAlign: 'center', // Opcional, para centrar el título horizontalmente
    fontSize: 32,
    zIndex: 10, // Asegura que esté por encima de otros elementos
    paddingTop: 16, // Opcional, para darle margen desde arriba
  },
  input: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    height: 35,
    width: 275,
    alignContent: 'center',
  },
  background: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: '#D9D9D9'
  },
  titleContainer: {
    position: 'relative',
  },
  dev: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  },
  body: {
    marginTop: 20,
    padding: 20,
    fontSize: 25,
    left: 75,
    top: -20,
  },
  redLine: {
    position: "absolute",
    backgroundColor: "red",
    width: 200,
    height: 5,
    borderRadius: 50,
    top: "16%", // Positions it near the middle
    left: -20, // Moves it towards the "Dev" text
    transform: [{ translateX: -10 }, { translateY: -10 }], // Fine-tune positioning
  },
  redCircle: {
    position: "absolute",
    backgroundColor: "red",
    width: 75,
    height: 75,
    borderRadius: 50,
    top: "12%", // Positions it near the middle
    left: "76%", // Moves it towards the "Dev" text
    transform: [{ translateX: -10 }, { translateY: -10 }], // Fine-tune positioning
  },
  redCircle2: {
    position: "absolute",
    backgroundColor: "red",
    width: 300,
    height: 300,
    borderRadius: 150,
    top: 230, // Positions it near the middle
    left: -230, // Moves it towards the "Dev" text
    transform: [{ translateX: -10 }, { translateY: -10 }], // Fine-tune positioning
  },
  input1: {
    top: 10,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    height: 35,
    width: 260,
    alignContent: 'center',
  },
  input2: {
    top: 40,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    height: 35,
    width: 260,
    alignContent: 'center',
  },
  textPass: {
    top: 30,
  },
  checkbox: {
    top: 40,
    left: 10,
  },
  paragraph: {
    top: 40,
    left: 15,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    height: 35,
    width: 200,
    alignContent: 'center',
    justifyContent  : 'center',
    top: 100,
    left: 35,
  },
  textButtonLogIn: {
    color: 'white',
    textAlign: 'center',  
  },
  buttonRegister: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    height: 35,
    width: 200,
    alignContent: 'center',
    justifyContent  : 'center',
    top: 100,
    left: 35,
  },
  textButtonRegister: {
    color: 'red',
    textAlign: 'center',  
  },
  buttonForgotPass: {
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    height: 35,
    width: 200,
    alignContent: 'center',
    justifyContent  : 'center',
    top: 120,
    left: 35,
  },
  textForgotPass: {
    color: 'grey',
    textAlign: 'center',  
  },
  border: {
    backgroundColor: 'red',
    height: 100,
    width: 500,
    top: 270,
    left: -100,
  }
});
