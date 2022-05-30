import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView, ScrollView } from 'react-native';
import { Image } from 'react-native';
import Text from './src/components/text';
import { spacing } from './src/theme/spacing';
import { typography } from './src/theme/typography';


export default function App() {
  return (
    <View style={styles.container}>
      <Text preset='h1'>Open up App.js to start working on your app!</Text>
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
    backgroundColor: "black"
  },
});
