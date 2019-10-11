import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Weather from './app/components/Weather';

export default class App extends React.Component {
  render() {
    return (
      <Weather />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});