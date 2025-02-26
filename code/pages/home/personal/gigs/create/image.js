import React, { version } from 'react';
import { StyleSheet,Dimensions, Text, View, Image, Touchable, TouchableOpacity,TextInput, ScrollView,ActivityIndicator } from 'react-native';
import * as ImagePicker from 'expo-image-picker';



let width = Dimensions.get("window").width

export default function ImageGIG({navigation,route}){
    const {title,category,plans,uid} = route.params
    const [imagee, setImage] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [Status,setStatus] = React.useState(false)
    const [city,setCity] = React.useState(null)




    const chooseCity = (ct) => {setCity(ct)}
  return(
    <View style={{height:'100%',width:'100%',backgroundColor:'#1e1e1e',justifyContent:'center',alignItems:'center'}} >
    {/* <Text style={{fontFamily:'LG',fontSize:25,color:'black',textAlign:'center',alignSelf:'center',marginTop:10}} >Category</Text> */}

        <TouchableOpacity  onPress={()=>{}} style={{height:100,width:'90%',borderRadius:10,backgroundColor:'rgb(53, 53, 53)',alignItems:'start',alignSelf:'center',marginBottom:20,flexDirection:'row',position:'relative',overflow:'hidden'}} >
            {imagee?<Image source={{uri:imagee}} style={{height:100,width:110,borderRadius:10,borderTopRightRadius:0,borderBottomRightRadius:0}} />:
            <TouchableOpacity onPress={()=>{}} style={{height:100,width:110,borderRightWidth:2,borderColor:'#999',backgroundColor:'#999',alignItems:'center',justifyContent:'center'}} >
              <Image source={require('../../../../../../assets/imgs/addImage.png')} style={{height:50,width:50}} />
            </TouchableOpacity>}
            <View style={{width:width*0.9-150,marginLeft:10,marginTop:12}} >
            <View style={{flexDirection:'row',alignItems:'center'}} >
                <Text style={{fontFamily:'RubikMedium',fontSize:16,color:'white',marginRight:3}} >{'4.8'}</Text>
                <Image style={{height:12,width:12,tintColor:'#fcc200',marginBottom:2}} source={require('../../../../../../assets/imgs/star.png')} />
                <Text style={{fontFamily:'RubikRegular',fontSize:14,color:'rgba(255, 255, 255, 0.5)',marginLeft:3}} >12</Text>
            </View>
            <Text style={{fontFamily:'RubikRegular',fontSize:17,color:'white',width:width*0.9-160}} numberOfLines={1} >{title}</Text>
            </View>
            <View style={{flexDirection:'row',position:'absolute',bottom:15,right:22,alignItems:'center'}} >
            {plans.basic.price?<Text style={{fontFamily:'RubikMedium',fontSize:18,color:'white',marginRight:6}} >du</Text>:null}
            {plans.basic.price?<Text style={{fontFamily:'RubikMedium',fontSize:20,color:'#4CAF50'}} >DH {plans.basic.price}</Text>:null}
            </View>
        </TouchableOpacity>
      
        {/* <View style={{height:130,width:'90%',borderRadius:20,backgroundColor:'#fcc200',alignItems:'center',alignSelf:'center',marginTop:20,flexDirection:'row'}} >
            {imagee?<Image source={{uri:imagee}} style={{height:130,width:130,borderRadius:20}} />:
            <TouchableOpacity onPress={()=>{}} style={{height:130,width:130,borderRadius:20,borderRightWidth:2,alignItems:'center',justifyContent:'center'}} >
                <Image source={require('../../../../../../assets/imgs/addImage.png')} style={{height:50,width:50}} />
            </TouchableOpacity>}
            <View style={{width:width*0.9-150,marginLeft:20,marginBottom:30}} >
            <View style={{flexDirection:'row',alignItems:'center'}} >
                <Text style={{fontFamily:'LG',fontSize:16,color:'black',marginRight:3}} >4.9</Text>
                <Image style={{height:12,width:12,tintColor:'black'}} source={require('../../../../../../assets/imgs/star.png')} />
            </View>
            <Text style={{fontFamily:'LG',fontSize:22,color:'black',width:width*0.9-150}} >{title}</Text>
            
            </View>
            <Text style={{fontFamily:'LG',fontSize:27,color:'black',position:'absolute',bottom:15,right:22}} >{plans.basic.price}$</Text>
        </View> */}
        <TouchableOpacity onPress={()=>navigation.navigate('ChooseCity',{chooseCity:chooseCity})} style={{ width: '80%', height: 50, backgroundColor: '#2C2C2C', justifyContent: 'center', alignItems: 'center', borderRadius: 12, marginBottom:10 }}>
          <Text style={{ color: !city?'#FFF':'#4CAF50', fontSize: 18, fontFamily: 'RubikBold' }}>{city||'Choisissez votre ville'}</Text>
        </TouchableOpacity>


        <View style={{flexDirection:'row',backgroundColor:'#2C2C2C',width:'80%',maxWidth:500,marginTop:10,height:48,borderRadius:12,alignSelf:'center'}} >
            <TouchableOpacity onPress={()=>setStatus(false)} style={{backgroundColor:Status?'#2C2C2C':'#4CAF50',width:'50%',alignItems:'center',justifyContent:'center',borderRadius:12}} >
                  <Text style={{fontSize:22,fontFamily:'RubikMedium',color:!Status?'#2C2C2C':'white'}} >En ligne</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>setStatus(true)} style={{backgroundColor:!Status?'#2C2C2C':'#4CAF50',width:'50%',alignItems:'center',justifyContent:'center',borderRadius:12}} >
                  <Text style={{fontSize:22,fontFamily:'RubikMedium',color:Status?'#2C2C2C':'white'}} >En personne</Text>
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
        {!loading?<Text style={{ color: '#FFF', fontSize: 18, fontFamily: 'RubikBold' }}>PUBLIER</Text>:
        <Image style={{height:40,width:40}} source={require('../../../../../../assets/gifs/walkingWhiteOnGreen.gif')} />
        }
      </TouchableOpacity> 
      {/* <TouchableOpacity onPress={()=>Upload_Img(imagee)} style={{backgroundColor:'#fcc200',borderRadius:20,padding:10,alignSelf:'center',paddingHorizontal:24,paddingVertical:12,marginTop:30}} >
        {!loading?<Text style={{fontFamily:'LG',fontSize:30,color:'black',textAlign:'center',alignSelf:'center'}} >publish</Text>:
        <Image style={{height:30,width:30}} source={require('../../../../../../assets/imgs/walking_load.gif')} />
        }
      </TouchableOpacity> */}
      <TouchableOpacity onPress={()=>navigation.goBack()} style={{alignSelf:'center',marginTop:10}} >
        <Text style={{fontFamily:'RubikMedium',fontSize:22,color:'white',textAlign:'center',alignSelf:'center'}} >retour</Text>
      </TouchableOpacity>
    </View>
  )
  
  
}