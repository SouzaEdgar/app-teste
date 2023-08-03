import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Alert} from 'react-native';
import Toque from './src/components/Touchable.js'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      {/* <Text id='grau'>90°</Text> */}
      <Image style={{width: 400, height: 300}} source={{uri:'https://cdn.discordapp.com/attachments/718876217293537333/1104539057998012496/image.png'}}/>
      {/* <Button title='GIRAR' onPress={}/> */}
      <Toque/>
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
  grau : {
    backgroundColor: 'white',
  },
  botao : {
    backgroundColor: 'white',
  }
});
