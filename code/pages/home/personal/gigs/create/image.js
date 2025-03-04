import React, { version } from 'react';
import { StyleSheet,Dimensions, Text, View, Image, Touchable, TouchableOpacity,TextInput, ScrollView,ActivityIndicator } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useThemeColors } from '../../../../../Imps';

const {color0,color1,color2,color3,color4,color5,scndBGColor,colorW0,textColor,shadowColor,shadowColor1} = useThemeColors()


let width = Dimensions.get("window").width

export default function ImageGIG({navigation,route}){
    const {title,category,plans,price,type,uid} = route.params
    const [images, setImages] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [Status,setStatus] = React.useState(false)
    const [city,setCity] = React.useState(null)
    const [Error,setError] = React.useState(-1)

    const validate = () =>{
      if (!image) {
        setError(0)
        return
      }

      if (!city) {
        setError(1)
        return
      }
    }

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [1, 1],
          quality: 1,
          allowsMultipleSelection: true,
        });
    
        if (!result.canceled) {
          setImages(prev=> [...prev,result.assets[0].uri]);
        }
    };

    const removeImage = (img) =>{
      setImages(prev=> prev.filter((image)=>image !== img))
    }


    const chooseCity = (ct) => {setCity(ct)} 
  return(
    <View style={{height:'100%',width:'100%',backgroundColor:colorW0,justifyContent:'center',alignItems:'center'}} >

        {/* <TouchableOpacity  onPress={()=>{}} style={{height:100,width:'90%',borderRadius:10,backgroundColor:'rgb(53, 53, 53)',alignItems:'start',alignSelf:'center',marginBottom:20,flexDirection:'row',position:'relative',overflow:'hidden'}} >
            {image?<Image source={{uri:image}} style={{height:100,width:110,borderRadius:10,borderTopRightRadius:0,borderBottomRightRadius:0}} />:
            <TouchableOpacity onPress={()=>{}} style={{height:100,width:110,borderColor:'#999',backgroundColor:'#999',alignItems:'center',justifyContent:'center',borderWidth:2,borderColor:Error === 0?'#f0716f':'#999',borderTopLeftRadius:12,borderBottomLeftRadius:12}} >
              <Image source={require('../../../../../../assets/imgs/addImage.png')} style={{height:50,width:50}} />
            </TouchableOpacity>}
            <View style={{width:width*0.9-150,marginLeft:10,marginTop:12}} >
            <View style={{flexDirection:'row',alignItems:'center'}} >
                <Text style={{fontFamily:'RubikMedium',fontSize:16,color:textColor,marginRight:3}} >{'4.8'}</Text>
                <Image style={{height:12,width:12,tintColor:'#fcc200',marginBottom:2}} source={require('../../../../../../assets/imgs/star.png')} />
                <Text style={{fontFamily:'RubikRegular',fontSize:14,color:'rgba(255, 255, 255, 0.5)',marginLeft:3}} >12</Text>
            </View>
            <Text style={{fontFamily:'RubikRegular',fontSize:17,color:textColor,width:width*0.9-160}} numberOfLines={1} >{title}</Text>
            </View>
            <View style={{flexDirection:'row',position:'absolute',bottom:15,right:22,alignItems:'center'}} >
            {plans.basic.price?<Text style={{fontFamily:'RubikMedium',fontSize:18,color:textColor,marginRight:6}} >du</Text>:null}
            {plans.basic.price?<Text style={{fontFamily:'RubikMedium',fontSize:20,color:'#4CAF50'}} >DH {plans.basic.price}</Text>:null}
            </View>
        </TouchableOpacity> */}
        <Text style={{fontFamily:'RubikMedium',fontSize:25,color:textColor,textAlign:'center',alignSelf:'center',marginBottom:20}} >Ajouter des images</Text>

        <View style={{width:'80%',height:width*0.8,borderRadius:12,backgroundColor:color1,marginBottom:20,display:'flex',flexDirection:'row',flexWrap:'wrap',boxShadow:`0px 0px 10px ${shadowColor1}`}} >
          {
            images.map((img)=>{
              return(
                <View style={{width:(width*0.4-20),height:(width*0.4-20),margin:10,borderRadius:7,backgroundColor:'#999',alignItems:'center',justifyContent:'center',position:'relative'}} >
                  <Image source={{uri:img}} style={{height:'100%',width:'100%',borderRadius:7}} />
                  <TouchableOpacity onPress={()=>removeImage(img)} style={{position:'absolute',top:0,right:10}} ><Text style={{fontSize:30,fontFamily:'RubikRegular',color:'red',transform:'rotate(45deg)'}} >+</Text></TouchableOpacity>
                </View>
              )
            })
          }
          {images.length<4?<TouchableOpacity onPress={pickImage} style={{width:(width*0.4-20),height:(width*0.4-20),margin:10,borderRadius:7,backgroundColor:color4,alignItems:'center',justifyContent:'center'}} ><Text style={{fontSize:60,fontFamily:'RubikRegular',color:textColor}} >+</Text></TouchableOpacity>:null}
          
          
        
        </View>
      
        
        <TouchableOpacity onPress={()=>navigation.navigate('ChooseCity',{chooseCity:chooseCity})} style={{ width: '80%', height: 50, backgroundColor: color1, justifyContent: 'center', alignItems: 'center', borderRadius: 12, marginBottom:10,boxShadow:`0px 0px 10px ${shadowColor1}` }}>
          <Text style={{ color: !city?textColor:'#4CAF50', fontSize: 18, fontFamily: 'RubikBold' }}>{city||'Choisissez votre ville'}</Text>
        </TouchableOpacity>


        <View style={{flexDirection:'row',backgroundColor:color1,width:'80%',maxWidth:500,marginTop:10,height:48,borderRadius:12,alignSelf:'center',boxShadow:`0px 0px 10px ${shadowColor1}`}} >
            <TouchableOpacity onPress={()=>setStatus(false)} style={{backgroundColor:Status?color1:'#4CAF50',width:'50%',alignItems:'center',justifyContent:'center',borderRadius:12}} >
                  <Text style={{fontSize:22,fontFamily:'RubikMedium',color:!Status?color1:textColor}} >En ligne</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>setStatus(true)} style={{backgroundColor:!Status?color1:'#4CAF50',width:'50%',alignItems:'center',justifyContent:'center',borderRadius:12}} >
                  <Text style={{fontSize:22,fontFamily:'RubikMedium',color:Status?color1:textColor}} >En personne</Text>
            </TouchableOpacity>
        </View>

      
      <TouchableOpacity
                onPress={()=>{}}
                style={{
                  width: '80%',
                  height: 50,
                  backgroundColor: '#4CAF50',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 12,
                  marginTop:50,
                  alignSelf:'center'
                }}
              >
        {!loading?<Text style={{ color: 'white', fontSize: 18, fontFamily: 'RubikBold' }}>PUBLIER</Text>:
        <Image style={{height:40,width:40}} source={require('../../../../../../assets/gifs/walkingWhiteOnGreen.gif')} />
        }
      </TouchableOpacity> 
      {/* <TouchableOpacity onPress={()=>Upload_Img(image)} style={{backgroundColor:'#fcc200',borderRadius:20,padding:10,alignSelf:'center',paddingHorizontal:24,paddingVertical:12,marginTop:30}} >
        {!loading?<Text style={{fontFamily:'LG',fontSize:30,color:'black',textAlign:'center',alignSelf:'center'}} >publish</Text>:
        <Image style={{height:30,width:30}} source={require('../../../../../../assets/imgs/walking_load.gif')} />
        }
      </TouchableOpacity> */}
      <TouchableOpacity onPress={()=>navigation.goBack()} style={{alignSelf:'center',marginTop:10}} >
        <Text style={{fontFamily:'RubikMedium',fontSize:22,color:textColor,textAlign:'center',alignSelf:'center'}} >retour</Text>
      </TouchableOpacity>
    </View>
  )
  
  
}