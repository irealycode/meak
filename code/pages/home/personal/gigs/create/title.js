import React, { useState,useEffect } from 'react';
import { Text, View,TouchableOpacity,TextInput,TouchableWithoutFeedback,Keyboard } from 'react-native';
import Animated, { Easing, withTiming, useSharedValue, useAnimatedStyle } from 'react-native-reanimated';
import { useThemeColors } from '../../../../../Imps';

const {color0,color1,color2,color3,color4,color5,scndBGColor,colorW0,textColor,shadowColor,shadowColor1} = useThemeColors()


export default function TitleGIG({navigation,route}){
  const uid = route.params
    const [category,setCategory] = useState(null);
    const [Title,setTitle] = useState('')
    const [Error,setError] = useState(-1)
    const getAway = useSharedValue(0);

    const chooseCategory = (cat) =>{
      setCategory(cat)
      if (cat) {
        setError(-1)
      }
    }

    const goChooseCategory = () =>{
      navigation.navigate('ChooseCategory',{chooseCategory:chooseCategory});
    }


    useEffect(() => {
        // Add event listeners for keyboard events
        const keyboardDidShowListener = Keyboard.addListener('keyboardWillShow', () => {
            getAway.value = 300
        });
        const keyboardDidHideListener = Keyboard.addListener('keyboardWillHide', () => {
            getAway.value = 0
        });
    
        return () => {
          keyboardDidShowListener.remove();
          keyboardDidHideListener.remove();
        };
    }, []);

    const validate = () =>{
      if (Title.trim() === '') {
        setError(0)
        return
      }
      if (!category?.title) {
        setError(1)
        return
      }
      setError(-1)
      navigation.navigate('PriceGIG',{uid:uid,title:Title,category:category})
    }

    const style = useAnimatedStyle(() => {
      return {
          paddingBottom:withTiming(getAway.value, {duration: 300,easing:Easing.bezier(0.5, 0.01, 0, 1)})
      };
    });

  return(
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Animated.View  style={[{height:'100%',width:'100%',backgroundColor:colorW0,alignItems:'center',justifyContent:"center" },style]} >
        <Text style={{fontFamily:'RubikMedium',fontSize:25,color:textColor,textAlign:'center',alignSelf:'center'}} >Titre</Text>
        <View style={{ marginBottom: 10, width: '80%',marginTop:10 }}>
          <TextInput
            style={{
              backgroundColor: color1,
              height: 50,
              borderRadius: 12,
              color: textColor,
              paddingLeft: 15,
              fontFamily: 'RubikRegular',
              fontSize: 18,
              borderColor:Error===0?'#f0716f':color1,
              borderWidth:1,
              boxShadow:`0px 0px 10px ${shadowColor1}`
            }}
            placeholder='Je vais peindre ta maison...'
            placeholderTextColor="#888"
            value={Title}
            onChangeText={setTitle}
          />
        </View>
        
          {/* <TextInput onChangeText={(text)=>setT(text)} value={Title}  style={{fontFamily:'RubikMedium',fontSize:21,color:textColor,textAlign:'center',marginTop:10,width:'80%',alignSelf:'center'}} maxLength={40} placeholderTextColor={Error?'#f0716f':'gray'} placeholder='je vais peindre ta maison...' /> */}
        <Text style={{fontFamily:'RubikMedium',fontSize:25,color:textColor,textAlign:'center',alignSelf:'center',marginTop:10}} >Catégorie</Text>
          <TouchableOpacity onPress={()=>goChooseCategory()} style={{ width: '80%', height: 50, backgroundColor: color1,borderColor:Error===1?'#f0716f':color1,boxShadow:`0px 0px 10px ${shadowColor1}`,borderWidth:1, justifyContent: 'center', alignItems: 'center', borderRadius: 12, marginBottom:10 , marginTop:10}}>
            <Text style={{ color: !category?.title?textColor:'#4CAF50', fontSize: 18, fontFamily: 'RubikBold' }}>{category?.title||'Choisir une catégorie'}</Text>
          </TouchableOpacity>
          
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
              
            }}
          >
            <Text style={{ color: 'white', fontSize: 18, fontFamily: 'RubikBold' }}>SUIVANT</Text>
          </TouchableOpacity> 
          <TouchableOpacity onPress={()=>navigation.goBack()} style={{alignSelf:'center',marginTop:10}} >
            <Text style={{fontFamily:'RubikMedium',fontSize:22,color:textColor,textAlign:'center',alignSelf:'center'}} >retour</Text>
          </TouchableOpacity>
      </Animated.View >
    </TouchableWithoutFeedback>
  )
  
  
}