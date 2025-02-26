import React, { version } from 'react';
import { useFonts } from 'expo-font';
import { StyleSheet, Text, View, Image, Touchable, TouchableOpacity,TextInput, ScrollView } from 'react-native';



export default function DescGIG({navigation,route}){
    const {title,category,plans,uid} = route.params
    const [desc,setDesc] = React.useState('')
    const [Error,setE] = React.useState(false)
    
  return(
    <View style={{height:'100%',width:'100%',backgroundColor:'white'}} >
    <Text style={{fontFamily:'LG',fontSize:29,color:'black',textAlign:'center',alignSelf:'center',marginTop:100}} >Description</Text>
    <View style={{height:280,width:'85%',borderWidth:2,borderRadius:7,alignSelf:'center',marginTop:14}} >
        <TextInput onChangeText={(text)=>setDesc(text)} value={desc}  style={{fontFamily:'LG',fontSize:23,color:'black',width:'100%',paddingHorizontal:10}} multiline placeholderTextColor={Error?'#f0716f':'gray'} placeholder="Describe your gig in details (for search)..." />    
    </View>
    <TouchableOpacity onPress={()=>{desc != ''?navigation.navigate('imggig',{title:title,category:category,plans:plans,description:desc.trimEnd(),uid:uid}):setE(true)}} style={{backgroundColor:'#fcc200',borderRadius:20,padding:10,alignSelf:'center',paddingHorizontal:24,paddingVertical:12,marginTop:30}} >
        <Text style={{fontFamily:'LG',fontSize:30,color:'black',textAlign:'center',alignSelf:'center'}} >continue</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>navigation.goBack()} style={{alignSelf:'center',marginTop:10}} >
        <Text style={{fontFamily:'LG',fontSize:22,color:'#fcc200',textAlign:'center',alignSelf:'center'}} >back</Text>
      </TouchableOpacity>
    </View>
  )
  
  
}