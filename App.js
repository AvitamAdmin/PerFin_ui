import { StyleSheet } from 'react-native';
import React from 'react';
import Navigation from './src/Navigation/Navigation';
// import AddExpense from './src/screen/MoneyManagerTabs/AddExpense';
import AddNew from './src/screen/MoneyManagerTabs/AddNew';
import { SportProvider } from './src/SportContext';

const App = () => {
  return (
    <SportProvider>
    <Navigation/> 
    </SportProvider> 
  );
}

export default App;

const styles = StyleSheet.create({});
