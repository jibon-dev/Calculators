import {StyleSheet, Text, View, Switch} from 'react-native';
import React, {useState} from 'react';
import {ThemeContext} from './src/context/ThemeContext';
import {myColor} from './src/styles/Colors';
const App = () => {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider>
      <View
        style={
          theme === 'light'
            ? styles.container
            : [styles.container, {backgroundColor: '#000'}]
        }>
        <Text>App</Text>
        <Switch
          value={theme === 'light'}
          onValueChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        />
      </View>
    </ThemeContext.Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColor.light,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
