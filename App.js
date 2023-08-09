import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Toque from './src/components/Touchable.js'

export default function App() {
  const VALOR = 0;
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Toque/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
