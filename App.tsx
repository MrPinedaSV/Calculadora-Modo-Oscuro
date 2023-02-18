import { useState } from 'react';
import { SafeAreaView, StyleSheet, Switch, Text } from 'react-native';
import { myColors } from './src/styles/Colors';
import { ThemeContext } from './src/context/ThemeContext';
import MyKeyboard from './src/components/MyKeyboard';



export default function App() {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={theme}>
    <Text style ={styles.HeadApp}>CALCULADORA</Text>
      <SafeAreaView style={theme === 'light' ? styles.container : [styles.container, {backgroundColor: 'black'}]}>
        <Switch
          value={theme === 'dark'}
          onValueChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        />
        <MyKeyboard />    
      </SafeAreaView>
      <Text style ={styles.HeadApp}>By Ronald Pineda</Text>
      <Text style ={styles.HeadApp}>DPS</Text>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColors.light,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  HeadApp:{
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: '#6A696F',
    marginTop: 15,
  }
});
