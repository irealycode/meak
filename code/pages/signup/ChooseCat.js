import React from 'react';
import { Text, View,Image, TouchableOpacity } from 'react-native';
import { Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Back from '../../../assets/imgs/back.svg'
import Other from '../../../assets/imgs/other.svg'

let width = Dimensions.get('window').width
export default function ChooseCategory({navigation,route}) {
    const {chooseCategory} = route.params
  

    chooseCategory({name:'other',title:'Autre'})
    
    const categories = [   {title:'Ouvriers & Artisans',children:[
        {name:'carpenter',
        image:require('../../../assets/imgs/carpenter.png'),
        title:'Charpentier',
        description:'all wood like works'},
        
        {name:'vehicle cleaner',
        image:require('../../../assets/imgs/carcleaning.png'),
        title:'Nettoyeur de véhicules',
        description:'cleaning all types and sizes of vehicles'},
        
        {name:'plumber',
        image:require('../../../assets/imgs/plumber.png'),
        title:'Plombier',
        description:'cleaning, repair, water pipes, baths, toilets'},
        
        {name:'iron worker',
        image:require('../../../assets/imgs/welder.png'),
        title:'Ferronnier',
        description:'all iron related jobs'},
        
        {name:'painter',
        image:require('../../../assets/imgs/painter.png'),
        title:'Peintre',
         description:'paint surfaces such as walls and doors'},
        
        {name:'construction worker',
        image:require('../../../assets/imgs/constructionWorker.png'),
        title:'Ouvrier du bâtiment',
        description:'broken wall?'}]},
    
        {title:'Santé',children:[
        {name:'nurse',
        image:require('../../../assets/imgs/nurse.png'),
        title:'Infirmier',
        description:'need a nurse?'},
        
        {name:'caregiver',
        image:require('../../../assets/imgs/caregiver.png'),
        title:'Aide-soignant',
        description:'i will take care of you'},
        
        {name:'personal trainer',
        image:require('../../../assets/imgs/pet.png'),
        title:'Coach sportif',
        description:'move your fat ass'},
        
        {name:'physical therapist',
        image:require('../../../assets/imgs/pht.png'),
        title:'Kinésithérapeute',
        description:'legs not working??'},
        
        {name:'massage therapist',
        image:require('../../../assets/imgs/mat.png'),
        title:'Massothérapeute',
        description:'need head?'}]},
        
        {title:'Education',children:[
        {name:'tutor',
        image:require('../../../assets/imgs/tutor.png'),
        title:'Tuteur / Tuteur en ligne',
        description:'you need extra learning hours?'},
        
        {name:'teacher',
        image:require('../../../assets/imgs/teacher.png'),
        title:'Enseignant(e)',
        description:'missing a teacher in your school?'},
        
        {name:'professor',
        image:require('../../../assets/imgs/professor.png'),
        title:'Professeur',
        description:'missing a professor in your university?'}]},
    
        {title:'Transport & Logistique', 
    
        children:[{name:'truck driver',
        image:require('../../../assets/imgs/truck.png'),
        title:'Routier',
        description:'i will drive to the end of the world'},
        
        {name:'mover',
        image:require('../../../assets/imgs/mover.png'),
        title:'Déménageur',
        description:'move it move it'},
        
        {name:'personal driver',
        image:require('../../../assets/imgs/ped.png'),
        title:'Chauffeur privé',
        description:'want to go somewhere?'}]}
    ]

    
    
  return (
    <View style={{width:'100%',height:'100%',backgroundColor:'#1E1E1E'}} >
      <View style={{backgroundColor:'#1E1E1E',height:50,width:'100%'}} ></View>
      <View style={{flexDirection:'row',alignItems:'center',borderBottomWidth:2,paddingBottom:12,borderColor:'#4CAF50',backgroundColor:'#1E1E1E'}} >
        <TouchableOpacity style={{marginHorizontal:15}} onPress={()=>{chooseCategory('other');navigation.goBack()}} >
          <Back style={{height:50,width:50}}  />  
        </TouchableOpacity>
        <Text style={{fontFamily:'RubikMedium',fontSize:35,color:'white'}} >Categories</Text>
      </View>
    <ScrollView showsVerticalScrollIndicator={false} >
        {
            categories.map((cat,i)=>{
                return(
                <View key={cat.title} style={{width:'100%'}} >
                    <Text style={{fontFamily:'RubikRegular',fontSize:23,color:'white',alignSelf:'center',borderBottomWidth:0.4,borderTopWidth:i!==0?0.4:0,width:'100%',textAlign:'center',paddingVertical:7,borderColor:'gray'}} >{cat.title}</Text>
                    {
                        cat.children.map((child)=>{
                            return(
                                <TouchableOpacity key={child.name} onPress={()=>{chooseCategory({name:child.name,title:child.title});navigation.goBack()}} style={{flexDirection:'row',alignItems:'center',marginTop:7,marginBottom:7}} >
                                    <Image style={{height:45,width:45,marginLeft:20}} source={child.image} />
                                    <View>
                                    <Text style={{fontFamily:'RubikRegular',fontSize:23,color:'white',marginLeft:20}} >{child.title}</Text>
                                    <Text style={{fontFamily:'JL',fontSize:16,color:'gray',marginLeft:20,width:width-85}} >{child.description}</Text>
                                    </View>
                                </TouchableOpacity>
                            )
                        })
                    }
                    
                </View>
                )
            })
        }

        
    </ScrollView>

    </View>
  );
}


