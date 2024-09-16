import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import SwitchMain from './SwitchMain';


const Stats = () => {
  const navigation= useNavigation();
  return (
    <View style={{backgroundColor:"#fff",flex:1,display:"flex",paddingTop:20,width:wp("100%"),flexDirection:"column",alignItems:"center"}}>
    <View style={{flexDirection:"row",display:"flex",width:wp("90%"),justifyContent:"space-between",alignItems:"center",paddingBottom:15}}>
        <Pressable onPress={()=>navigation.goBack()}>
        <Text style={{color:"#1c274c",fontSize:hp(2.5),fontWeight:"bold"}}>{'<'}</Text>

        </Pressable>
      <Text style={{color:"#1c274c",fontSize:hp(2),fontWeight:"bold"}}>Stats</Text>
      <Pressable style={{padding:7,backgroundColor:"#D2D4DB",borderRadius:2,width:wp(20),alignItems:"center"}}>
        <Text style={{color:"#000",fontSize:hp(1.4)}}>Monthly</Text>
      </Pressable>
      </View>
      <SwitchMain />
      <ScrollView horizontal>
              <View style={{width:wp("80%"),flexDirection:"row",display:"flex",justifyContent:"center",alignItems:"center",gap:3}}>
                   
              </View>
      </ScrollView>
    </View>
  )
}

export default Stats

const styles = StyleSheet.create({})