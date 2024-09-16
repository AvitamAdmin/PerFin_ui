import React, { useState } from "react";

import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useSport } from "../../../SportContext";


const SwitchMain = () => {
  const { setToggle,Toggle,setTransactionHeading} = useSport();

  // const [Toggle, setToggle] = useState()


  const CustomSwitch = ({ selectionMode, selectionColor }) => {
    const [getSelectionMode, setSelectionMode] = useState(selectionMode);
    const [getRoundCorner, setRoundCorner] = useState(true);

   
    const Expense = () =>{
      setToggle(1);
      setTransactionHeading('Add Expense');
     
    }
    const Income = () =>{
      setToggle(2);
      setTransactionHeading('Add Income');
    }
    const Transfer = () =>{
      setToggle(3);
      setTransactionHeading('Add Transfer');
    }

   

    return (
      <View>
        <View
          style={{
            height: hp(5),
            width: wp("90%"),
            backgroundColor: "white",
            borderRadius: 25,
            borderWidth: 2,
            borderColor: "#d9d9d9",
            flexDirection: "row",
            justifyContent: "center",
            padding: 2,
          }}
        >
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => Expense()}
            style={{
              flex: 1,
              backgroundColor: getSelectionMode == 1 ? selectionColor : "white",
              borderRadius: 25, 
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: getSelectionMode == 1 ? "white" : "#000",
                fontWeight:"bold",
                fontSize:hp(1.7)
              }}
            >
              Expense
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            TouchableOpacity
            activeOpacity={1}
            onPress={() => Income()}
            style={{
              flex: 1,
              backgroundColor: getSelectionMode == 2 ? selectionColor : "#fff",
              borderRadius: getRoundCorner ? 25 : 0,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: getSelectionMode == 2 ? "#fff" : "#000",
                fontWeight:"bold",
                fontSize:hp(1.7)
              }}
            >
              Income
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            TouchableOpacity
            activeOpacity={1}
            onPress={() => Transfer()}
            style={{
              flex: 1,
              backgroundColor: getSelectionMode == 3 ? selectionColor : "white",
              borderRadius: getRoundCorner ? 25 : 0,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: getSelectionMode == 3 ? "white" : "#000",
                fontWeight:"bold",
                fontSize:hp(1.7)
              }}
            >
              Transfer
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={{ alignItems: "center" }}>
      <View style={{ alignItems: "center" }}>
        <CustomSwitch
          selectionMode={Toggle}
       
          selectionColor={"#1c274c"}
        />
      </View>
    </View>
  );
};

export default SwitchMain;