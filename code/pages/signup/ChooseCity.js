import React from 'react';
import { Text, View,Image, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from 'react-native';
import { Dimensions } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import Back from '../../../assets/imgs/back.svg'
import { useThemeColors } from '../../Imps';
const {color0,color1,color2,color3,color4,color5,scndBGColor,colorW0,textColor,shadowColor,shadowColor1} = useThemeColors()


let width = Dimensions.get('window').width
export default function ChooseCity({navigation,route}) {
    const {chooseCity} = route.params
    const [name,setName] = React.useState('')

  const city_list = ["Casablanca","El Kelaa des Srarhna","Fes","Tangier","Marrakech","Sale","Rabat","Meknès","Kenitra","Agadir","Oujda-Angad","Tetouan","Taourirt","Temara","Safi","Laâyoune","Mohammedia","Kouribga","Beni Mellal","El Jadid","Ait Melloul","Nador","Taza","Settat","Barrechid","Al Khmissat","Inezgane","Ksar El Kebir","Larache","Guelmim","Khenifra","Berkane","Bouskoura","Al Fqih Ben Çalah","Oued Zem","Sidi Slimane","Errachidia","Guercif","Oulad Teïma","Ad Dakhla","Ben Guerir","Wislane","Tiflet","Lqoliaa","Taroudannt","Sefrou","Essaouira","Fnidq","Ait Ali","Sidi Qacem","Tiznit","Moulay Abdallah","Tan-Tan","Warzat","Youssoufia","Sa’ada","Martil","Al Hoceïma","M’diq","Sidi Bennour","Midalt","Azrou","Ain El Aouda"]

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    
        <View style={{width:'100%',height:'100%',backgroundColor:color1}} >
        <View style={{backgroundColor:colorW0,height:50,width:'100%'}} ></View>
            <View style={{flexDirection:'row',alignItems:'center',borderBottomWidth:2,paddingBottom:12,borderColor:'#4CAF50',backgroundColor:colorW0}} >
                <TouchableOpacity style={{marginHorizontal:15}} onPress={()=>{chooseCity(null);navigation.goBack()}} >
                <Back style={{height:35,width:35}} fill={textColor} />  
                </TouchableOpacity>
                <Text style={{fontFamily:'RubikMedium',fontSize:25,color:textColor}} >Villes</Text>
            </View>
        <View style={{height:47,borderTopWidth:0,borderLeftWidth:0,borderRightWidth:0,borderWidth:2,borderColor:'#999',justifyContent:'center',paddingVertical:14,width:'100%',alignItems:'center',flexDirection:'row'}} >
            <Image source={require('../../../assets/imgs/search.png')} style={{height:20,width:20,marginLeft:7.5,tintColor:textColor}} />
            <TextInput onChangeText={(text)=>setName(text)} returnKeyType="search" placeholder="Cherchez votre ville..." placeholderTextColor={'#999'} style={{height:50,width:width-30,borderRadius:30,paddingVertical:0,paddingHorizontal:9,fontFamily:'RubikRegular',fontSize:19,color:textColor}} />
        </View>
        <ScrollView showsVerticalScrollIndicator={false} >
            {
                city_list.map((city,i)=>{
                    if (city.toLowerCase().startsWith(name.toLowerCase())) {
                        return(
                            <TouchableOpacity key={i} onPress={()=>{chooseCity(city);navigation.goBack()}} style={{flexDirection:'row',alignItems:'center',marginTop:7,borderBottomWidth:1,borderColor:"#555",paddingBottom:7}} >
                                <Text style={{fontFamily:'RubikMedium',fontSize:25,color:textColor,marginLeft:20}} >{city}</Text>
                            </TouchableOpacity>
                        )
                    }else{
                        return null
                    }
                    
                })
            }
        
        </ScrollView>

        </View>
    </TouchableWithoutFeedback>
  );
}