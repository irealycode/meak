import React, { useEffect } from 'react';
import { useFonts } from 'expo-font';
import { Text, View,TouchableOpacity,TextInput,Keyboard, ScrollView } from 'react-native';
import Animated, {
    useSharedValue,
    withTiming,
    useAnimatedStyle,
    Easing,
  } from 'react-native-reanimated';
import { useThemeColors } from '../../../../../Imps';
const {color0,color1,color2,color3,color4,color5,scndBGColor,colorW0,textColor,shadowColor,shadowColor1} = useThemeColors()


export default function PriceGIG({navigation,route}){
    const {title,category,uid} = route.params
    const HeightB = useSharedValue(0);
    const HeightS = useSharedValue(0);
    const HeightP = useSharedValue(0);
    const borderB = useSharedValue(0);
    const borderS = useSharedValue(0);
    const borderP = useSharedValue(0);
    const [PlanB,setPlanB] = React.useState('')
    const [PlanS,setPlanS] = React.useState('')
    const [PlanP,setPlanP] = React.useState('')
    const [DescB,setDescB] = React.useState('')
    const [DescS,setDescS] = React.useState('')
    const [DescP,setDescP] = React.useState('')
    const [PriceB,setPriceB] = React.useState('')
    const [PriceS,setPriceS] = React.useState('')
    const [PriceP,setPriceP] = React.useState('')
    const [PriceHour,setPriceHour] = React.useState('')
    const [Error,setError] = React.useState(false)
    const [Status,setStatus] = React.useState(false)
    const getAway = useSharedValue(0);


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
    


  const next = () => {
    

    if (Status) {
      if (PriceHour.trim() === '') {
        setError(3)
        return
      }

      navigation.navigate('DescGIG',{title:title,category:category,plans:null,type:1,price:PriceHour.trimEnd(),uid:uid})
      setError(-1)

      return
    }

    if (PlanB.trim() === '' || DescB.trim() === '' || PriceB.trim() === '') {
      setError(0)
      return
    }

    if (PlanS.trim() === '' || DescS.trim() === '' || PriceS.trim() === '') {
      setError(1)
      return
    }

    if (PlanP.trim() === '' || DescP.trim() === '' || PriceP.trim() === '') {
      setError(2)
      return
    }

    if(PlanP.trimEnd() !== '' && PlanB.trimEnd() !== '' && PlanS.trimEnd() !== '' && DescP.trimEnd() !== '' && DescS.trimEnd() !== '' && DescB.trimEnd() !== '' && PriceP.trimEnd() !== '' && PriceS.trimEnd() !== '' && PriceB.trimEnd() !== ''){
      navigation.navigate('DescGIG',{title:title,category:category,plans:{
        basic:{
        title:PlanB.trimEnd(),
        description:DescB.trimEnd(),
        price:PriceB.trimEnd()
        },
        standard:{
            title:PlanS.trimEnd(),
            description:DescS.trimEnd(),
            price:PriceS.trimEnd()
            },
        premium:{
        title:PlanP.trimEnd(),
        description:DescP.trimEnd(),
        price:PriceP.trimEnd()
        },
      },type:0,price:null,uid:uid})
    }
    setError(-1)

  }

  const skip = () =>{
    navigation.navigate('DescGIG',{title:title,category:category,plans:null,price:null,type:3,uid:uid})
  }

  const config = {
    duration: 500,
    easing: Easing.bezier(0.5, 0.01, 0, 1),
  };


  const headerStyle = useAnimatedStyle(() => {
    return {
        borderBottomLeftRadius:withTiming((1-(HeightB.value/230))*12, config),
        borderBottomRightRadius:withTiming((1-(HeightB.value/230))*12, config)
        
    };
  });
  const style = useAnimatedStyle(() => {
    return {
        height:withTiming(HeightB.value, config),
        borderTopLeftRadius:withTiming((1-(HeightB.value/230))*12, config),
        borderTopRightRadius:withTiming((1-(HeightB.value/230))*12, config),
        opacity:withTiming((HeightB.value/230), config)
    };
  });
  const headerStyle1 = useAnimatedStyle(() => {
    return {
        borderBottomLeftRadius:withTiming((1-(HeightS.value/230))*12, config),
        borderBottomRightRadius:withTiming((1-(HeightS.value/230))*12, config)
        
    };
  });
  const style1 = useAnimatedStyle(() => {
    return {
        height:withTiming(HeightS.value, config),
        borderTopLeftRadius:withTiming((1-(HeightS.value/230))*12, config),
        borderTopRightRadius:withTiming((1-(HeightS.value/230))*12, config),
        opacity:withTiming((HeightS.value/230), config)
    };
  });
  const headerStyle2 = useAnimatedStyle(() => {
    return {
        borderBottomLeftRadius:withTiming((1-(HeightP.value/230))*12, config),
        borderBottomRightRadius:withTiming((1-(HeightP.value/230))*12, config)
        
    };
  });
  const style2 = useAnimatedStyle(() => {
    return {
        height:withTiming(HeightP.value, config),
        borderTopLeftRadius:withTiming((1-(HeightP.value/230))*12, config),
        borderTopRightRadius:withTiming((1-(HeightP.value/230))*12, config),
        opacity:withTiming((HeightP.value/230), config)
    };
  });


  const keyboardEscape = useAnimatedStyle(() => {
        return {
            paddingBottom:withTiming(getAway.value, {duration: 300,easing:Easing.bezier(0.5, 0.01, 0, 1)})
        };
  });
 

  return(
    <Animated.View style={[{height:'100%',width:'100%',backgroundColor:colorW0},keyboardEscape]} >
        <ScrollView style={{width:'100%'}} >
          <View style={{flexDirection:'row',backgroundColor:color1,width:300,marginTop:130,height:48,borderRadius:12,maxWidth:'60%',alignSelf:'center',boxShadow:`0px 0px 10px ${shadowColor1}`}} >
            <TouchableOpacity onPress={()=>setStatus(false)} style={{backgroundColor:Status?color1:'#4CAF50',width:'50%',alignItems:'center',justifyContent:'center',borderRadius:12}} >
                  <Text style={{fontSize:22,fontFamily:'RubikMedium',color:!Status?color1:textColor}} >Forfaits</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>setStatus(true)} style={{backgroundColor:!Status?color1:'#4CAF50',width:'50%',alignItems:'center',justifyContent:'center',borderRadius:12}} >
                  <Text style={{fontSize:22,fontFamily:'RubikMedium',color:Status?color1:textColor}} >Heur</Text>
            </TouchableOpacity>
        </View>

       {!Status?<View style={{marginBottom:20,marginTop:20,width:'100%',justifyContent:'center'}}>
        <Text style={{fontFamily:'RubikMedium',fontSize:25,color:textColor,textAlign:'center',alignSelf:'center',marginBottom:10}} >Forfaits</Text>
        <View>


            <Animated.View style={[{width:'80%',alignSelf:'center',backgroundColor:color1,paddingVertical:10,borderRadius:12,position:'relative',borderColor:Error===0?'#f0716f':color1,borderWidth:1,boxShadow:`0px 0px 10px ${shadowColor1}`},headerStyle]} >
                <TouchableOpacity onPress={()=>{HeightB.value=HeightB.value == 0? 230:0;borderB.value=HeightB.value == 0? 2:0}} style={{position:'absolute',height:'100%',width:'100%'}} ></TouchableOpacity>
                <View pointerEvents="none" >
                <Text  style={{fontFamily:'RubikRegular',fontSize:23,color:textColor,textAlign:'center',alignSelf:'center',}} >BASIQUE</Text>

                </View>
            </Animated.View>

            <Animated.View style={[style,{width:'80%',alignSelf:'center',borderRadius:12,borderTopLeftRadius:0,borderTopRightRadius:0,overflow:'hidden',alignItems:'center',backgroundColor:color3}]} >
                <View style={{paddingVertical:12,paddingHorizontal:10,width:'100%'}} >
                    <TextInput  style={{fontFamily:'RubikRegular',fontSize:18,color:textColor,width:'100%'}} onChangeText={(text)=>setPlanB(text)} value={PlanB}  maxLength={40} placeholderTextColor={'#999'} placeholder='Nommez votre forfait' />
                </View>
                <View style={{height:2,width:'90%',backgroundColor:textColor,borderRadius:10,alignSelf:'center'}} ></View>
                <View style={{height:120,paddingHorizontal:10,width:'100%'}} >
                    <TextInput  style={{fontFamily:'RubikRegular',fontSize:18,color:textColor,width:'100%'}} onChangeText={(text)=>setDescB(text)} value={DescB} maxLength={120} multiline placeholderTextColor={'#999'} placeholder='Décrivez les détails de votre plan' />
                </View>
                <View style={{height:2,width:'90%',backgroundColor:textColor,borderRadius:10,alignSelf:'center'}} ></View>
                <View style={{paddingVertical:12,paddingHorizontal:10,width:'100%',flexDirection:'row',alignItems:'center'}} >
                    <Text style={{fontFamily:'RubikMedium',fontSize:18,color:'#4CAF50'}} >DH</Text>
                    <TextInput  style={{fontFamily:'RubikRegular',fontSize:18,color:textColor,width:'90%',marginLeft:2}} keyboardType='numeric' onChangeText={(text)=>setPriceB(text)} value={PriceB}  maxLength={40} placeholderTextColor={'#999'} placeholder='Prix' />
                </View>
            </Animated.View>



            <Animated.View style={[{width:'80%',alignSelf:'center',backgroundColor:color1,paddingVertical:10,marginTop:10,borderRadius:12,position:'relative',borderColor:Error===1?'#f0716f':color1,borderWidth:1,boxShadow:`0px 0px 10px ${shadowColor1}`},headerStyle1]} >
                <TouchableOpacity onPress={()=>{HeightS.value=HeightS.value == 0? 230:0;borderS.value=HeightS.value == 0? 2:0}} style={{position:'absolute',height:'100%',width:'100%'}} ></TouchableOpacity>
                <View pointerEvents="none" >
                <Text  style={{fontFamily:'RubikRegular',fontSize:23,color:textColor,textAlign:'center',alignSelf:'center',}} >STANDARD</Text>

                </View>
            </Animated.View>
            
            <Animated.View style={[style1,{width:'80%',alignSelf:'center',borderRadius:12,borderTopLeftRadius:0,borderTopRightRadius:0,overflow:'hidden',alignItems:'center',backgroundColor:color3}]} >
                <View style={{paddingVertical:12,paddingHorizontal:10,width:'100%'}} >
                    <TextInput  style={{fontFamily:'RubikRegular',fontSize:18,color:textColor,width:'100%'}} onChangeText={(text)=>setPlanS(text)} value={PlanS}  maxLength={40} placeholderTextColor={'#999'} placeholder='Nommez votre forfait' />
                </View>
                <View style={{height:2,width:'90%',backgroundColor:textColor,borderRadius:10,alignSelf:'center'}} ></View>
                <View style={{height:120,paddingHorizontal:10,width:'100%'}} >
                    <TextInput  style={{fontFamily:'RubikRegular',fontSize:18,color:textColor,width:'100%'}} onChangeText={(text)=>setDescS(text)} value={DescS} maxLength={120} multiline placeholderTextColor={'#999'} placeholder='Décrivez les détails de votre plan' />
                </View>
                <View style={{height:2,width:'90%',backgroundColor:textColor,borderRadius:10,alignSelf:'center'}} ></View>
                <View style={{paddingVertical:12,paddingHorizontal:10,width:'100%',flexDirection:'row',alignItems:'center'}} >
                    <Text style={{fontFamily:'RubikMedium',fontSize:18,color:'#4CAF50'}} >DH</Text>
                    <TextInput  style={{fontFamily:'RubikRegular',fontSize:18,color:textColor,width:'90%',marginLeft:2}} keyboardType='numeric' onChangeText={(text)=>setPriceS(text)} value={PriceS}  maxLength={40} placeholderTextColor={'#999'} placeholder='Prix' />
                </View>
            </Animated.View>


            <Animated.View style={[{width:'80%',alignSelf:'center',backgroundColor:color1,paddingVertical:10,marginTop:10,borderRadius:12,position:'relative',borderColor:Error===2?'#f0716f':color1,borderWidth:1,boxShadow:`0px 0px 10px ${shadowColor1}`},headerStyle2]} >
                <TouchableOpacity onPress={()=>{HeightP.value=HeightP.value == 0? 230:0;borderP.value=HeightP.value == 0? 2:0}} style={{position:'absolute',height:'100%',width:'100%'}} ></TouchableOpacity>
                <View pointerEvents="none" >
                <Text  style={{fontFamily:'RubikRegular',fontSize:23,color:textColor,textAlign:'center',alignSelf:'center',}} >PREMIUM</Text>

                </View>
            </Animated.View>
            
            <Animated.View style={[style2,{width:'80%',alignSelf:'center',borderRadius:12,borderTopLeftRadius:0,borderTopRightRadius:0,overflow:'hidden',alignItems:'center',backgroundColor:color3}]} >
                <View style={{paddingVertical:12,paddingHorizontal:10,width:'100%'}} >
                    <TextInput  style={{fontFamily:'RubikRegular',fontSize:18,color:textColor,width:'100%'}} onChangeText={(text)=>setPlanP(text)} value={PlanP}  maxLength={40} placeholderTextColor={'#999'} placeholder='Nommez votre forfait' />
                </View>
                <View style={{height:2,width:'90%',backgroundColor:textColor,borderRadius:10,alignSelf:'center'}} ></View>
                <View style={{height:120,paddingHorizontal:10,width:'100%'}} >
                    <TextInput  style={{fontFamily:'RubikRegular',fontSize:18,color:textColor,width:'100%'}} onChangeText={(text)=>setDescP(text)} value={DescP} maxLength={120} multiline placeholderTextColor={'#999'} placeholder='Décrivez les détails de votre plan' />
                </View>
                <View style={{height:2,width:'90%',backgroundColor:textColor,borderRadius:10,alignSelf:'center'}} ></View>
                <View style={{paddingVertical:12,paddingHorizontal:10,width:'100%',flexDirection:'row',alignItems:'center'}} >
                    <Text style={{fontFamily:'RubikMedium',fontSize:18,color:'#4CAF50'}} >DH</Text>
                    <TextInput  style={{fontFamily:'RubikRegular',fontSize:18,color:textColor,width:'90%',marginLeft:2}} keyboardType='numeric' onChangeText={(text)=>setPriceP(text)} value={PriceP}  maxLength={40} placeholderTextColor={'#999'} placeholder='Prix' />
                </View>
            </Animated.View>
        </View> 
       </View>:

        <View>
          <View style={{flexDirection:'row',marginVertical:35,alignSelf:'center'}} >
            <TextInput value={PriceHour} onChangeText={setPriceHour} style={{fontFamily:'RubikRegular',color:textColor,fontSize:27,marginLeft:0,alignSelf:'center',paddingHorizontal:5}} maxLength={4} keyboardType="decimal-pad" placeholder="0" placeholderTextColor={Error === 3?'#f0716f':'#999'} />
            <Text style={{fontFamily:'RubikRegular',color:textColor,fontSize:27,marginRight:-10,alignSelf:'center',marginLeft:5}} ><Text style={{fontFamily:'RubikMedium',color:'#4CAF50'}} >DH</Text> / heur</Text>
          </View>
        </View>}
        
        <TouchableOpacity
          onPress={()=>next()}
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
            marginTop:30,
            alignSelf:'center'
          }}
        >
          <Text style={{ color: '#FFF', fontSize: 18, fontFamily: 'RubikBold' }}>SUIVANT</Text>
        </TouchableOpacity> 
        <TouchableOpacity onPress={()=>navigation.goBack()} style={{alignSelf:'center',marginTop:10}} >
          <Text style={{fontFamily:'RubikMedium',fontSize:22,color:textColor,textAlign:'center',alignSelf:'center'}} >retour</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>skip()} style={{alignSelf:'center',marginTop:10,position:"absolute",top:55,right:10}} >
          <Text style={{fontFamily:'RubikMedium',fontSize:22,color:'#999',textAlign:'center',alignSelf:'center'}} >sauter</Text>
        </TouchableOpacity>
      
      {/* <TouchableOpacity onPress={()=>{PlanP.trimEnd() != '' && PlanB.trimEnd() != '' && PlanS.trimEnd() != '' && DescP.trimEnd() != '' && DescS.trimEnd() != '' && DescB.trimEnd() != '' && PriceP.trimEnd() != '' && PriceS.trimEnd() != '' && PriceB.trimEnd() != ''?navigation.navigate('descgig',{title:title,category:category,plans:{
        basic:{
        title:PlanB.trimEnd(),
        description:DescB.trimEnd(),
        price:PriceB.trimEnd()
        },
        standard:{
            title:PlanS.trimEnd(),
            description:DescS.trimEnd(),
            price:PriceS.trimEnd()
            },
        premium:{
        title:PlanP.trimEnd(),
        description:DescP.trimEnd(),
        price:PriceP.trimEnd()
        },
      },uid:uid}):hour()}} style={{backgroundColor:'#fcc200',borderRadius:20,padding:10,alignSelf:'center',paddingHorizontal:24,paddingVertical:12,marginTop:30}} >
        <Text style={{fontFamily:'RubikRegular',fontSize:30,color:Error?'#ea3f3d':textColor,textAlign:'center',alignSelf:'center'}} >continue</Text>
      </TouchableOpacity> */}
      
      </ScrollView>
    </Animated.View>
  )
}