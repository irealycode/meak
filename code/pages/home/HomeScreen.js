import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity, Dimensions } from 'react-native';
import { GestureHandlerRootView, RefreshControl, ScrollView } from 'react-native-gesture-handler';
// import { SafeAreaView } from 'react-native-safe-area-context';
import Chart from '../../../assets/imgs/chart.svg'
import { useThemeColors } from '../../Imps';
import Man from '../../../assets/svgs/man.svg';
const {color0,color1,color2,color3,color4,color5,scndBGColor,colorW0,textColor,shadowColor,shadowColor1} = useThemeColors()

const gigs = [
  { id: '1',rating:4.4, title: 'Logo Design', plans:{basic:{price:50}}, clients:3 , image: {uri: 'https://placehold.co/400x400.png'} },
  { id: '2', title: 'Website Development', plans:{basic:{price:50}}, clients:26 ,image: {uri: 'https://placehold.co/400x200.png'} },
  { id: '3', title: 'SEO Optimization', plans:{basic:{price:50}}, clients:10, image: {uri: 'https://placehold.co/400x500.png'} },
];

let width = Dimensions.get("window").width

export default function HomeScreen({ navigation }) {
  const [search, setSearch] = useState('');
  const [onFocus,setOnFocus] = React.useState(0);
  const focusRef = React.useRef();

  function  f(x){
    return((x*x)*0.1)
  }
  return (
    <GestureHandlerRootView style={{flex:1}} >
        <View style={{height:'100%',width:'100%',backgroundColor:colorW0}}>
          {/* rgb(245, 255, 241) */}
                <View style={{width:145,top:45,position:"absolute",display:'flex',flexDirection:'column',alignItems:"center",justifyContent:"center",left:'50%',transform:[{translateX:'-50%'}]}} >
                    <View style={{display:"flex",flexDirection:"row",alignItems:'center',justifyContent:"center"}} >
                        <Text style={{ color: color2,fontFamily:'RubikMedium', fontSize: 28, fontWeight: 'bold' }}>meak </Text>
                        <View style={{marginBottom:0}} ><Man  style={{width:28,height:28}} /></View>
                    </View>
                    <View style={{width:'80%',position:'absolute',bottom:-1,height:4,backgroundColor:'#4CAF50',borderRadius:5,marginTop:5}} ></View>
                </View>
              
                <Image source={require('../../../assets/imgs/dots.png')} style={{height:25,width:25,tintColor:color1,position:'absolute',left:20,top:99.5,tintColor:color2}} />
                <View style={{position:'absolute',right:20,top:97,padding:10,height:30,width:30,justifyContent:'center',alignItems:'center',backgroundColor:color1,borderRadius:90}} >
                  <Image source={require('../../../assets/imgs/man2pic.png')} style={{height:18,width:18,tintColor:color2}} />
                </View>
                
                <View style={{height:30,width:width-140,alignSelf:'center',position:'absolute',top:97,flexDirection:'row',backgroundColor:!onFocus?color1:'rgba(0,0,0,0)',borderRadius:6,alignItems:'center',borderWidth:2,borderColor:color1,boxShadow:`0px 0px 10px ${shadowColor1}`}} >
                    <Image source={require('../../../assets/imgs/search.png')} style={{height:15,width:15,marginLeft:7.5,tintColor:!onFocus?color2:color2}} />
                    <TextInput  cursorColor={textColor} onChangeText={(text)=>setSearch(text)} onEndEditing={()=>setOnFocus(0)} ref={focusRef} returnKeyType="search" style={{height:30,width:width-162.5,borderRadius:10,paddingVertical:0,paddingHorizontal:5,fontFamily:'RubikRegular',fontSize:15,color:textColor}} placeholder='Trouver des services..' placeholderTextColor={color2} />
                </View>


            <ScrollView refreshControl={<RefreshControl  colors={['#4CAF50']} progressBackgroundColor='black'  />} showsVerticalScrollIndicator={false}>
              {/* <View style={{height:1600,width:1600,backgroundColor:color1,position:'absolute',top:110,alignSelf:'center',borderRadius:1000}} ></View> */}
                <TouchableOpacity onPress={()=>{navigation.navigate('Account')}} style={{alignSelf:'center',position:'absolute',width:33,height:33,right:20,zIndex:1,top:95}} >
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{}} style={{alignSelf:'center',position:'absolute',width:25,height:25,left:20,zIndex:1,top:100}} >
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{focusRef.current.focus();setOnFocus(1)}} style={{alignSelf:'center',position:'absolute',width:width-140,height:30,zIndex:1,top:97}} >
                </TouchableOpacity>
                
               
                <View style={{backgroundColor:color1,marginTop:150,paddingBottom:10,width:'100%',borderTopLeftRadius:0,borderTopRightRadius:0}}>
                    <View style={{alignSelf:'center',marginTop:25,width:((width-220)*2+20),height:((width-220)*2+20),position:'absolute'}} >
                    </View>
                    <Text style={{fontFamily:'RubikBold',fontSize:25,color:textColor,marginLeft:15,marginTop:20}} >Categories des services </Text>
                    <View style={{height:230}} >
                      <ScrollView style={{marginTop:20,height:170,maxHeight:190}} showsHorizontalScrollIndicator={false} horizontal>

                        <TouchableOpacity onPress={()=>{}} style={{height:170,backgroundColor:scndBGColor,borderRadius:10,marginLeft:30,boxShadow:`0px 0px 10px ${shadowColor}`}} >
                          <Image source={require('../../../assets/imgs/handyman.jpg')} style={{width:170,height:'70%',borderRadius:10}}  />
                          <View style={{height:'30%',width:170,position:'absolute',bottom:0,backgroundColor:scndBGColor,borderRadius:10,justifyContent:'center',alignItems:'center'}} >
                            <Text style={{fontFamily:'RubikMedium',fontSize:25,color:textColor}} >Ouvriers</Text>
                          </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=>{}} style={{height:170,width:170,backgroundColor:scndBGColor,borderRadius:10,marginLeft:30,boxShadow:`0px 0px 10px ${shadowColor}`}} >
                          <Image source={require('../../../assets/imgs/education.jpg')} style={{width:170,height:'70%',borderRadius:10}}  />
                          <View style={{height:'30%',width:'100%',position:'absolute',bottom:0,backgroundColor:scndBGColor,borderRadius:10,justifyContent:'center',alignItems:'center'}} >
                            <Text style={{fontFamily:'RubikMedium',fontSize:25,color:textColor}} >Education</Text>
                          </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=>{}} style={{height:170,width:170,backgroundColor:scndBGColor,borderRadius:10,marginLeft:30,boxShadow:`0px 0px 10px ${shadowColor}`}} >
                          <Image source={require('../../../assets/imgs/health.jpg')} style={{width:170,height:'70%',borderRadius:10}}  />
                          <View style={{height:'30%',width:'100%',position:'absolute',bottom:0,backgroundColor:scndBGColor,borderRadius:10,justifyContent:'center',alignItems:'center'}} >
                            <Text style={{fontFamily:'RubikMedium',fontSize:25,color:textColor}} >Santé</Text>
                          </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=>{}} style={{height:170,width:170,backgroundColor:scndBGColor,borderRadius:10,marginLeft:30,marginRight:30,boxShadow:`0px 0px 10px ${shadowColor}`}} >
                          <Image source={require('../../../assets/imgs/drivers.jpg')} style={{width:170,height:'70%',borderRadius:10}}  />
                          <View style={{height:'30%',width:'100%',position:'absolute',bottom:0,backgroundColor:scndBGColor,borderRadius:10,justifyContent:'center',alignItems:'center'}} >
                            <Text style={{fontFamily:'RubikMedium',fontSize:25,color:textColor}} >Transport</Text>
                          </View>
                        </TouchableOpacity>
                        
                      </ScrollView>
                    </View>

                    <View style={{width:width*0.9,height:width*0.9,position:"relative",borderRadius:20,backgroundColor:color0,alignSelf:'center',marginTop:0}} >
                     
                        <View style={{flexDirection:'row',width:'100%',height:'70%',alignItems:'flex-end'}} >
                            {/* <View style={{height:'100%',width:width*0.9*0.3333-48/3,marginTop:12}} >
                                <View style={{width:'100%',height:'60%',borderRadius:10,backgroundColor:textColor}} ></View>
                                <View style={{width:'100%',height:'40%',borderRadius:10,marginTop:12,backgroundColor:'#4CAF50'}} ></View>
                            </View>
                            <View style={{height:'100%',width:width*0.9*0.3333-48/3,marginTop:12,marginHorizontal:12}} >
                                <View style={{width:'100%',height:'20%',borderRadius:10,backgroundColor:textColor}} ></View>
                                <View style={{width:'100%',height:'80%',borderRadius:10,marginTop:12,backgroundColor:'#4CAF50'}} ></View>
                            </View>
                            <View style={{height:'100%',width:width*0.9*0.3333-48/3,marginTop:12}} >
                                <View style={{width:'100%',height:'40%',borderRadius:10,backgroundColor:'#4CAF50'}} ></View>
                                <View style={{width:'100%',height:'60%',borderRadius:10,marginTop:12,backgroundColor:textColor}} ></View>
                            </View> */}
                            {
                              Array(10).fill(1).map((_,i)=>{
                                
                                return(
                                  <>
                                    <View key={i} style={{width:10,height:`${f(i+1)*4}%`,marginRight:0,borderRadius:2,borderBottomLeftRadius:2,borderBottomRightRadius:0,backgroundColor:'#4CAF50',opacity:0.1*i,zIndex:1}} ></View>
                                    <View key={i} style={{width:10,height:`${f(i+1)*9}%`,marginRight:width/29,borderRadius:2,borderBottomLeftRadius:0,borderBottomRightRadius:2,backgroundColor:'#fcc200',opacity:0.1*i,zIndex:1}} ></View>
                                  </>
                                )
                              })
                            }

                        </View>
                      

                      <View style={{flexDirection:'row',alignItems:'center',alignSelf:'center',marginTop:40,position:'absolute',bottom:20}} >
                          <Text style={{fontFamily:'RubikMedium',fontSize:30,color:'#fff',alignSelf:'center'}} >Boostez votres </Text>
                          <Text style={{fontFamily:'RubikMedium',fontSize:30,color:'#fcc200',alignSelf:'center'}} >GIGs</Text> 
                          {/* <Text style={{fontFamily:'RubikMedium',fontSize:30,color:textColor,alignSelf:'center'}} >pour vous</Text> */}
                      </View>
                      {/* <Image style={{height:'100%',width:'100%',borderRadius:20,position:'absolute'}} source={require('../../../assets/imgs/ad.png')} /> */}
                      <Text style={{fontFamily:'JL',fontSize:16,position:'absolute',top:20,left:22,color:'rgba(255,255,255,0.3)'}} >Sponsorisé</Text>
                    </View>
                    <View style={{marginLeft:15,marginVertical:20,flexDirection:'row',alignItems:'center'}} >
                      <Image style={{height:20,width:20,marginRight:6,tintColor:'#fcc200',marginBottom:5}} source={require('../../../assets/imgs/star.png')} />
                      <Text style={{fontFamily:'RubikMedium',fontSize:25,color:textColor}} >Nos best-sellers</Text>
                    </View>
                    
                    {gigs?
                      gigs.map((gig,index)=>{
                        return(
                        <TouchableOpacity onPress={()=>navigation.navigate('ViewGIG',{gigId:gig.id})}  key={index}  style={{height:100,width:'90%',borderRadius:10,backgroundColor:scndBGColor,alignItems:'start',alignSelf:'center',marginBottom:20,flexDirection:'row',position:'relative',boxShadow:`0px 0px 10px ${shadowColor1}`}} >
                          <Image source={require('../../../assets/imgs/heart.png')} style={{height:25,width:25,position:'absolute',top:5,right:5,opacity:0.6}} />
                            
                          <Image source={gig.image} style={{height:100,width:110,borderRadius:10,borderTopRightRadius:0,borderBottomRightRadius:0}} />
                          <View style={{width:width*0.9-150,marginLeft:10,marginTop:12}} >
                            <View style={{flexDirection:'row',alignItems:'center'}} >
                                <Text style={{fontFamily:'RubikMedium',fontSize:16,color:gig.rating?textColor:'#4CAF50',marginRight:3}} >{gig.rating?parseFloat(gig.rating).toFixed(1):'new'}</Text>
                                <Image style={{height:12,width:12,tintColor:'#fcc200',marginBottom:2}} source={require('../../../assets/imgs/star.png')} />
                                <Text style={{fontFamily:'RubikRegular',fontSize:14,color:'rgba(255, 255, 255, 0.5)',marginLeft:3}} >({gig.clients?parseInt(gig.clients):'0'})</Text>
                            </View>
                            <Text style={{fontFamily:'RubikRegular',fontSize:17,color:textColor,width:width*0.9-160}} numberOfLines={1} >{gig.title}</Text>
                          </View>
                          <View style={{flexDirection:'row',position:'absolute',bottom:15,right:22,alignItems:'center'}} >
                            <Text style={{fontFamily:'RubikMedium',fontSize:18,color:textColor,marginRight:6}} >du</Text>
                            <Text style={{fontFamily:'RubikMedium',fontSize:20,color:'#4CAF50'}} >DH {gig.plans.basic.price}</Text>
                          </View>
                      </TouchableOpacity>
                        )
                      }):null
                    }
                </View>

                {/* <View style={{marginLeft:15,marginBottom:20,flexDirection:'row',alignItems:'center'}} >
                      <Image style={{height:27,width:27,marginRight:10,marginBottom:5}} source={require('../../../assets/imgs/jobs.png')} />
                      <Text style={{fontFamily:'RubikMedium',fontSize:25,color:'black'}} >Jobs for you</Text>
                    </View> */}
            </ScrollView>
        </View>
    </GestureHandlerRootView>
  );
}
