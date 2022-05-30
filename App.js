import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView, ScrollView } from 'react-native';
import { Image } from 'react-native';
import Text from './src/components/text';
import { spacing } from './src/theme/spacing';
import { typography } from './src/theme/typography';


export default function App() {
  const [loaded] = useFonts({
    'Antonio-Medium' : require('./assets/fonts/Antonio-Medium.ttf'),
    'Spartan-Regular' : require('./assets/fonts/LeagueSpartan-Regular.ttf'),
    'Spartan-Bold' : require('./assets/fonts/LeagueSpartan-Bold.ttf'),
    
  })

  if(!loaded){
    return null;
  }
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
