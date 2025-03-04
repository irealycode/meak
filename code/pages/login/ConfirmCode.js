import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Keyboard, TouchableWithoutFeedback, Image } from 'react-native';
import { useThemeColors } from '../../Imps';
const {color0,color1,color2,color3,color4,color5,scndBGColor,colorW0,textColor,shadowColor,shadowColor1} = useThemeColors()


export default function ConfirmCodeScreen({ navigation }) {
  const [code, setCode] = useState('');

  const handleNext = () => {
   
    navigation.navigate('Register');
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: color1 }}>
        
        {/* Text Logo */}
        {/* <View style={{width:155, marginBottom: 40,position:"relative",display:'flex',flexDirection:'column',alignItems:"center",justifyContent:"center"}} >
            <View style={{display:"flex",flexDirection:"row",alignItems:'center',justifyContent:"center"}} >
                <Text style={{ color: '#4CAF50',fontFamily:'RubikMedium', fontSize: 32, fontWeight: 'bold' }}>meak </Text>
                <View style={{marginBottom:0}} ><Man  style={{width:32,height:32}} /></View>
            </View>
            <View style={{width:'80%',position:'absolute',bottom:-2,height:4,backgroundColor:'#4CAF50',borderRadius:5,marginTop:5}} ></View>
        </View> */}
        
        <Text style={{ color: '#4CAF50', fontSize: 32, fontFamily: 'RubikBold', marginBottom: 40 }}>
            Confirmez le code
        </Text>
        <View style={{height:65,width:'80%',position:'relative',borderRadius:100,borderWidth:0,alignItems:'center',alignContent:'center',marginTop:6,alignSelf:'center',justifyContent:'center',flexDirection:'row'}} >
            <TextInput onChangeText={setCode} value={code} keyboardType='phone-pad' style={{color:textColor,fontFamily:'RubikMedium',display:'flex',alignItems:"center",justifyContent:"center",alignSelf:"center",fontSize:35,paddingHorizontal:20,letterSpacing:20,textAlign:'center',marginLeft:22}} maxLength={5} /> 
            <View style={{display:"flex",flexDirection:'row',alignItems:'center',justifyContent:"center",position:'absolute',bottom:0}} >
                {
                    Array(code.length||1).fill(1).map((_,i)=>{
                        return(
                            <View key={i.toString()} style={{width:35,height:4,borderRadius:4,backgroundColor:'#4CAF50',marginHorizontal:4}} ></View>

                        )
                    })
                }
                
            </View>
        </View>

        {/* Next Button */}
        <TouchableOpacity
          onPress={handleNext}
          style={{
            marginTop: 50,
            width: '80%',
            height: 50,
            backgroundColor: '#4CAF50',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 12,
            shadowColor: '#000',
            shadowOpacity: 0.2,
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 4,
            elevation: 5,
          }}
        >
          <Text style={{ color: '#FFF',fontFamily:'RubikMedium', fontSize: 18, fontWeight: 'bold' }}>SUIVANT</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}
