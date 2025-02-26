import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Keyboard, TouchableWithoutFeedback, Image, Dimensions } from 'react-native';
import Animated, { Easing, withTiming, useSharedValue, useAnimatedStyle } from 'react-native-reanimated';
import Back from '../../../../../assets/imgs/back.svg'
import Add from '../../../../../assets/imgs/add.svg'
import { ScrollView } from 'react-native-gesture-handler';



let width = Dimensions.get("window").width
let height = Dimensions.get("window").height

export default function YourGIGs({ navigation }) {
    const [showActive,setShowActive] = useState(true)
    const activeIndicator = useSharedValue(0);
    const activeValue = useSharedValue(0);
    const uid = 'user123'
    const activeGigs = [
        { id: '1',rating:0.4, title: 'Logo Design', plans:{basic:{price:50}}, clients:3 , image: {uri: 'https://placehold.co/400x400.png'} },
        { id: '2', title: 'Website Development', plans:{basic:{price:50}}, clients:26 ,image: {uri: 'https://placehold.co/400x200.png'} },
    ];
    const pausedGigs = [
        { id: '3', title: 'SEO Optimization', plans:{basic:{price:50}}, clients:10, image: {uri: 'https://placehold.co/400x500.png'} },
    ]

      
    const changeViewer = (value) =>{
        setShowActive(value)
        activeIndicator.value = !value?width/2:0
        // seperatorValue.value = !value?0:width
        activeValue.value = !value?-width:0
    }

    const chooseCategory = (cat) =>{
        // setCategory(cat)
    }
    const goChooseCategory = () =>{
        navigation.navigate('ChooseCategory',{chooseCategory:chooseCategory});
    }

    const indicatorStyle = useAnimatedStyle(() => {
        return {
            left:withTiming(activeIndicator.value, {duration: 300,easing:Easing.bezier(0.5, 0.01, 0, 1)})
        };
    });

    const activeStyle = useAnimatedStyle(() => {
        return {
            left:withTiming(activeValue.value, {duration: 300,easing:Easing.bezier(0.5, 0.01, 0, 1)})
        };
    });

    const pausedStyle = useAnimatedStyle(() => {
        return {
            left:withTiming(activeValue.value+width, {duration: 300,easing:Easing.bezier(0.5, 0.01, 0, 1)})
        };
    });
    
    // const seperatorStyle = useAnimatedStyle(() => {
    //     return {
    //         left:withTiming(seperatorValue.value, {duration: 150,easing:Easing.ease})
    //     };
    // });
    
    // const seperatorStyle1 = useAnimatedStyle(() => {
    //     return {
    //         left:withTiming(seperatorValue.value, {duration: 300,easing:Easing.ease})
    //     };
    // });

    return (
        <View style={{backgroundColor:'#1e1e1e',width:'100%',height:'100%'}} >
            <Text  style={{fontFamily:'RubikMedium',fontSize:17,color:'white',width:'100%',alignItems:'center',textAlign:'center',marginTop:60}} >Votre GIGs</Text>
            <TouchableOpacity style={{position:'absolute',top:45,left:0,zIndex:2}} onPress={()=>{navigation.goBack()}} >
                <Back style={{height:45,width:45}} fill="#fff"  />  
            </TouchableOpacity>

            <TouchableOpacity style={{position:'absolute',top:55,right:10,zIndex:2}} onPress={()=>{navigation.navigate('TitleGIG',{uid:uid})}} >
                <Image source={require('../../../../../assets/imgs/add.png')} style={{height:35,width:35,tintColor:'#4CAF50'}}   />  
            </TouchableOpacity>
            <View style={{display:'flex',flexDirection:'row',alignSelf:'center',justifyContent:'center',height:60,width:"100%",marginTop:20,position:"relative",borderBottomWidth:1,borderColor:'#333'}} >
                <TouchableOpacity onPress={()=>changeViewer(true)} style={{height:'100%',width:'50%',justifyContent:'center',alignItems:'center'}} >
                    <Text  style={{fontFamily:'RubikMedium',fontSize:19,color:showActive?'#4CAF50':'#999'}} >Active</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>changeViewer(false)} style={{height:'100%',width:'50%',justifyContent:'center',alignItems:'center'}} >
                    <Text  style={{fontFamily:'RubikMedium',fontSize:19,color:!showActive?'#4CAF50':'#999'}} >En pause</Text>
                </TouchableOpacity>
                <Animated.View style={[{position:'absolute',bottom:0,height:3,width:'50%',borderRadius:3,backgroundColor:'#4CAF50'},indicatorStyle]} ></Animated.View>
            </View>
            <Animated.View style={[{width:"100%",height:height-160,top:160,position:'absolute'},activeStyle]} >
                <ScrollView style={{width:'100%',position:'relative'}} showsVerticalScrollIndicator={false}>
                    <View style={{width:'100%',height:'100%',display:'flex',flexDirection:'column',alignItems:'start',justifyContent:"center",paddingTop:20}} >
                        {activeGigs.length > 0?
                            activeGigs.map((gig,index)=>{
                            return(
                            <TouchableOpacity  key={index} onPress={()=>{}} style={{height:100,width:'90%',borderRadius:10,backgroundColor:'rgb(53, 53, 53)',alignItems:'start',alignSelf:'center',marginBottom:20,flexDirection:'row',position:'relative'}} >
                                {/* <Image source={require('../../../../../assets/imgs/heart.png')} style={{height:25,width:25,position:'absolute',top:5,right:5,opacity:0.6}} /> */}
                                
                                <Image source={gig.image} style={{height:100,width:110,borderRadius:10,borderTopRightRadius:0,borderBottomRightRadius:0}} />
                                <View style={{width:width*0.9-150,marginLeft:10,marginTop:12}} >
                                <View style={{flexDirection:'row',alignItems:'center'}} >
                                    <Text style={{fontFamily:'RubikMedium',fontSize:16,color:gig.rating?'white':'#4CAF50',marginRight:3}} >{gig.rating?parseFloat(gig.rating).toFixed(1):'new'}</Text>
                                    <Image style={{height:12,width:12,tintColor:'#fcc200',marginBottom:2}} source={require('../../../../../assets/imgs/star.png')} />
                                    <Text style={{fontFamily:'RubikRegular',fontSize:14,color:'rgba(255, 255, 255, 0.5)',marginLeft:3}} >({gig.clients?parseInt(gig.clients):'0'})</Text>
                                </View>
                                <Text style={{fontFamily:'RubikRegular',fontSize:17,color:'white',width:width*0.9-160}} numberOfLines={1} >{gig.title}</Text>
                                </View>
                                <View style={{flexDirection:'row',position:'absolute',bottom:15,right:22,alignItems:'center'}} >
                                <Text style={{fontFamily:'RubikMedium',fontSize:18,color:'white',marginRight:6}} >du</Text>
                                <Text style={{fontFamily:'RubikMedium',fontSize:20,color:'#4CAF50'}} >DH {gig.plans.basic.price}</Text>
                                </View>
                            </TouchableOpacity>
                            )
                            }):<Text  style={{fontFamily:'RubikMedium',fontSize:19,color:'#999',width:'100%',textAlign:'center'}} >Vous n'avez aucune GIG.</Text>
                        }
                    </View>
                    
                </ScrollView>
            </Animated.View>

            <Animated.View style={[{width:"100%",height:height-160,top:160,position:'absolute',backgroundColor:'#1e1e1e'},pausedStyle]} >
                <ScrollView style={{width:'100%',position:'relative'}} showsVerticalScrollIndicator={false}>
                    <View style={{width:'100%',height:'100%',display:'flex',flexDirection:'column',alignItems:'start',justifyContent:"center",paddingTop:20}} >
                        {pausedGigs.length > 0?
                            pausedGigs.map((gig,index)=>{
                            return(
                            <TouchableOpacity  key={index} onPress={()=>{}} style={{height:100,width:'90%',borderRadius:10,backgroundColor:'rgb(53, 53, 53)',alignItems:'start',alignSelf:'center',marginBottom:20,flexDirection:'row',position:'relative'}} >
                                {/* <Image source={require('../../../../../assets/imgs/heart.png')} style={{height:25,width:25,position:'absolute',top:5,right:5,opacity:0.6}} /> */}
                                
                                <Image source={gig.image} style={{height:100,width:110,borderRadius:10,borderTopRightRadius:0,borderBottomRightRadius:0}} />
                                <View style={{width:width*0.9-150,marginLeft:10,marginTop:12}} >
                                <View style={{flexDirection:'row',alignItems:'center'}} >
                                    <Text style={{fontFamily:'RubikMedium',fontSize:16,color:gig.rating?'white':'#4CAF50',marginRight:3}} >{gig.rating?parseFloat(gig.rating).toFixed(1):'new'}</Text>
                                    <Image style={{height:12,width:12,tintColor:'#fcc200',marginBottom:2}} source={require('../../../../../assets/imgs/star.png')} />
                                    <Text style={{fontFamily:'RubikRegular',fontSize:14,color:'rgba(255, 255, 255, 0.5)',marginLeft:3}} >({gig.clients?parseInt(gig.clients):'0'})</Text>
                                </View>
                                <Text style={{fontFamily:'RubikRegular',fontSize:17,color:'white',width:width*0.9-160}} numberOfLines={1} >{gig.title}</Text>
                                </View>
                                <View style={{flexDirection:'row',position:'absolute',bottom:15,right:22,alignItems:'center'}} >
                                <Text style={{fontFamily:'RubikMedium',fontSize:18,color:'white',marginRight:6}} >du</Text>
                                <Text style={{fontFamily:'RubikMedium',fontSize:20,color:'#4CAF50'}} >DH {gig.plans.basic.price}</Text>
                                </View>
                            </TouchableOpacity>
                            )
                            }):<Text  style={{fontFamily:'RubikMedium',fontSize:19,color:'#999',width:'100%',textAlign:'center'}} >Vous n'avez aucune GIG.</Text>
                        }
                    </View>
                    
                </ScrollView>
            </Animated.View>
            {/* <Animated.View style={[{width:"100%",height:height-160,top:160,position:'absolute',backgroundColor:'#4CAF50'},seperatorStyle]} >
            </Animated.View>
            <Animated.View style={[{width:"100%",height:height-160,top:160,position:'absolute',backgroundColor:'#1e1e1e'},seperatorStyle1]} >
            </Animated.View> */}
        </View>
    )
}