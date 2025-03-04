import React, { version } from 'react';
import { useFonts } from 'expo-font';
import { Text, View, TouchableWithoutFeedback, Keyboard, TouchableOpacity,TextInput } from 'react-native';
import { useThemeColors } from '../../../../../Imps';
const {color0,color1,color2,color3,color4,color5,scndBGColor,colorW0,textColor,shadowColor,shadowColor1} = useThemeColors()



export default function DescGIG({navigation,route}){
    const {title,category,plans,price,type,uid} = route.params
    console.log(plans)
    const [desc,setDesc] = React.useState('')
    const [Error,setError] = React.useState(false)

    const validate = () =>{
      if (desc === '') {
        setError(true)
        return
      }
      setError(false)
      navigation.navigate('ImageGIG',{title:title,category:category,plans:plans,price:price,type:type,description:desc.trimEnd(),uid:uid})
    }
    
  return(
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{height:'100%',width:'100%',backgroundColor:colorW0}} >
        <Text style={{fontFamily:'RubikMedium',fontSize:25,color:textColor,textAlign:'center',alignSelf:'center',marginTop:100}} >Description</Text>
        <View style={{height:280,width:'80%',borderRadius:12,backgroundColor:color1,borderWidth:1,borderColor:Error?'#f0716f':color1,alignSelf:'center',marginTop:14,boxShadow:`0px 0px 10px ${shadowColor1}`}} >
            <TextInput onChangeText={(text)=>setDesc(text)} value={desc}  style={{fontFamily:'RubikMedium',fontSize:19,color:textColor,width:'100%',paddingHorizontal:10,paddingVertical:10}} multiline placeholderTextColor={"#999"} placeholder="Décrivez votre GIG en détail..." />    
        </View>
        <TouchableOpacity
          onPress={()=>validate()}
          style={{
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
            marginTop:40,
            alignSelf:'center'
          }}
        >
          <Text style={{ color: '#FFF', fontSize: 18, fontFamily: 'RubikBold' }}>SUIVANT</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.goBack()} style={{alignSelf:'center',marginTop:10}} >
            <Text style={{fontFamily:'RubikMedium',fontSize:22,color:textColor,textAlign:'center',alignSelf:'center'}} >retour</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  )
}