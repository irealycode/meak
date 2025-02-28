import React, { useState, useRef, useMemo } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, FlatList,Keyboard, Dimensions, TouchableWithoutFeedback } from 'react-native';
import Back from '../../../../assets/imgs/back.svg'
import { ScrollView } from 'react-native-gesture-handler';
import { capFirstChar, timeAgo } from '../../../Imps';
import Animated, { Easing, withTiming, useSharedValue, useAnimatedStyle } from 'react-native-reanimated';
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from 'react-native-gesture-handler';

let width = Dimensions.get("window").width



export default function ViewGIG({navigation}) {

    const [isExpanded, setIsExpanded] = useState(false);
    const [showReadMore, setShowReadMore] = useState(false);
    const activeIndicator = useSharedValue(0);
    const [planChosen,setPlanChosen] = useState(0)
    const bottomSheetRef = useRef(null);
    const [isSheetOpen, setIsSheetOpen] = useState(false);
    const seperatorInd = useSharedValue(0)

  const snapPoints = useMemo(() => ["25%", "70%"]);

    const gig = { id: '1',
        rating:0.4,
        ratings:2,
        title: 'I will fix your kitchen and give you the best kitchen ever yay',
        description:"What is Lorem Ipsum? \nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        plans:{"basic": {"description": "i will weld something", "price": "150", "title": "basic"}, "premium": {"description": "i will have the kids come in the and bring then i to and get my them from work so to speak and get them ready", "price": "350", "title": "premium"}, "standard": {"description": "i have a question for your you know are the you are the not the a you are a you are a you are the the", "price": "200", "title": "standard"}},
        price:null,
        clients:3 ,
        images: [{uri: 'https://placehold.co/400x400.png'},{uri: 'https://placehold.co/700x500.png'},{uri: 'https://placehold.co/200x900.png'},{uri: 'https://placehold.co/800x300.png'}] ,
        type: 0
    }

    // const gig = { id: '1',
    //     rating:0.4,
    //     ratings:2,
    //     title: 'I will fix your kitchen and give you the best kitchen ever yay',
    //     description:"What is Lorem Ipsum? \nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    //     plans:null,
    //     price:'50',
    //     clients:3 ,
    //     images: [{uri: 'https://placehold.co/400x400.png'},{uri: 'https://placehold.co/700x500.png'},{uri: 'https://placehold.co/200x900.png'},{uri: 'https://placehold.co/800x300.png'}] ,
    //     type: 2
    // }

    const ratings = [
        {
            id:'1',
            firstName:'sohaib',
            lastName:'boulaich',
            image:'https://placehold.co/400x400.png',
            rating:4,
            review:'good work dfsggsdfgsdf gsd fgh fdgh f gh  fdg h dfg h fgh d fgh d fgh d fghjn dh ndr tyhs rt nbs rygmn sy ms yjs ehn dfhgmn dhgm  yfjmn fhg mn  sed fg s dfgh s gfh  sgfj  sgfj sgf jsgj gfj sfg j sgj g jsgf  sg js gj g j sj dsf ghj gdsj dfhj  drjn drynhlkjb urehgiuwerhguwhergiu wheioweriu gweoirghwe iorughqoawuerhg iuqgguq wrpoquwrhgf ouawerhgfou',
            time:new Date("2025-02-26T10:00:00")
        },
        {
            id:'2',
            firstName:'oussama',
            lastName:'aabas',
            image:'https://placehold.co/400x400.png',
            rating:5,
            review:null,
            time:new Date("2025-01-26T10:00:00")
        }
    ]


    const userData = {
        firstName:'sohaib',
        lastName:'boulaich',
        balance:100,
        image:'https://placehold.co/400x400.png',
        rating:4.7,
        description:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    }

    const [currentIndex, setCurrentIndex] = useState(0);
    const viewabilityConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

    const onTextLayout = (event) => {
        if (event.nativeEvent.lines.length > 5) {
          setShowReadMore(true);
        }
      };

    const onViewableItemsChanged = useRef(({ viewableItems }) => {
        if (viewableItems.length > 0) {
            setCurrentIndex(viewableItems[0].index);
        }
    }).current;

    const getParsedNumber = (i) =>{
        i = parseFloat(i)
        if(i > 0 && i < 1000){
            return i.toString()
        }else if(i > 999 && i < 1000000){
            return (i/1000).toFixed(1) + "k"
        }else{
            return (i/1000000).toFixed(1) + "m"
        }
    }
    

    const choosePlan = (n) =>{
        setPlanChosen(n)
        activeIndicator.value = (n*0.3333)*width
    }

    const indicatorStyle = useAnimatedStyle(() => {
        return {
            left:withTiming(activeIndicator.value, {duration: 300,easing:Easing.bezier(0.5, 0.01, 0, 1)})
        };
    });

    const seperatorStyle = useAnimatedStyle(() => {
        return {
            opacity:withTiming(seperatorInd.value, {duration: 300,easing:Easing.linear}),
            zIndex:seperatorInd.value===0?-1:0
        };
    });

    const plan = gig.plans?.[planChosen===0?'basic':planChosen===1?'standard':'premium']

    return(
        <GestureHandlerRootView style={{flex:1}} >
            <View style={{backgroundColor:'#1e1e1e',width:'100%',height:'100%',display:'flex',flexDirection:'column',position:'relative'}} >
                <ScrollView showsVerticalScrollIndicator={false} >
                    <View style={{width:'100%',height:width*0.7,backgroundColor:'#999',position:'relative'}} >
                        <Text style={{position:'absolute',right:10,bottom:10,zIndex:2,paddingHorizontal:10,paddingVertical:6,fontFamily:'RubikRegular',color:'white',backgroundColor:'rgba(0,0,0,0.7)',borderRadius:20}} >{currentIndex + 1} de {gig.images.length}</Text>
                        <TouchableOpacity style={{position:'absolute',top:45,left:0,zIndex:2}} onPress={()=>{navigation.goBack()}} >
                            <Back style={{height:40,width:40}} fill="#fff"  />  
                        </TouchableOpacity>
                        <Image source={require('../../../../assets/imgs/share.png')} style={{height:30,width:30,zIndex:2,position:'absolute',top:45,right:10}} />
                        <Image source={require('../../../../assets/imgs/heart.png')} style={{height:30,width:30,zIndex:2,position:'absolute',top:45,right:50}} />
                        <FlatList
                            data={gig.images}
                            keyExtractor={(item) => item.uri}
                            horizontal
                            pagingEnabled
                            showsHorizontalScrollIndicator={false}
                            snapToInterval={width} // Snap to each image
                            snapToAlignment="center"
                            decelerationRate="fast"
                            onViewableItemsChanged={onViewableItemsChanged}
                            viewabilityConfig={viewabilityConfig}
                            renderItem={({ item }) => (
                                <View style={{ width }}>
                                <Image
                                    source={{ uri: item.uri }}
                                    style={{ width: "100%", height: 300 }}
                                    resizeMode="cover"
                                />
                                </View>
                            )}
                        />
                    </View>
                    <View style={{height:70,width:'100%',backgroundColor:'#111',display:'flex',flexDirection:'row',alignItems:'center',position:'relative',borderBottomColor:'#333',borderBottomWidth:1}} >
                        <Image source={{uri:userData.image}} style={{height:50,width:50,borderRadius:30,marginLeft:10}}  />  
                        <View style={{height:'100%',display:'flex',flexDirection:'column',justifyContent:'center',marginLeft:10}} >
                            <Text style={{color:"white",fontFamily:'RubikMedium',fontSize:16,maxWidth:(width/2),overflow:'hidden'}} numberOfLines={1} >{capFirstChar(userData.firstName)}  {capFirstChar(userData.lastName)}</Text>
                            <View style={{display:'flex',flexDirection:'row',alignItems:'center'}} >
                                <Text style={{color:"white",fontFamily:'RubikMedium',fontSize:16,marginRight:6}} >{userData.rating.toFixed(1)}</Text>
                                <Image style={{height:12,width:12,tintColor:'#fcc200',marginBottom:2}} source={require('../../../../assets/imgs/star.png')} />
                            </View>
                        </View>

                        <TouchableOpacity style={{position:'absolute',right:10,zIndex:2,transform:[{rotate:"90deg"}]}} onPress={() => {bottomSheetRef.current?.expand();seperatorInd.value = 1}} >
                            <Back style={{height:30,width:30}} fill="#fff"  />  
                        </TouchableOpacity>
                    </View>

                    {/*  */}
                    {/* Description */}
                    {/*  */}
                    <Text style={{color:'white',fontFamily:'RubikMedium',fontSize:28,marginLeft:20,width:(width - 40),marginTop:10}} numberOfLines={isExpanded ? undefined : 2} >{capFirstChar(gig.title)}</Text>
                    <Text style={{color:'white',fontFamily:'RubikLight',fontSize:16,marginLeft:20,width:(width - 40),marginTop:15}} ellipsizeMode="tail" numberOfLines={isExpanded ? undefined : 5}  >{gig.description}</Text>
                    {/* decoy */}
                    <Text style={{color:'white',fontFamily:'RubikLight',fontSize:16,marginLeft:20,width:(width - 40),marginTop:15,position:'absolute',zIndex:-1,opacity:0}} ellipsizeMode="tail"  onTextLayout={onTextLayout} >{gig.description}</Text> 
                    {/* decoy */}
                    {showReadMore?
                    <TouchableOpacity onPress={() => setIsExpanded(!isExpanded)} >
                        <Text style={{color:'#4CAF50',fontFamily:'RubikMedium',fontSize:16,marginLeft:20,width:(width - 40),marginTop:7}}  >{!isExpanded?'Savoir plus':'Masquer'}</Text>
                    </TouchableOpacity>:null}
                    {/*  */}
                    {/* End Description */}
                    {/*  */}

                    {/*  */}
                    {/* Plans */}
                    {/*  */}
                    {gig.type === 0?<View>
                        <View style={{width:'100%',height:57,borderTopWidth:1,borderBottomWidth:3,borderColor:'#333',marginTop:20,display:'flex',flexDirection:'row',position:'relative'}} >
                            <TouchableOpacity onPress={()=>choosePlan(0)} style={{width:'33.333%',height:'100%',alignItems:"center",justifyContent:'center'}} >
                                <Text style={{color:planChosen === 0?"#4CAF50":"#999",fontFamily:'RubikMedium',fontSize:19,marginRight:6,maxWidth:'100%',overflow:'hidden'}} >DH <Text style={{color:planChosen === 0?"white":"#999"}}>{getParsedNumber(gig.plans.basic.price)}</Text></Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>choosePlan(1)} style={{width:'33.333%',height:'100%',alignItems:"center",justifyContent:'center'}} >
                                <Text style={{color:planChosen === 1?"#4CAF50":"#999",fontFamily:'RubikMedium',fontSize:19,marginRight:6,maxWidth:'100%',overflow:'hidden'}} >DH <Text style={{color:planChosen === 1?"white":"#999"}}>{getParsedNumber(gig.plans.standard.price)}</Text></Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>choosePlan(2)} style={{width:'33.333%',height:'100%',alignItems:"center",justifyContent:'center'}} >
                                <Text style={{color:planChosen === 2?"#4CAF50":"#999",fontFamily:'RubikMedium',fontSize:19,marginRight:6,maxWidth:'100%',overflow:'hidden'}} >DH <Text style={{color:planChosen === 2?"white":"#999"}}>{getParsedNumber(gig.plans.premium.price)}</Text></Text>
                            </TouchableOpacity>
                            <Animated.View style={[{position:'absolute',bottom:-3,height:3,width:'33.333%',borderRadius:3,backgroundColor:'#4CAF50'},indicatorStyle]} ></Animated.View>
                        </View>
                        
                        <View style={{width:(width - 40),marginTop:15,marginLeft:20}} >
                            <Text style={{color:'white',fontFamily:'RubikMedium',fontSize:23,maxWidth:'100%'}} numberOfLines={2} >{capFirstChar(plan.title)}</Text>
                            <Text style={{color:'white',fontFamily:'RubikLight',fontSize:16,maxWidth:'100%',marginTop:10}} >{capFirstChar(plan.description)}</Text>
                        </View>
                    </View>:null}


                    {gig.type === 1?<View style={{width:'100%',borderTopWidth:1,borderColor:'#333',marginTop:20,alignItems:'center'}} >
                        <Text style={{fontFamily:'RubikMedium',color:'white',fontSize:27,marginTop:20}} >{getParsedNumber(gig.price)} <Text style={{fontFamily:'RubikMedium',color:'#4CAF50'}} >DH</Text> / heur</Text>
                    </View>:null}

                    {gig.type === 2?<View style={{width:'100%',borderTopWidth:1,borderColor:'#333',marginTop:20,alignItems:'center'}} >
                        <Text style={{fontFamily:'RubikMedium',color:'#999',fontSize:27,marginTop:20}} >Prix non précisé</Text>
                    </View>:null}
                    

                    <TouchableOpacity
                            onPress={()=>next()}
                            style={{
                                width: '80%',
                                height: 50,
                                backgroundColor: '#4CAF50',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: 12,
                                marginTop:30,
                                alignSelf:'center'
                            }}
                    >
                        <Text style={{ color: '#FFF', fontSize: 18, fontFamily: 'RubikBold' }}>CONTINUER</Text>
                    </TouchableOpacity>
                    
                    {/*  */}
                    {/* End Plans */}
                    {/*  */}

                    <View style={{height:30,width:'100%',borderTopWidth:1,borderBottomWidth:1,backgroundColor:'#111',borderColor:'#333',marginTop:20}} ></View>

                    <View style={{width:'100%',position:'relative',paddingBottom:40}} >
                        <Text style={{color:"white",fontFamily:'RubikMedium',fontSize:21,marginLeft:20,marginTop:10}} >{getParsedNumber(gig.ratings)} Avis</Text>

                        <View style={{display:'flex',flexDirection:'row',alignItems:'center',marginLeft:20,marginTop:10,position:'absolute',right:10}} >
                            <Text style={{color:"white",fontFamily:'RubikMedium',fontSize:23,marginRight:6}} >{userData.rating.toFixed(1)}</Text>
                            <Image style={{height:18,width:18,tintColor:'#fcc200',marginBottom:2}} source={require('../../../../assets/imgs/star.png')} />
                        </View>

                        <FlatList
                            data={ratings}
                            keyExtractor={(item) => item.id}
                            horizontal
                            pagingEnabled
                            showsHorizontalScrollIndicator={false}
                            snapToInterval={width}
                            snapToAlignment="center"
                            decelerationRate="fast"
                            
                            renderItem={({ item }) => (
                                <View style={{ width:width,marginTop:15,paddingLeft:10 }}>
                                    <View style={{width:(width - 50),height:(width - 200),borderRadius:12,backgroundColor:'#2c2c2c',marginLeft:10}} >
                                        <View style={{display:'flex',flexDirection:'row',alignItems:'center',height:70}} >
                                            <Image source={{uri:item.image}} style={{height:50,width:50,borderRadius:30,marginLeft:10}}  />  
                                            <View style={{height:'100%',display:'flex',flexDirection:'column',justifyContent:'center',marginLeft:10}} >
                                                <Text style={{color:"white",fontFamily:'RubikMedium',fontSize:16,maxWidth:(width/2),overflow:'hidden'}} numberOfLines={1} >{capFirstChar(item.firstName)}  {capFirstChar(item.lastName)}</Text>
                                                <View style={{display:'flex',flexDirection:'row',alignItems:'center'}} >
                                                    <Text style={{color:"white",fontFamily:'RubikMedium',fontSize:16,marginRight:6}} >{item.rating}</Text>
                                                    {
                                                        Array(item.rating).fill(1).map((_,i)=>{
                                                            return(
                                                                <Image key={`${i}`} style={{height:12,width:12,tintColor:'#fcc200',marginBottom:2,marginRight:3}} source={require('../../../../assets/imgs/star.png')} />
                                                            )
                                                        })
                                                    }
                                                </View>
                                            </View>
                                        </View>
                                        <Text style={{color:'white',fontFamily:'RubikRegular',fontSize:15,paddingHorizontal:20}} numberOfLines={4} >{item.review}</Text>
                                        <Text style={{position:'absolute',bottom:10,right:10,color:'#999',fontFamily:'RubikLight'}} >{timeAgo(item.time)}</Text>
                                    </View>
                                    
                                </View>
                            )}
                        />
                    </View>




                </ScrollView>

                <Animated.View style={[{position:'absolute',top:0,left:0,width:'100%',height:'100%',backgroundColor:'rgba(0,0,0,0.4)'},seperatorStyle]} >
                    <TouchableOpacity onPress={()=>bottomSheetRef.current?.close()} style={{height:'100%',width:'100%'}} ></TouchableOpacity>
                </Animated.View>

                <BottomSheet onChange={(index) => {index === -1?seperatorInd.value = 0:null }} backgroundStyle={{ backgroundColor: "#1e1e1e" }} handleIndicatorStyle={{ backgroundColor: "white" }} enablePanDownToClose ref={bottomSheetRef} index={-1} snapPoints={snapPoints}>
                    <BottomSheetView style={{flex:1,paddingHorizontal:20,alignItems:'center',backgroundColor:'#1e1e1e',zIndex:2}}>
                        <View style={{height:70,width:width,display:'flex',flexDirection:'row',alignItems:'center',position:'relative',borderBottomColor:'#333',borderBottomWidth:1}} >
                            <Image source={{uri:userData.image}} style={{height:50,width:50,borderRadius:30,marginLeft:10}}  />  
                            <View style={{height:'100%',display:'flex',flexDirection:'column',justifyContent:'center',marginLeft:10}} >
                                <Text style={{color:"white",fontFamily:'RubikMedium',fontSize:16,maxWidth:(width/2),overflow:'hidden'}} numberOfLines={1} >{capFirstChar(userData.firstName)}  {capFirstChar(userData.lastName)}</Text>
                                <View style={{display:'flex',flexDirection:'row',alignItems:'center'}} >
                                    <Text style={{color:"white",fontFamily:'RubikMedium',fontSize:16,marginRight:6}} >{userData.rating.toFixed(1)}</Text>
                                    <Image style={{height:12,width:12,tintColor:'#fcc200',marginBottom:2}} source={require('../../../../assets/imgs/star.png')} />
                                </View>
                            </View>

                            <TouchableOpacity style={{position:'absolute',right:10,zIndex:2}} onPress={() => {bottomSheetRef.current?.expand();seperatorInd.value = 1}} >
                                <Text style={{color:"#4CAF50",fontFamily:'RubikMedium',fontSize:16,marginRight:6}} >Contacter</Text> 
                            </TouchableOpacity>

                            
                            
                        </View>
                        <Text style={{color:"white",alignSelf:'start',fontFamily:'RubikMedium',fontSize:19,marginTop:15}} >Description sur l'utilisateur</Text>
                        <View style={{width:'100%',height:2,backgroundColor:'#333',marginTop:15}} ></View>
                        <Text style={{color:"white",alignSelf:'start',fontFamily:'RubikLight',fontSize:15,marginTop:15}} >{userData.description}</Text>
                        
                    </BottomSheetView>
                </BottomSheet>
            </View>
        </GestureHandlerRootView>
    )
}