import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Guilherme from './SRC/components/Guilherme/main';
import Isabel from './SRC/components/Isabel';

export default function App() {
  return (
    <View style={styles.container}>
     <Guilherme/>
     <Isabel/>
      <StatusBar style="auto" />
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
});
