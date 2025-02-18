import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Keyboard, TouchableWithoutFeedback, Image } from 'react-native';
import Man from '../../../assets/imgs/manWalking.svg';


export default function LoginScreen({ navigation }) {
  const [phone, setPhone] = useState('');

  const handleNext = () => {
    if (phone.length < 9) {
      Alert.alert('Invalid Number', 'Please enter a valid phone number.');
      return;
    }
    Alert.alert('Success', `Phone number entered: +212${phone}`);
    navigation.navigate('ConfirmCode');
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#1E1E1E' }}>
        
        {/* Text Logo */}
        <View style={{width:155, marginBottom: 40,position:"relative",display:'flex',flexDirection:'column',alignItems:"center",justifyContent:"center"}} >
            <View style={{display:"flex",flexDirection:"row",alignItems:'center',justifyContent:"center"}} >
                <Text style={{ color: '#4CAF50',fontFamily:'RubikMedium', fontSize: 32, fontWeight: 'bold' }}>meak </Text>
                <View style={{marginBottom:0}} ><Man  style={{width:32,height:32}} /></View>
            </View>
            <View style={{width:'80%',position:'absolute',bottom:-2,height:4,backgroundColor:'#4CAF50',borderRadius:5,marginTop:5}} ></View>
        </View>
        

        {/* Phone Input Container */}
        <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#2C2C2C', borderRadius: 12, paddingHorizontal: 15, height: 50, width: '80%', borderWidth: 1, borderColor: '#555' }}>
          <Text style={{ color: '#FFF',fontFamily:'RubikMedium', fontSize: 18, marginRight: 8 }}>+212</Text>
          <TextInput
            style={{ flex: 1, fontSize: 18, color: '#FFF',fontFamily:'RubikRegular', }}
            placeholder="Phone number"
            placeholderTextColor="#888"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
            maxLength={9}
          />
        </View>

        {/* Next Button */}
        <TouchableOpacity
          onPress={handleNext}
          style={{
            marginTop: 20,
            width: '80%',
            height: 50,
            backgroundColor: '#4CAF50',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 12,
            shadowColor: '#000',
            shadowOpacity: 0.2,
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 4,
            elevation: 5,
          }}
        >
          <Text style={{ color: '#FFF',fontFamily:'RubikMedium', fontSize: 18, fontWeight: 'bold' }}>SUIVANT</Text>
        </TouchableOpacity>
        <Text style={{ color: '#999',fontFamily:'RubikMedium', fontSize: 12, marginRight: 8,position:'absolute',bottom:30,textAlign:'center' }}>En appuyant sur SUIVANT, vous acceptez nos Conditions Générales.</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}
