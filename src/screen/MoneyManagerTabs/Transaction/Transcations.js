import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from '@react-navigation/native';



const Transcations = () => {

  const navigation = useNavigation();


  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false); // Hide the picker after selecting a date
    setDate(currentDate);
  };

  const showDatePicker = () => {
    setShow(true); // Show the DateTimePicker when Pressable is clicked
  };


  return (
          <View style={{flex:1}}>
              <ScrollView>
      <View style={{width:wp("100%"),display:"flex",flex:1,flexDirection:"column",alignItems:"center",paddingTop:20,gap:10,backgroundColor:"#e4e4e4",paddingBottom:30}}>
            
            <View style={{width:wp("100%"),display:"flex",flexDirection:"row",justifyContent:"center",gap:8,alignItems:"center"}}>
                 <Pressable  onPress={showDatePicker}>
                   
                   <View style={{flexDirection:"column",gap:9,borderRadius:5,borderWidth:1,padding:8,backgroundColor:"#fff"}}>
                       <Text style={{color:"#000",fontSize:hp(1.5)}}>2024</Text>
                       <Text style={{color:"#000",fontSize:hp(1.5),fontWeight:"bold"}}>Aug</Text>
                   </View> 
                 </Pressable> 
              
                   <View>
                  <View style={{flexDirection:"row",display:"flex",width:wp("77%"),justifyContent:"space-between",borderRadius:5,borderWidth:1,padding:8,backgroundColor:"#fff"}}>
                  <View style={{flexDirection:"column",gap:9}}>
                       <Text style={{color:"#000",fontSize:hp(1.5)}}>Expenses</Text>
                       <Text style={{color:"#c32e2e",fontSize:hp(1.5),fontWeight:"bold"}}>47,000</Text>
                   </View> 
                  <View style={{flexDirection:"column",gap:9}}>
                       <Text style={{color:"#000",fontSize:hp(1.5)}}>Income</Text>
                       <Text style={{color:"#6dc180",fontSize:hp(1.5),fontWeight:"bold"}}>48,000</Text>
                   </View> 
                  <View style={{flexDirection:"column",gap:9}}>
                       <Text style={{color:"#000",fontSize:hp(1.5)}}>Balance</Text>
                       <Text style={{color:"#1C274C",fontSize:hp(1.5),fontWeight:"bold"}}>1000</Text>
                   </View> 
                  
                  </View>
                   </View>
            </View>
     
          <View style={{flexDirection:"column",gap:10,width:wp("100%"),display:"flex",justifyContent:"center",alignItems:"center"}}>
          <View style={{flexDirection:"row",display:"flex",width:wp("100%"),justifyContent:"space-around",backgroundColor:"#ecedff",padding:5}}> 
     
     <View style={{flexDirection:"row",gap:10}}>
       <Text style={{color:"#000",fontSize:hp(1.3),fontWeight:"bold"}}>04 Aug</Text>
       <Text style={{color:"#000",fontSize:hp(1.3),fontWeight:"bold"}}>Sunday</Text>
     </View>
     <View style={{flexDirection:"row",gap:10}}>
       <Text style={{color:"#000",fontSize:hp(1.3),fontWeight:"bold"}}>Expenses : 1500</Text>
       <Text style={{color:"#000",fontSize:hp(1.3),fontWeight:"bold"}}>Income : 500</Text>
     </View>

    </View>

    <View style={{width:wp("90%"),display:"flex",flexDirection:"row",justifyContent:"space-between",gap:10,alignItems:"center",borderRadius:5,borderWidth:1,padding:10,borderColor:"grey",backgroundColor:"#fff"}}>
         <View style={{flexDirection:"row",gap:10,alignItems:"center"}}>
           <Image source={require('../../../../assets/Shopping.png')} style={{width:wp(10.9),height:hp(5.2)}}/>
         <Text style={{color:"#000",fontSize:hp(1.5),fontWeight:"bold"}}>Shopping</Text>
         </View>
         <Text style={{color:"#000",fontSize:hp(1.5),fontWeight:"bold"}}>500</Text>
    </View>
    <View style={{width:wp("90%"),display:"flex",flexDirection:"row",justifyContent:"space-between",gap:10,alignItems:"center",borderRadius:5,borderWidth:1,padding:10,borderColor:"grey",backgroundColor:"#fff"}}>
         <View style={{flexDirection:"row",gap:10,alignItems:"center"}}>
           <Image source={require('../../../../assets/SuperMarket.png')} style={{width:wp(10.9),height:hp(5.2)}}/>
         <Text style={{color:"#000",fontSize:hp(1.5),fontWeight:"bold"}}>SuperMarket</Text>
         </View>
         <Text style={{color:"#000",fontSize:hp(1.5),fontWeight:"bold"}}>1000</Text>
    </View>
          </View>

     
        <View style={{flexDirection:"column",width:wp("100%"),display:"flex",justifyContent:"center",alignItems:"center",gap:10}}>
        <View style={{flexDirection:"row",display:"flex",width:wp("100%"),justifyContent:"space-around",backgroundColor:"#ecedff",padding:5}}> 
     
     <View style={{flexDirection:"row",gap:10}}>
       <Text style={{color:"#000",fontSize:hp(1.3),fontWeight:"bold"}}>04 Aug</Text>
       <Text style={{color:"#000",fontSize:hp(1.3),fontWeight:"bold"}}>Sunday</Text>
     </View>
     <View style={{flexDirection:"row",gap:10}}>
       <Text style={{color:"#000",fontSize:hp(1.3),fontWeight:"bold"}}>Expenses : 1500</Text>
       <Text style={{color:"#000",fontSize:hp(1.3),fontWeight:"bold"}}>Income : 500</Text>
     </View>

    </View>
 
    <View style={{width:wp("90%"),display:"flex",flexDirection:"row",justifyContent:"space-between",gap:10,alignItems:"center",borderRadius:5,borderWidth:1,padding:10,borderColor:"grey",backgroundColor:"#fff"}}>
         <View style={{flexDirection:"row",gap:10,alignItems:"center"}}>
           <Image source={require('../../../../assets/Movie.png')} style={{width:wp(10.9),height:hp(5.2)}}/>
         <Text style={{color:"#000",fontSize:hp(1.5),fontWeight:"bold"}}>Movie</Text>
         </View>
         <Text style={{color:"#000",fontSize:hp(1.5),fontWeight:"bold"}}>1000</Text>
    </View>
    <View style={{width:wp("90%"),display:"flex",flexDirection:"row",justifyContent:"space-between",gap:10,alignItems:"center",borderRadius:5,borderWidth:1,padding:10,borderColor:"grey",backgroundColor:"#fff"}}>
         <View style={{flexDirection:"row",gap:10,alignItems:"center"}}>
           <Image source={require('../../../../assets/Restaurant.png')} style={{width:wp(10.9),height:hp(5.2)}}/>
         <Text style={{color:"#000",fontSize:hp(1.5),fontWeight:"bold"}}>Restaurant</Text>
         </View>
         <Text style={{color:"#000",fontSize:hp(1.5),fontWeight:"bold"}}>1000</Text>
    </View>
    <View style={{width:wp("90%"),display:"flex",flexDirection:"row",justifyContent:"space-between",gap:10,alignItems:"center",borderRadius:5,borderWidth:1,padding:10,borderColor:"grey",backgroundColor:"#fff"}}>
         <View style={{flexDirection:"row",gap:10,alignItems:"center"}}>
           <Image source={require('../../../../assets/Snacks.png')} style={{width:wp(10.9),height:hp(5.2)}}/>
         <Text style={{color:"#000",fontSize:hp(1.5),fontWeight:"bold"}}>Snacks</Text>
         </View>
         <Text style={{color:"#000",fontSize:hp(1.5),fontWeight:"bold"}}>1000</Text>
    </View>

        </View>
         
         <View style={{flexDirection:"column",width:wp("100%"),display:"flex",justifyContent:"center",alignItems:"center",gap:10}}>
         <View style={{flexDirection:"row",display:"flex",width:wp("100%"),justifyContent:"space-around",backgroundColor:"#ecedff",padding:5}}> 
     
     <View style={{flexDirection:"row",gap:10}}>
       <Text style={{color:"#000",fontSize:hp(1.3),fontWeight:"bold"}}>04 Aug</Text>
       <Text style={{color:"#000",fontSize:hp(1.3),fontWeight:"bold"}}>Sunday</Text>
     </View>
     <View style={{flexDirection:"row",gap:10}}>
       <Text style={{color:"#000",fontSize:hp(1.3),fontWeight:"bold"}}>Expenses : 1500</Text>
       <Text style={{color:"#000",fontSize:hp(1.3),fontWeight:"bold"}}>Income : 500</Text>
     </View>

    </View>

    <View style={{width:wp("90%"),display:"flex",flexDirection:"row",justifyContent:"space-between",gap:10,alignItems:"center",borderRadius:5,borderWidth:1,padding:10,borderColor:"grey",backgroundColor:"#fff"}}>
         <View style={{flexDirection:"row",gap:10,alignItems:"center"}}>
           <Image source={require('../../../../assets/Ott.png')} style={{width:wp(10.9),height:hp(5.2)}}/>
         <Text style={{color:"#000",fontSize:hp(1.5),fontWeight:"bold"}}>OTT</Text>
         </View>
         <Text style={{color:"#000",fontSize:hp(1.5),fontWeight:"bold"}}>1000</Text>
    </View>
    <View style={{width:wp("90%"),display:"flex",flexDirection:"row",justifyContent:"space-between",gap:10,alignItems:"center",borderRadius:5,borderWidth:1,padding:10,borderColor:"grey",backgroundColor:"#fff"}}>
         <View style={{flexDirection:"row",gap:10,alignItems:"center"}}>
           <Image source={require('../../../../assets/Tea.png')} style={{width:wp(10.9),height:hp(5.2)}}/>
         <Text style={{color:"#000",fontSize:hp(1.5),fontWeight:"bold"}}>Tea</Text>
         </View>
         <Text style={{color:"#000",fontSize:hp(1.5),fontWeight:"bold"}}>1000</Text>
    </View>

         </View>
        
         </View>
      
  </ScrollView> 
  <View style={styles.fixedButtonContainer}>
        <Pressable 
          onPress={() => navigation.navigate("AddNew")}
          style={styles.addButton}>
          <Text style={styles.addButtonText}>ADD NEW</Text>
        </Pressable>
      </View>
          </View> 
  )
}

export default Transcations

const styles = StyleSheet.create({
  fixedButtonContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    alignItems: 'center',
    // backgroundColor: '#fff',
    paddingVertical: 10,
    // borderTopWidth: 1,
    // borderColor: '#ccc'
  },
  addButton: {
    backgroundColor: '#808080', // Similar to the color in the image
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    opacity:1
  },
  addButtonText: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: hp(1.4),
  },
});