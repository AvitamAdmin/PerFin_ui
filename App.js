import { StyleSheet } from 'react-native';
import React from 'react';
import Navigation from './src/Navigation/Navigation';
// import AddExpense from './src/screen/MoneyManagerTabs/AddExpense';
import AddNew from './src/screen/MoneyManagerTabs/Transaction/AddNew';
import { SportProvider } from './src/SportContext';
import { Text } from 'react-native';


Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;

const App = () => {
  return (
    <SportProvider>
    <Navigation/> 
    </SportProvider> 
  );
}

export default App;

const styles = StyleSheet.create({});
