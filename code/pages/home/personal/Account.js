import React from 'react';
import { Text, View, Image, Dimensions, TouchableOpacity,ScrollView, RefreshControl } from 'react-native';
import Back from '../../../../assets/imgs/back.svg'
import { capFirstChar } from '../../../Imps';


let width = Dimensions.get('window').width
export default function Account({navigation}) {
    const [refreching,setRefreshing] = React.useState(false)
    const userData = {
        firstName:'sohaib',
        lastName:'boulaich',
        balance:100,
        image:'https://placehold.co/400x400.png',
        rating:4.7
    }


  const refresh = () =>{
    
    }
  return (
    <View style={{backgroundColor:'#1e1e1e',width:'100%',height:'100%'}} >
      <ScrollView refreshControl={<RefreshControl onRefresh={()=>refresh()} colors={['#4CAF50']} progressBackgroundColor='white' refreshing={refreching} />} showsVerticalScrollIndicator={false} >
        <TouchableOpacity style={{position:'absolute',top:70,left:0,zIndex:2}} onPress={()=>{navigation.goBack()}} >
            <Back style={{height:50,width:50}} fill="#fff"  />  
        </TouchableOpacity>
        
        <View style={{width:'100%',marginTop:30,display:"flex",flexDirection:"row",alignItems:'center',justifyContent:'center',backgroundColor:'#1e1e1e'}} >
            <Image style={{height:80,width:80,borderRadius:100,borderWidth:1,borderColor:'#555',marginLeft:30,marginTop:25}} source={{uri:userData.image}} />
            <View style={{marginLeft:20,marginTop:25}} >
                <Text style={{fontFamily:'RubikMedium',fontSize:25,color:'white',maxWidth:width-150}} numberOfLines={1} >{capFirstChar(userData.firstName)}  {capFirstChar(userData.lastName)}</Text>
                <Text style={{fontFamily:'RubikRegular',fontSize:19,color:'white'}} >Revenue de <Text style={{color:'#4CAF50',fontFamily:'RubikMedium'}} >DH {userData.balance?parseFloat(userData.balance).toFixed(1):'0'}</Text></Text>
            </View>
        </View>
        <Text style={{fontFamily:'RubikMedium',fontSize:25,color:'white',paddingLeft:15,paddingBottom:10,paddingTop:20,borderBottomWidth:1,borderColor:'#555'}} >Général</Text>
        <TouchableOpacity style={{flexDirection:'row',alignItems:'center',padding:14,backgroundColor:'rgb(45,45,45)'}} >
            <Image style={{height:25,width:25,marginLeft:30,tintColor:'#4CAF50'}} source={require('../../../../assets/imgs/dollar.png')} />
            <View>
            <Text style={{fontFamily:'RubikRegular',fontSize:21,color:'white',marginLeft:10}} >Gains</Text>
            </View>
        </TouchableOpacity>
        
        {/* <View style={{width:'70%',height:1,backgroundColor:'#555',marginTop:-1,marginLeft:'15%'}} ></View>        
        
        <TouchableOpacity style={{flexDirection:'row',alignItems:'center',padding:14,backgroundColor:'rgb(45,45,45)'}} >
            <Image style={{height:25,width:25,marginLeft:30,tintColor:'#4CAF50'}} source={require('../../../../assets/imgs/send.png')} />
            <View>
                <Text style={{fontFamily:'RubikRegular',fontSize:21,color:'white',marginLeft:10}} >Messages</Text>
            </View>
        </TouchableOpacity> */}

        <View style={{width:'70%',height:1,backgroundColor:'#555',marginTop:-1,marginLeft:'15%'}} ></View>        

        <TouchableOpacity style={{flexDirection:'row',alignItems:'center',padding:14,backgroundColor:'rgb(45,45,45)'}} >
            <Image style={{height:25,width:25,marginLeft:30,tintColor:'#4CAF50'}} source={require('../../../../assets/imgs/orders.png')} />
            <View>
                <Text style={{fontFamily:'RubikRegular',fontSize:21,color:'white',marginLeft:10}} >Commandes</Text>
            </View>
        </TouchableOpacity>

        <View style={{width:'70%',height:1,backgroundColor:'#555',marginTop:-1,marginLeft:'15%'}} ></View>        

        <TouchableOpacity style={{flexDirection:'row',alignItems:'center',padding:14,backgroundColor:'rgb(45,45,45)'}} >
            <Image style={{height:25,width:25,marginLeft:30,tintColor:'#fcc200'}} source={require('../../../../assets/imgs/diamond.png')} />
            <View>
            <Text style={{fontFamily:'RubikRegular',fontSize:21,color:'#fcc200',marginLeft:10}} >Passer premium</Text>
            </View>
        </TouchableOpacity>
        
        <View style={{width:'70%',height:1,backgroundColor:'#555',marginTop:-1,marginLeft:'15%'}} ></View>        

        <TouchableOpacity onPress={()=>navigation.navigate('YourGIGs')} style={{flexDirection:'row',alignItems:'center',padding:14,backgroundColor:'rgb(45,45,45)'}} >
            <Image style={{height:25,width:25,marginLeft:30,tintColor:'#4CAF50'}} source={require('../../../../assets/imgs/manage.png')} />
            <View>
                <Text style={{fontFamily:'RubikRegular',fontSize:21,color:'white',marginLeft:10}} >Votre GIGs</Text>
            </View>
        </TouchableOpacity>
       
        <Text style={{fontFamily:'RubikMedium',fontSize:25,color:'white',paddingLeft:15,paddingTop:20,paddingBottom:10,borderColor:'#555',borderTopWidth:1,borderBottomWidth:1}} >Offres</Text>
       
        <TouchableOpacity style={{flexDirection:'row',alignItems:'center',padding:14,backgroundColor:'rgb(45,45,45)'}} >
            <Image style={{height:25,width:25,marginLeft:30,tintColor:'#4CAF50'}} source={require('../../../../assets/imgs/jobs.png')} />
            <View>
                <Text style={{fontFamily:'RubikRegular',fontSize:21,color:'white',marginLeft:10}} >Publier des offres d'emploi</Text>
            </View>
        
        </TouchableOpacity>

        <Text style={{fontFamily:'RubikMedium',fontSize:25,color:'white',paddingLeft:15,paddingTop:20,paddingBottom:10,borderColor:'#555',borderTopWidth:1,borderBottomWidth:1}} >Paramètres</Text>
       
        <TouchableOpacity style={{flexDirection:'row',alignItems:'center',padding:14,backgroundColor:'rgb(45,45,45)'}} >
            <Image style={{height:25,width:25,marginLeft:30,tintColor:'#4CAF50'}} source={require('../../../../assets/imgs/account.png')} />
            <View>
                <Text style={{fontFamily:'RubikRegular',fontSize:21,color:'white',marginLeft:10}} >Compte</Text>
            </View>
            
        </TouchableOpacity>

        <View style={{width:'70%',height:1,backgroundColor:'#555',marginTop:-1,marginLeft:'15%'}} ></View>        

        <TouchableOpacity style={{flexDirection:'row',alignItems:'center',padding:14,backgroundColor:'rgb(45,45,45)'}} >
            <Image style={{height:25,width:25,marginLeft:30,tintColor:'#4CAF50'}} source={require('../../../../assets/imgs/pref.png')} />
            <View>
                <Text style={{fontFamily:'RubikRegular',fontSize:21,color:'white',marginLeft:10}} >Préférences</Text>
            </View>
        </TouchableOpacity>

        <Text style={{fontFamily:'RubikMedium',fontSize:25,color:'white',paddingLeft:15,paddingTop:20,paddingBottom:10,borderColor:'#555',borderTopWidth:1,borderBottomWidth:1}} >Ressources</Text>

        <TouchableOpacity style={{flexDirection:'row',alignItems:'center',padding:14,backgroundColor:'rgb(45,45,45)'}} >
            <Image style={{height:25,width:25,marginLeft:30,tintColor:'#4CAF50'}} source={require('../../../../assets/imgs/support.png')} />
            <View>
                <Text style={{fontFamily:'RubikRegular',fontSize:21,color:'white',marginLeft:10}} >Soutien</Text>
            </View>
        </TouchableOpacity>

        <View style={{width:'70%',height:1,backgroundColor:'#555',marginTop:-1,marginLeft:'15%'}} ></View>        

        <TouchableOpacity style={{flexDirection:'row',alignItems:'center',padding:14,paddingBottom:35,backgroundColor:'rgb(45,45,45)'}} >
            <Image style={{height:25,width:25,marginLeft:30,tintColor:'#4CAF50'}} source={require('../../../../assets/imgs/feedback.png')} />
            <View>
              <Text style={{fontFamily:'RubikRegular',fontSize:21,color:'white',marginLeft:10}} >Feedback</Text>
            </View>
        </TouchableOpacity>
           
      </ScrollView>
        
    </View>
  );
}

