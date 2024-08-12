import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Accounts = () => {
  return (
    <View style={styles.container}>
      <Text>Accounts Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffcdd2', // Set your background color here
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Accounts;
