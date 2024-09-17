import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MonthlySlider = ()=>{
    const data = {
        labels: [
          'Red',
          'Blue',
          'pink'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [300, 50, 100],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
        }]
      };
    return(
        <View></View>
    )
}
export default MonthlySlider

const styles = StyleSheet.create({})

