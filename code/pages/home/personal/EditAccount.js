import React, { useState, useEffect } from 'react';
import { Text,TextInput, Keyboard, View, Image, Dimensions, TouchableOpacity,ScrollView, TouchableWithoutFeedback } from 'react-native';
import Back from '../../../../assets/imgs/back.svg'
import Animated, { Easing, withTiming, useSharedValue, useAnimatedStyle } from 'react-native-reanimated';
import { useThemeColors } from '../../../Imps';
const {color0,color1,color2,color3,color4,color5,scndBGColor,colorW0,textColor,shadowColor,shadowColor1} = useThemeColors()

export default function EditAccount({ navigation,route }) {
    const {userData} = route.params

    
    const [firstName, setFirstName] = useState(userData.firstName);
    const [lastName, setLastName] = useState(userData.lastName);
    const [birthDate, setBirthDate] = useState(userData.birthDate);
    const [invalid,setInvalid] = useState(-1);
    const [category,setCategory] = useState(userData.category);
    const [description, setDescription] = useState(userData.description);
    const getAway = useSharedValue(50);

    useEffect(() => {
        // Add event listeners for keyboard events
        const keyboardDidShowListener = Keyboard.addListener('keyboardWillShow', () => {
            getAway.value = 350
        });
        const keyboardDidHideListener = Keyboard.addListener('keyboardWillHide', () => {
            getAway.value = 50
        });
    
        return () => {
          keyboardDidShowListener.remove();
          keyboardDidHideListener.remove();
        };
    }, []);
  
    
    const chooseBirthDate = (str) =>{
        if (str) {
          setInvalid(-1)
        }
        if (str.length <= 10) {
          if (str.length >= 2 && (parseInt(str.slice(0,2)) <= 0 || parseInt(str.slice(0,2)) > 31)) {
            setInvalid(2)
          }
          if (str.length === 2 && str.length > birthDate.length) {
            setBirthDate(str + '/')
            return
          }
          if (str.length === 5 && (parseInt(str.slice(3,5)) <= 0 || parseInt(str.slice(3,5)) > 12)) {
            setInvalid(2)
          }
          if (str.length === 5 && str.length > birthDate.length) {
              setBirthDate(str + '/')
              return
          }
          setBirthDate(str)
          if (str.length === 10 && (parseInt(str.slice(-4)) <= (new Date().getFullYear() - 100) || parseInt(str.slice(-4)) > (new Date().getFullYear()))) {
              setInvalid(2)
              return
          }
          return
        }
        return

    }

    const goChooseCategory = () =>{
        navigation.navigate('ChooseCategory',{chooseCategory:chooseCategory});
    }
    
    const chooseCategory = (cat) =>{
        setCategory(cat)
    }

    const avoidStyle = useAnimatedStyle(() => {
        return {
            paddingBottom:withTiming(getAway.value, {duration: 300,easing:Easing.bezier(0.5, 0.01, 0, 1)})
        };
    })

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{height:'100%',width:'100%',backgroundColor:color1}} >
            <View style={{display:'flex',flexDirection:'row',width:'100%',alignItems:'center',justifyContent:'center',marginTop:60,position:'relative',borderBottomWidth:1,borderColor:'#333',paddingBottom:15}} >
                <TouchableOpacity style={{position:'absolute',top:-5,left:10,zIndex:2}} onPress={()=>{navigation.goBack()}} >
                    <Back style={{height:35,width:35}} fill={textColor}  /> 
                </TouchableOpacity>
                <Text style={{fontFamily:'RubikMedium',fontSize:20,color:textColor}} >Compte</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} >
                <Animated.View  style={[{width:'100%',alignItems:'center',justifyContent:'center'},avoidStyle]} >
                    <TouchableOpacity>
                        <Image style={{height:100,width:100,borderRadius:100,borderWidth:1,borderColor:'#555',marginTop:25}} source={{uri:userData.image}} />
                    </TouchableOpacity>

                    <View style={{ marginBottom: 10,marginTop:20, width: '80%' }}>
                        <Text style={{fontFamily:'RubikRegular',color:'#999',marginLeft:10,marginBottom:10,fontSize:17}} >Telephone</Text>
                        <View
                            style={{
                            backgroundColor: '#111',
                            height: 50,
                            borderRadius: 12,
                            paddingLeft: 15,
                            justifyContent:'center',
                            alignItems:'start',
                            display:'flex'
                        }}
                        >
                            <Text style={{color: '#999',fontFamily: 'RubikRegular',fontSize: 18,}} >{userData.number}</Text>
                        </View>
                    </View>

                    <View style={{ marginBottom: 10,marginTop:0, width: '80%' }}>
                        <Text style={{fontFamily:'RubikRegular',color:'#999',marginLeft:10,marginBottom:10,fontSize:17}} >Prenom</Text>
                        <TextInput
                            style={{
                            backgroundColor:color5,
                            boxShadow:`0px 0px 10px ${shadowColor1}`,
                            height: 50,
                            borderRadius: 12,
                            color: textColor,
                            paddingLeft: 15,
                            fontFamily: 'RubikRegular',
                            fontSize: 18,
                            }}
                            placeholder="Votre prenom"
                            placeholderTextColor="#888"
                            value={firstName}
                            onChangeText={setFirstName}
                        />
                    </View>
                
                    <View style={{ marginBottom: 10, width: '80%' }}>
                        <Text style={{fontFamily:'RubikRegular',color:'#999',marginLeft:10,marginBottom:10,fontSize:17}} >Nom</Text>
                        <TextInput
                            style={{
                            backgroundColor:color5,
                            boxShadow:`0px 0px 10px ${shadowColor1}`,
                            height: 50,
                            borderRadius: 12,
                            color: textColor,
                            paddingLeft: 15,
                            fontFamily: 'RubikRegular',
                            fontSize: 18,
                            }}
                            placeholder="Votre nom"
                            placeholderTextColor="#888"
                            value={lastName}
                            onChangeText={setLastName}
                        />
                    </View>

                    <View style={{ marginBottom: 10, width: '80%' }}>
                        <Text style={{fontFamily:'RubikRegular',color:'#999',marginLeft:10,marginBottom:10,fontSize:17}} >Date de naissance</Text>
                        <TextInput
                            style={{
                            backgroundColor:color5,
                            boxShadow:`0px 0px 10px ${shadowColor1}`,
                            height: 50,
                            borderRadius: 12,
                            color: invalid === 2?'red':textColor,
                            paddingLeft: 15,
                            fontFamily: 'RubikRegular',
                            fontSize: 18,
                            }}
                            placeholder="Date (dd/mm/yyyy)"
                            placeholderTextColor="#888"
                            value={birthDate}
                            onChangeText={chooseBirthDate}
                            keyboardType="number-pad"
                        />
                    </View>

                    <Text style={{fontFamily:'RubikRegular',color:'#999',marginLeft:'10%',paddingLeft:10,marginBottom:10,fontSize:17,alignSelf:'start'}} >Catégorie</Text>
                    
                    <TouchableOpacity onPress={()=>goChooseCategory()} style={{ width: '80%', height: 50, backgroundColor:color5,boxShadow:`0px 0px 10px ${shadowColor1}`,justifyContent: 'center', alignItems: 'center', borderRadius: 12, marginBottom:10 }}>
                        <Text style={{ color: !category?.title?textColor:'#4CAF50', fontSize: 18, fontFamily: 'RubikBold' }}>{category?.title||'Choisir une catégorie'}</Text>
                    </TouchableOpacity>

                    <View style={{ marginBottom: 20, width: '80%' }}>
                        <Text style={{fontFamily:'RubikRegular',color:'#999',marginLeft:10,marginBottom:10,fontSize:17}} >Description</Text>
                        <TextInput
                        style={{
                            backgroundColor:color5,
                            boxShadow:`0px 0px 10px ${shadowColor1}`,
                            height: 100,
                            borderRadius: 12,
                            color: textColor,
                            paddingLeft: 15,
                            paddingTop: 10,
                            fontFamily: 'RubikRegular',
                            fontSize: 18,
                            textAlignVertical: 'top',
                        }}
                        placeholder="Décrivez-vous..."
                        placeholderTextColor="#888"
                        value={description}
                        onChangeText={setDescription}
                        multiline
                        />
                    </View>
                </Animated.View>
            </ScrollView>
        </View>
    </TouchableWithoutFeedback>
  );
}
