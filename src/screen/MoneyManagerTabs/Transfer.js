import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const Transfer = () => {
  return (
    <View style={{flexDirection:"column",width:wp("100%"),display:"flex",justifyContent:"center",alignItems:"center",flex:1}}>
      <View style={{flexDirection:"column",width:wp("90%"),display:"flex",justifyContent:"center",alignItems:"center",gap:10}}>
             <Pressable style={{width:wp("90%"),borderWidth:1,borderColor:"#1c274c",borderRadius:9,padding:10,alignItems:"center"}}>
                 <Text style={{color:"#1c274c",fontSize:hp(1.8),fontWeight:"bold"}}>Select Account</Text>
             </Pressable>
             <Image source={require("../../../assets/Transfer.png")} style={{width:wp(10.9),height:hp(5.2)}}/>
             <Pressable style={{width:wp("90%"),borderWidth:1,borderColor:"#1c274c",borderRadius:9,padding:10,alignItems:"center"}}>
                 <Text style={{color:"#1c274c",fontSize:hp(1.8),fontWeight:"bold"}}>Select Account</Text>
             </Pressable>
      </View>
  </View>
  )
}

export default Transfer

const styles = StyleSheet.create({})