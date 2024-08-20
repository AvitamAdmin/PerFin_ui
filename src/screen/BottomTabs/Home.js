import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';





const Home = () => {

    const navigation = useNavigation();
  return (
    <View style={{width:wp("100%"),display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",flex:1}}>
        
        <View style={{width:wp("100%"),display:"flex",flexDirection:"column",height:hp("35%"),backgroundColor:"#1C274C",paddingTop:20,alignItems:"center"}}>
           <View style={{width:wp("90%"),display:"flex",flexDirection:"column",justifyContent:"center",gap:30,alignItems:"center"}}>
               <View style={{flexDirection:"row",width:wp("85%"),display:"flex",justifyContent:"space-between"}}>
                  <View>

                  </View>
            
                  <View>
                    <Text style={{color:"#fff",fontWeight:"bold",fontSize:hp(2)}}>LOGO</Text>
                  </View>
                  <View>
                  {/* <Ionicons name="notifications-outline" size={24} color="#fff" /> */}
                  
                  </View>
               </View>

               <View style={{flexDirection:"row",width:wp("85%"),display:"flex",justifyContent:"space-between"}}>
                   <Text style={{color:"#fff",fontWeight:"bold",fontSize:hp(1.8)}}>Expense Manager</Text>
                   <Pressable style={{backgroundColor:"#495270",padding:10,borderRadius:7}}>
                    <Text style={{color:"#fff",fontWeight:"bold",fontSize:hp(1)}}>This month</Text>
                   </Pressable>
               </View>

               <View style={{flexDirection:"row",width:wp("85%"),display:"flex",justifyContent:"space-between"}}>
                   <View style={{flexDirection:"row",gap:5}}>
                   <Text style={{color:"#fff",fontWeight:"bold",fontSize:hp(1.8)}}>  </Text>
                   <View style={{flexDirection:"column",gap:5}}>
                   <Text style={{color:"#fff",fontWeight:"bold",fontSize:hp(1.8)}}>Expense</Text>
                   <Text style={{color:"#fff",fontWeight:"bold",fontSize:hp(1.8)}}>₹0.00</Text>
                   </View>
                   </View>

                   <View style={{flexDirection:"row",gap:5}}>
                   <Text style={{color:"#fff",fontWeight:"bold",fontSize:hp(1.8)}}>  </Text>
                   <View style={{flexDirection:"column",gap:5}}>
                   <Text style={{color:"#fff",fontWeight:"bold",fontSize:hp(1.8)}}>Income</Text>
                   <Text style={{color:"#fff",fontWeight:"bold",fontSize:hp(1.8)}}>₹0.00</Text>
                   </View>
                   </View>
                  
               </View>

               <View style={{flexDirection:"row",width:wp("85%"),display:"flex",justifyContent:"center",backgroundColor:"#495270",borderRadius:10,padding:10}}>
                     <View style={{flexDirection:"row",gap:7}}> 
                     <Text style={{color:"#fff",fontWeight:"bold",fontSize:hp(2)}}>Total Balance :</Text>
                     <Text style={{color:"#fff",fontWeight:"bold",fontSize:hp(2)}}>₹0.00</Text>
                     </View>
               </View>
           </View>
        </View>



        <ScrollView>
        <View style={{width:wp("100%"),display:"flex",flexDirection:"column",height:hp("60%"),backgroundColor:"#fff",borderTopRightRadius:20,borderTopLeftRadius:20,alignItems:"center",paddingTop:20,gap:15}}>
   
   <View style={{flexDirection:"column",width:wp("85%"),display:"flex",justifyContent:"center",gap:15}}>
   <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#6A6365', '#637683','#7490AD','#78A3CB']} style={{width:wp("85%"),alignItems:"center",padding:8}}>
       <Text style={{color:"#fff",fontWeight:"bold",fontSize:hp(3)}}>ADS</Text>
   </LinearGradient>
   
  <View style={{flexDirection:"column",gap:10}}>
  <View>
    <Text style={{color:"#000",fontWeight:"bold",fontSize:hp(1.7)}}>All Services</Text>
   </View>

   <View style={{flexDirection:"row",width:wp("85%"),display:"flex",justifyContent:"space-between"}}>
       <View style={{flexDirection:"column",gap:5,alignItems:"center"}}>
          <Pressable onPress={()=>navigation.navigate("MoneyManagerTabs")}>
          <Image source={require('../../../assets/PiggyBank.png')} style={{height:hp(6),width:wp(16),borderRadius:10}}/>
          </Pressable>
          <Text style={{color:"#000",fontSize:hp(1.2)}}>Money Manager</Text>
       </View>
       <View style={{flexDirection:"column",gap:5,alignItems:"center"}}>
          <Pressable>
          <Image source={require('../../../assets/StockMarket.png')} style={{height:hp(6),width:wp(16),borderRadius:10}}/>
          </Pressable>
          <Text style={{color:"#000",fontSize:hp(1.2)}}>Stock Market</Text>
       </View>
       <View style={{flexDirection:"column",gap:5,alignItems:"center"}}>
        <Pressable>
        <Image source={require('../../../assets/Crypto.png')} style={{height:hp(6),width:wp(16),borderRadius:10}}/>
        </Pressable>
          <Text style={{color:"#000",fontSize:hp(1.2)}}>Crypto</Text>
       </View>
   </View>
   <View style={{flexDirection:"row",width:wp("85%"),display:"flex",justifyContent:"space-between"}}>
       <View style={{flexDirection:"column",gap:5,alignItems:"center"}}>
          <Pressable>  
          <Image source={require('../../../assets/MutualFunds.png')} style={{height:hp(6),width:wp(16),borderRadius:10}}/>
          </Pressable>
          <Text style={{color:"#000",fontSize:hp(1.2)}}>Money Manager</Text>
       </View>    
       <View style={{flexDirection:"column",gap:5,alignItems:"center"}}>
          <Pressable>
          <Image source={require('../../../assets/CompundInterest.png')} style={{height:hp(6),width:wp(16),borderRadius:10}}/>
          </Pressable>
          <Text style={{color:"#000",fontSize:hp(1.2)}}>Stock Market</Text>
       </View>
       <View style={{flexDirection:"column",gap:5,alignItems:"center"}}>
          <Pressable>
          <Image source={require('../../../assets/Commodities.png')} style={{height:hp(6),width:wp(16),borderRadius:10}}/>
          </Pressable>
          <Text style={{color:"#000",fontSize:hp(1.2)}}>Crypto</Text>
       </View>
   </View>
  </View>

   <View style={{flexDirection:"column",gap:15}}>
   <View>
    <Text style={{color:"#000",fontWeight:"bold",fontSize:hp(1.7)}}>Quick Services</Text>
   </View>
    
    
   <View style={{flexDirection:"column",width:wp("85%"),display:"flex",justifyContent:"center",gap:15}}>
   <Pressable>
   <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#6BC68B', '#5BB46E']} style={{width:wp("85%"),alignItems:"center",padding:7,borderRadius:10}}>
       <Text style={{color:"#fff",fontWeight:"bold",fontSize:hp(2)}}>ADD INCOME</Text>
   </LinearGradient>
   </Pressable>

   
   </View>
  
   <View style={{flexDirection:"column",width:wp("85%"),display:"flex",justifyContent:"center",gap:15}}>
   <Pressable>
   <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#D17373', '#CC5B5B','#C43333']} style={{width:wp("85%"),alignItems:"center",padding:7,borderRadius:10}}>
       <Text style={{color:"#fff",fontWeight:"bold",fontSize:hp(1.9)}}>ADD EXPENSE</Text>
   </LinearGradient>
   </Pressable>

   
   </View>

   </View>
   </View>


  </View>
        </ScrollView>



    </View>
  )
}

export default Home

const styles = StyleSheet.create({})