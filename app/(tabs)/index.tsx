import { Image, StyleSheet, Platform, Text, View } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <View style={styles.background}>
      <Text style={styles.title}>
        Tokio <Text style={styles.dev}>Dev</Text>
        <View style={styles.redCircle} />
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({   //Archivo css
  title: {
    position: 'absolute',
    top: 120,
    left: 20,
    right: 0,
    textAlign: 'center', // Opcional, para centrar el título horizontalmente
    fontSize: 32,
    zIndex: 10, // Asegura que esté por encima de otros elementos
    paddingTop: 16, // Opcional, para darle margen desde arriba
  },
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: '#D9D9D9'
  },
  titleContainer: {
    position: 'relative',
  },
  dev: {
    color: 'white',
  },
  redCircle: {
    position: 'absolute',
    backgroundColor: 'red',
    width: 50,
    height: 50,
    borderRadius: 25,
    top: -5,
    right: -20,
    zIndex: -1, // Ensures it stays behind the text
  },
});
