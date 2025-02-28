import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity, Dimensions } from 'react-native';
import { GestureHandlerRootView, RefreshControl, ScrollView } from 'react-native-gesture-handler';
// import { SafeAreaView } from 'react-native-safe-area-context';
import Chart from '../../../assets/imgs/chart.svg'


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


  return (
    <GestureHandlerRootView style={{flex:1}} >
        <View style={{height:'100%',width:'100%',backgroundColor:'rgb(245, 255, 241)'}}>  
          {/* rgb(245, 255, 241) */}
          
              
                <Image source={require('../../../assets/imgs/dots.png')} style={{height:25,width:25,tintColor:'#1E1E1E',position:'absolute',left:20,top:49.5}} />
                <View style={{position:'absolute',right:20,top:47,padding:10,height:30,width:30,justifyContent:'center',alignItems:'center',backgroundColor:'#1E1E1E',borderRadius:90}} >
                  <Image source={require('../../../assets/imgs/man2pic.png')} style={{height:18,width:18,tintColor:'rgb(245, 255, 241)'}} />
                </View>
                
                <View style={{height:30,width:width-140,alignSelf:'center',position:'absolute',top:47,flexDirection:'row',backgroundColor:!onFocus?'#1E1E1E':'rgba(0,0,0,0)',borderRadius:20,alignItems:'center',borderWidth:2,borderColor:'#1E1E1E'}} >
                    <Image source={require('../../../assets/imgs/search.png')} style={{height:15,width:15,marginLeft:7.5,tintColor:!onFocus?'rgb(245, 255, 241)':'#1E1E1E'}} />
                    <TextInput  cursorColor='black' onChangeText={(text)=>setSearch(text)} onEndEditing={()=>setOnFocus(0)} ref={focusRef} returnKeyType="search" style={{height:30,width:width-162.5,borderRadius:20,paddingVertical:0,paddingHorizontal:5,fontFamily:'RubikRegular',fontSize:15}} placeholder='Chercher..' placeholderTextColor={'rgb(245, 255, 241)'} />
                </View>


            <ScrollView refreshControl={<RefreshControl  colors={['#4CAF50']} progressBackgroundColor='black'  />} showsVerticalScrollIndicator={false}>
              <View style={{height:1600,width:1600,backgroundColor:'#1E1E1E',position:'absolute',top:110,alignSelf:'center',borderRadius:1000}} ></View>
                <TouchableOpacity onPress={()=>{navigation.navigate('Account')}} style={{alignSelf:'center',position:'absolute',width:33,height:33,right:20,zIndex:1,top:45}} >
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{}} style={{alignSelf:'center',position:'absolute',width:25,height:25,left:20,zIndex:1,top:50}} >
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{focusRef.current.focus();setOnFocus(1)}} style={{alignSelf:'center',position:'absolute',width:width-140,height:30,zIndex:1,top:47}} >
                </TouchableOpacity>
                
               
                <View style={{backgroundColor:'#1E1E1E',marginTop:150,paddingBottom:10,width:'100%',borderTopLeftRadius:50,borderTopRightRadius:50}}>
                    <View style={{alignSelf:'center',marginTop:25,width:((width-220)*2+20),height:((width-220)*2+20),position:'absolute'}} >
                    </View>
                    <Text style={{fontFamily:'RubikBold',fontSize:25,color:'white',marginLeft:15,marginTop:20}} >Categories des services </Text>
                    <View style={{height:230}} >
                      <ScrollView style={{marginTop:20,height:170,maxHeight:190}} showsHorizontalScrollIndicator={false} horizontal>

                        <TouchableOpacity onPress={()=>{}} style={{height:170,backgroundColor:'rgb(53, 53, 53)',borderRadius:10,marginLeft:30,boxShadow:'5px 5px 0px #4CAF50'}} >
                          <Image source={require('../../../assets/imgs/handyman.jpg')} style={{width:170,height:'70%',borderRadius:10}}  />
                          <View style={{height:'30%',width:170,position:'absolute',bottom:0,backgroundColor:'rgb(53, 53, 53)',borderRadius:10,justifyContent:'center',alignItems:'center'}} >
                            <Text style={{fontFamily:'RubikMedium',fontSize:25,color:'white'}} >Ouvriers</Text>
                          </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=>{}} style={{height:170,width:170,backgroundColor:'rgb(53, 53, 53)',borderRadius:10,marginLeft:30,boxShadow:'5px 5px 0px #4CAF50'}} >
                          <Image source={require('../../../assets/imgs/education.jpg')} style={{width:170,height:'70%',borderRadius:10}}  />
                          <View style={{height:'30%',width:'100%',position:'absolute',bottom:0,backgroundColor:'rgb(53, 53, 53)',borderRadius:10,justifyContent:'center',alignItems:'center'}} >
                            <Text style={{fontFamily:'RubikMedium',fontSize:25,color:'white'}} >Education</Text>
                          </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=>{}} style={{height:170,width:170,backgroundColor:'rgb(53, 53, 53)',borderRadius:10,marginLeft:30,boxShadow:'5px 5px 0px #4CAF50'}} >
                          <Image source={require('../../../assets/imgs/health.jpg')} style={{width:170,height:'70%',borderRadius:10}}  />
                          <View style={{height:'30%',width:'100%',position:'absolute',bottom:0,backgroundColor:'rgb(53, 53, 53)',borderRadius:10,justifyContent:'center',alignItems:'center'}} >
                            <Text style={{fontFamily:'RubikMedium',fontSize:25,color:'white'}} >Santé</Text>
                          </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={()=>{}} style={{height:170,width:170,backgroundColor:'rgb(53, 53, 53)',borderRadius:10,marginLeft:30,marginRight:30,boxShadow:'5px 5px 0px #4CAF50'}} >
                          <Image source={require('../../../assets/imgs/drivers.jpg')} style={{width:170,height:'70%',borderRadius:10}}  />
                          <View style={{height:'30%',width:'100%',position:'absolute',bottom:0,backgroundColor:'rgb(53, 53, 53)',borderRadius:10,justifyContent:'center',alignItems:'center'}} >
                            <Text style={{fontFamily:'RubikMedium',fontSize:25,color:'white'}} >Transport</Text>
                          </View>
                        </TouchableOpacity>
                        
                      </ScrollView>
                    </View>

                    <View style={{width:width*0.9,height:width*0.9,position:"relative",borderRadius:20,backgroundColor:'#111',alignSelf:'center',marginTop:0}} >
                     
                        <View style={{flexDirection:'row',width:'100%',height:'70%',alignItems:'flex-end'}} >
                            {/* <View style={{height:'100%',width:width*0.9*0.3333-48/3,marginTop:12}} >
                                <View style={{width:'100%',height:'60%',borderRadius:10,backgroundColor:'white'}} ></View>
                                <View style={{width:'100%',height:'40%',borderRadius:10,marginTop:12,backgroundColor:'#4CAF50'}} ></View>
                            </View>
                            <View style={{height:'100%',width:width*0.9*0.3333-48/3,marginTop:12,marginHorizontal:12}} >
                                <View style={{width:'100%',height:'20%',borderRadius:10,backgroundColor:'white'}} ></View>
                                <View style={{width:'100%',height:'80%',borderRadius:10,marginTop:12,backgroundColor:'#4CAF50'}} ></View>
                            </View>
                            <View style={{height:'100%',width:width*0.9*0.3333-48/3,marginTop:12}} >
                                <View style={{width:'100%',height:'40%',borderRadius:10,backgroundColor:'#4CAF50'}} ></View>
                                <View style={{width:'100%',height:'60%',borderRadius:10,marginTop:12,backgroundColor:'white'}} ></View>
                            </View> */}
                            {
                              Array(10).fill(1).map((_,i)=>{
                                return(
                                  <View key={i} style={{width:10,height:`${i*10}%`,marginRight:width/15.9,borderRadius:2,backgroundColor:'#fcc200',opacity:0.1*i,zIndex:1}} ></View>
                                )
                              })
                            }
                        </View>
                      

                      <View style={{flexDirection:'row',alignItems:'center',alignSelf:'center',marginTop:40,position:'absolute',bottom:20}} >
                          <Text style={{fontFamily:'RubikMedium',fontSize:30,color:'white',alignSelf:'center'}} >Boostez votres </Text>
                          <Text style={{fontFamily:'RubikMedium',fontSize:30,color:'#fcc200',alignSelf:'center'}} >GIGs</Text> 
                          {/* <Text style={{fontFamily:'RubikMedium',fontSize:30,color:'white',alignSelf:'center'}} >pour vous</Text> */}
                      </View>
                      {/* <Image style={{height:'100%',width:'100%',borderRadius:20,position:'absolute'}} source={require('../../../assets/imgs/ad.png')} /> */}
                      <Text style={{fontFamily:'JL',fontSize:16,position:'absolute',top:20,left:22,color:'rgba(255,255,255,0.3)'}} >Sponsorisé</Text>
                    </View>
                    <View style={{marginLeft:15,marginVertical:20,flexDirection:'row',alignItems:'center'}} >
                      <Image style={{height:20,width:20,marginRight:6,tintColor:'#fcc200',marginBottom:5}} source={require('../../../assets/imgs/star.png')} />
                      <Text style={{fontFamily:'RubikMedium',fontSize:25,color:'white'}} >Nos best-sellers</Text>
                    </View>
                    
                    {gigs?
                      gigs.map((gig,index)=>{
                        return(
                        <TouchableOpacity onPress={()=>navigation.navigate('ViewGIG',{gigId:gig.id})}  key={index}  style={{height:100,width:'90%',borderRadius:10,backgroundColor:'rgb(53, 53, 53)',alignItems:'start',alignSelf:'center',marginBottom:20,flexDirection:'row',position:'relative'}} >
                          <Image source={require('../../../assets/imgs/heart.png')} style={{height:25,width:25,position:'absolute',top:5,right:5,opacity:0.6}} />
                            
                          <Image source={gig.image} style={{height:100,width:110,borderRadius:10,borderTopRightRadius:0,borderBottomRightRadius:0}} />
                          <View style={{width:width*0.9-150,marginLeft:10,marginTop:12}} >
                            <View style={{flexDirection:'row',alignItems:'center'}} >
                                <Text style={{fontFamily:'RubikMedium',fontSize:16,color:gig.rating?'white':'#4CAF50',marginRight:3}} >{gig.rating?parseFloat(gig.rating).toFixed(1):'new'}</Text>
                                <Image style={{height:12,width:12,tintColor:'#fcc200',marginBottom:2}} source={require('../../../assets/imgs/star.png')} />
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
