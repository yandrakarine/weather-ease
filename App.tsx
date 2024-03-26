import { OPEN_WEATHER_API_KEY } from '@env';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

const App = () => {
  return (
    <View style={styles.container}>
      <Text>{OPEN_WEATHER_API_KEY}</Text>
    </View>
  );
};

export default App;
