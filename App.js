import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Alert} from 'react-native';
import Toque from './src/components/Touchable.js';
import Angle from './src/components/Angle.js'

export default function App() {
  const VALOR = 0;
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Text><Toque/></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
