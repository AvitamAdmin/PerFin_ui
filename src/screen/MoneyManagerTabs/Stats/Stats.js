import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import SwitchMain from './SwitchMain';
import { useSport } from '../../../SportContext';


const Stats = () => {
  const navigation= useNavigation();
  const {setStatDisplay,StatDisplay,Toggle} = useSport();

  const display=()=>{
       if(StatDisplay=="Monthly")
       {
        setStatDisplay("Yearly")
       }
       else{
        setStatDisplay('Monthly')
       }
  }
  return ( 
    <View style={{backgroundColor:"#fff",flex:1,display:"flex",paddingTop:20,width:wp("100%"),flexDirection:"column",alignItems:"center",gap:9}}>
    <View style={{flexDirection:"row",display:"flex",width:wp("90%"),justifyContent:"space-between",alignItems:"center",paddingBottom:15}}>
        <Pressable onPress={()=>navigation.goBack()}>
        <Text style={{color:"#1c274c",fontSize:hp(2.5),fontWeight:"bold"}}>{'<'}</Text>

        </Pressable>
      <Text style={{color:"#1c274c",fontSize:hp(2),fontWeight:"bold"}}>Stats</Text>
      <Pressable onPress={display} style={{padding:7,backgroundColor:"#D2D4DB",borderRadius:2,width:wp(20),alignItems:"center"}}>
        <Text style={{color:"#000",fontSize:hp(1.4)}}>{StatDisplay}</Text>
      </Pressable>
      </View>
      <SwitchMain />
  <ScrollView  horizontal={true} 
  showsHorizontalScrollIndicator={false} style={{ width: wp("90%")}} >
              <View style={{ flexDirection: "row", justifyContent: "center", gap:10}}>
               
                  <Pressable style={{backgroundColor:"#D2D4DB",padding:3,borderRadius:3, height: hp(3),width:wp(27),alignItems:"center"}}>
                     {StatDisplay=='Monthly' ? <Text style={{color:"#000",fontSize:hp(1.7)}}>Jan 2024</Text>:<Text style={{color:"#000",fontSize:hp(1.7)}}>2020</Text>}
                      
                  </Pressable>
                  <Pressable style={{backgroundColor:"#D2D4DB",padding:3,borderRadius:3, height: hp(3),width:wp(27),alignItems:"center"}}>
                  {StatDisplay=='Monthly' ? <Text style={{color:"#000",fontSize:hp(1.7)}}>Feb 2024</Text>:<Text style={{color:"#000",fontSize:hp(1.7)}}>2021</Text>}
                  </Pressable>
                  <Pressable style={{backgroundColor:"#D2D4DB",padding:3,borderRadius:3, height: hp(3),width:wp(27),alignItems:"center"}}>
                  {StatDisplay=='Monthly' ? <Text style={{color:"#000",fontSize:hp(1.7)}}>Mar 2024</Text>:<Text style={{color:"#000",fontSize:hp(1.7)}}>2022</Text>}
                  </Pressable>
                  <Pressable style={{backgroundColor:"#D2D4DB",padding:3,borderRadius:3, height: hp(3),width:wp(27),alignItems:"center"}}>
                  {StatDisplay=='Monthly' ? <Text style={{color:"#000",fontSize:hp(1.7)}}>Last Month</Text>:<Text style={{color:"#000",fontSize:hp(1.7)}}>2023</Text>}
                  </Pressable>
                  <Pressable style={{backgroundColor:"#D2D4DB",padding:3,borderRadius:3, height: hp(3),width:wp(27),alignItems:"center"}}>
                  {StatDisplay=='Monthly' ? <Text style={{color:"#000",fontSize:hp(1.7)}}>This Month</Text>:<Text style={{color:"#000",fontSize:hp(1.7)}}>This Year</Text>}
                  </Pressable>
                
                 
                
            
              </View>
      </ScrollView>
      
    </View>
  )
}

export default Stats

const styles = StyleSheet.create({})