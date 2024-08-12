import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Calendar, CalendarList, Agenda,LocaleConfig} from 'react-native-calendars';



const Transcations = () => {
  const [selected, setSelected] = useState('');

  function Calendar(){
    return(
      <>
       <Calendar
      onDayPress={day => {
        setSelected(day.dateString);
      }}
      markedDates={{
        [selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}
      }}
    />
      </>
    )
  }

  return (
    <View style={{width:wp("100%"),display:"flex",flex:1,flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            
       <View style={{width:wp("90%"),display:"flex",flex:1,flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
            <Pressable onPress={()=>{Calendar()}}>
              <View style={{flexDirection:"column",gap:10}}>
                  <Text style={{color:"#000",fontSize:hp(1.5)}}>2024</Text>
                  <Text>Aug</Text>
              </View> 
            </Pressable> 
       </View>
   
    </View>
  )
}

export default Transcations

const styles = StyleSheet.create({})