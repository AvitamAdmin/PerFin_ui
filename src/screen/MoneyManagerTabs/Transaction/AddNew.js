import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SwitchMain from './SwitchMain'
import { useSport } from '../../../SportContext';
import AddExpense from './AddExpense';
import Income from './Income';
import Transfer from './Transfer';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';


const AddNew = () => {
  const { setToggle,Toggle ,TransactionHeading} = useSport();
  const navigation = useNavigation();
  return (
    <View style={{backgroundColor:"#fff",flex:1,display:"flex",paddingTop:20,width:wp("100%"),flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
      <View style={{flexDirection:"row",display:"flex",width:wp("90%"),justifyContent:"space-between",alignItems:"center",paddingBottom:15}}>
        <Pressable onPress={()=>navigation.goBack()}>
        <Text style={{color:"#1c274c",fontSize:hp(2.5),fontWeight:"bold"}}>{'<'}</Text>

        </Pressable>
      <Text style={{color:"#1c274c",fontSize:hp(2),fontWeight:"bold"}}>{TransactionHeading}</Text>
      <Text></Text>
      </View>
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