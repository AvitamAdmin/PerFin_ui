import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const AddExpense = () => {
  return  (
    <View style={{flexDirection:"column",width:wp("100%"),display:"flex",alignItems:"center",flex:1,paddingTop:20, }}>
      <View style={{flexDirection:"column",width:wp("90%"),display:"flex",justifyContent:"space-between",alignItems:"center",gap:25,flex:1,paddingBottom:20}}>
       
       <View style={{flexDirection:"column",gap:25}}>
       <View style={{flexDirection:"column",width:wp("90%"),display:"flex",justifyContent:"center",gap:20}}>
          <Text style={{fontSize:hp(1.7),color:"#000",fontWeight:"bold"}}>Select Category</Text>
          <View style={{width:wp("90%"),flexDirection:"row",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
               <View style={{flexDirection:"column",gap:5,alignItems:"center",width:wp("20%")}}>
                <Image source={require("../../../../assets/Salary.png")} style={{width:wp(10.9),height:hp(5.2)}}/>
                <Text style={{fontSize:hp(1.6),color:"#000",fontWeight:"bold"}}>Salary</Text>
               </View>
               <View style={{flexDirection:"column",gap:5,alignItems:"center",width:wp("20%")}}>
                <Image source={require("../../../../assets/InAccount.png")} style={{width:wp(10.9),height:hp(5.2)}}/>
                <Text style={{fontSize:hp(1.6),color:"#000",fontWeight:"bold"}}>In Account</Text>
               </View>
               <View style={{flexDirection:"column",gap:5,alignItems:"center",width:wp("20%")}}>
                <Image source={require("../../../../assets/Cash.png")} style={{width:wp(10.9),height:hp(5.2)}}/>
                <Text style={{fontSize:hp(1.6),color:"#000",fontWeight:"bold"}}>Cash</Text>
               </View>
               <View style={{flexDirection:"column",gap:5,alignItems:"center",width:wp("20%")}}>
                <Image source={require("../../../../assets/Investment.png")} style={{width:wp(10.9),height:hp(5.2)}}/>
                <Text style={{fontSize:hp(1.6),color:"#000",fontWeight:"bold"}}>Investment</Text>
               </View>
          </View>
          <View style={{width:wp("90%"),flexDirection:"row",display:"flex",alignItems:"center"}}>
               <View style={{flexDirection:"column",gap:5,alignItems:"center",width:wp("20%")}}>
                <Image source={require("../../../../assets/Income.png")} style={{width:wp(10.9),height:hp(5.2)}}/>
                <Text style={{fontSize:hp(1.6),color:"#000",fontWeight:"bold"}}>Income</Text>
               </View>
               <View style={{flexDirection:"column",gap:5,alignItems:"center",width:wp("27%")}}>
                <Image source={require("../../../../assets/Others.png")} style={{width:wp(10.9),height:hp(5.2)}}/>
                <Text style={{fontSize:hp(1.6),color:"#000",fontWeight:"bold"}}>Others</Text>
               </View>
             
               <View style={{flexDirection:"column",gap:5,alignItems:"center",width:wp("20%")}}>
                <Image source={require("../../../../assets/Add.png")} style={{width:wp(10.9),height:hp(5.2)}}/>
                <Text style={{fontSize:hp(1.6),color:"#000",fontWeight:"bold"}}>ADD</Text>
               </View>
          </View>
      </View>

      <View style={{flexDirection:"column",width:wp("90%"),display:"flex",justifyContent:"center",gap:20}}>

          <View>
          <TextInput placeholder='Amount' placeholderTextColor="gray" style={{borderRadius:5,borderColor:"#1c274c",width:wp("90%"),borderWidth:1.5,fontSize:hp(1.8),padding:10,height:hp(4.7)}}/>     

          </View>
          <View>
          <TextInput placeholder='Notes' placeholderTextColor="gray" style={{borderRadius:5,borderColor:"#1c274c",width:wp("90%"),borderWidth:1.5,fontSize:hp(1.8),padding:10,height:hp(4.7)}}/>     

          </View>
          <View style={{flexDirection:"row",alignItems:"center",gap:10,width:wp("90%"),justifyContent:"space-between"}}>
              <View style={{flexDirection:"row",alignItems:"center",borderWidth:1,borderRadius:7,padding:5,gap:10,padding:8,width:wp("43%"),justifyContent:"center"}}>
              <Image source={require('../../../../assets/Calendar.png')}style={{width:wp(6.9),height:hp(3.2)}}/>
              <Text style={{fontSize:hp(1.6),color:"#000",fontWeight:"bold"}}>Today</Text>
              </View>
              <View style={{flexDirection:"row",alignItems:"center",borderWidth:1,borderRadius:7,padding:5,gap:14,padding:8,width:wp("43%"),justifyContent:"center"}}>
              <Image source={require('../../../../assets/Account.png')}style={{width:wp(6.9),height:hp(3.2)}}/>
              <Text style={{fontSize:hp(1.6),color:"#000",fontWeight:"bold"}}>Select Account</Text>
              </View>
          </View>

          <View style={{flexDirection:"row",alignItems:"center",borderWidth:1,borderRadius:7,padding:5,gap:2,padding:20,width:wp("90%"),justifyContent:"center"}}>
          <Image source={require('../../../../assets/AddImage.png')}style={{width:wp(6.9),height:hp(3.2),opacity:4}}/>

          </View>
      </View>
       </View>

      <View style={{flexDirection:"column",width:wp("90%"),display:"flex",justifyContent:"flex-end",bottom:5}}>
        <View style={{flexDirection:"row",width:wp("90%"),display:"flex",justifyContent:"space-between"}}>
             <Pressable style={{borderRadius:5,borderWidth:1,borderColor:"#1c274c",padding:8,alignItems:"center",flexDirection:"row",width:wp("43%"),justifyContent:"center",backgroundColor:"#1c274c"}}>
                     <Text style={{fontSize:hp(1.6),color:"#fff",fontWeight:"bold"}}>SAVE</Text>
             </Pressable>
             <Pressable style={{borderRadius:5,borderWidth:1,borderColor:"#1c274c",padding:8,alignItems:"center",flexDirection:"row",width:wp("43%"),justifyContent:"center"}}>
                     <Text style={{fontSize:hp(1.6),color:"#000",fontWeight:"bold"}}>ADD ANOTHER</Text>
             </Pressable>
        </View>
      </View>

      </View>
    </View>

  )
}

export default AddExpense

const styles = StyleSheet.create({})