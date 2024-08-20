import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SwitchMain from './SwitchMain'
import { useSport } from '../../SportContext';
import AddExpense from './AddExpense';
import Income from './Income';
import Transfer from './Transfer';

const AddNew = () => {
  const { setToggle,Toggle } = useSport();
  return (
    <View style={{backgroundColor:"#fff",flex:1,display:"flex",paddingTop:20}}>
     <SwitchMain/>

    {
      Toggle == 1 && <AddExpense/>
    }
    {
      Toggle == 2 && <Income/>
    }
    {
      Toggle == 3 && <Transfer/>
    }
    </View>
  )
}

export default AddNew

const styles = StyleSheet.create({})