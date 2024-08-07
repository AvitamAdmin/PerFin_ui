import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, Pressable } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const LoginScreen = () => {
  const [inputValues, setinputValues] = useState({
    usename:"",
    password:""
  })
  const {usename,password} = inputValues;

  const handleLogin = () => {
    // Add your login logic heresssss
console.log(inputValues,"values");  };

  const onhandlechange = (name,value)=>{
setinputValues({...inputValues,[name]:value})
  }

  return (
    <View style={{ justifyContent: 'center',flexDirection:"column",backgroundColor:"#3eg45",height:"100%" }}>
     <LinearGradient style={{
        height:"100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent:"center",
          width:"100%"
        }}
        colors={["#3b53bd", "#243373", "#192451", "#020202"]}>
     <View style={{width:"90%"}}><Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 24, textAlign: 'center',color:"#fff" }}>Login</Text>
      <TextInput
      placeholderTextColor="#fff"
      style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 12, paddingHorizontal: 8,borderRadius:8,color:"#fff" }}
      placeholder="User Name"
        value={usename}
        onChangeText={(value)=>{
            onhandlechange("usename",value)
        }}
        keyboardType="default"
        autoCapitalize="none"
      />
      <TextInput
      placeholderTextColor="#fff"

        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 12, paddingHorizontal: 8,borderRadius:8,color:"#fff" }}
        placeholder="Password"
        value={password}
        onChangeText={(value)=>{
            onhandlechange("password",value)
        }}
      />
      </View>
      <Pressable title="Login" onPress={handleLogin} ><Text style={{backgroundColor:"#cce6ff",paddingLeft:15,paddingRight:15,padding:5,fontSize:18,borderRadius:8}}>Login</Text></Pressable>
     </LinearGradient>
    </View>
  );
};

export default LoginScreen;
