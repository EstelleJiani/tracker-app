import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { DataProvider } from './components/DataContext';
import NavigationTab from './components/NavigationTab';

export default function App() {
  return (
    <DataProvider>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <NavigationTab />
        </NavigationContainer>
        <StatusBar style="auto" />
      </SafeAreaView>
    </DataProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
