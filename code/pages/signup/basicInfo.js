import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert,Keyboard, Switch, TouchableWithoutFeedback } from 'react-native';
import { useThemeColors } from '../../Imps';
const {color0,color1,color2,color3,color4,color5,scndBGColor,colorW0,textColor,shadowColor,shadowColor1} = useThemeColors()

export default function RegistrationScreen({navigation}) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [isSeller, setIsSeller] = useState(false);
  const [invalid,setInvalid] = useState(-1);

    const handleSubmit = () => {
        if (!firstName || !lastName || !birthDate) {
            Alert.alert('Missing Information', 'Please fill out all fields.');
            return;
        }
    
        const role = isSeller ? 'Seller' : 'Buyer';
          navigation.navigate('Register2');
        
    };

    const chooseBirthDate = (str) =>{
        if (str) {
          setInvalid(-1)
        }
        if (str.length <= 10) {
          if (str.length >= 2 && (parseInt(str.slice(0,2)) <= 0 || parseInt(str.slice(0,2)) > 31)) {
            setInvalid(2)
          }
          if (str.length === 2 && str.length > birthDate.length) {
            setBirthDate(str + '/')
            return
          }
          if (str.length === 5 && (parseInt(str.slice(3,5)) <= 0 || parseInt(str.slice(3,5)) > 12)) {
            setInvalid(2)
          }
          if (str.length === 5 && str.length > birthDate.length) {
              setBirthDate(str + '/')
              return
          }
          setBirthDate(str)
          if (str.length === 10 && (parseInt(str.slice(-4)) <= (new Date().getFullYear() - 100) || parseInt(str.slice(-4)) > (new Date().getFullYear()))) {
              setInvalid(2)
              return
          }
          return
        }
        return

    }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: color1, padding: 20 }}>
      
      <Text style={{ color: '#4CAF50', fontSize: 32, fontFamily: 'RubikBold', marginBottom: 40 }}>
        S'inscrire
      </Text>

      <View style={{ marginBottom: 20, width: '80%' }}>
        <TextInput
          style={{
            backgroundColor: color5,
            boxShadow:`0px 0px 10px ${shadowColor1}`,
            height: 50,
            borderRadius: 12,
            color: textColor,
            paddingLeft: 15,
            fontFamily: 'RubikRegular',
            fontSize: 18,
          }}
          placeholder="Votre prenom"
          placeholderTextColor="#888"
          value={firstName}
          onChangeText={setFirstName}
        />
      </View>

      <View style={{ marginBottom: 20, width: '80%' }}>
        <TextInput
          style={{
            backgroundColor: color5,
            boxShadow:`0px 0px 10px ${shadowColor1}`,
            height: 50,
            borderRadius: 12,
            color: textColor,
            paddingLeft: 15,
            fontFamily: 'RubikRegular',
            fontSize: 18,
          }}
          placeholder="Votre nom"
          placeholderTextColor="#888"
          value={lastName}
          onChangeText={setLastName}
        />
      </View>

      {/* Birth Date */}
      <View style={{ marginBottom: 20, width: '80%' }}>
        <TextInput
          style={{
            backgroundColor: color5,
            boxShadow:`0px 0px 10px ${shadowColor1}`,
            height: 50,
            borderRadius: 12,
            color: invalid === 2?'red':textColor,
            paddingLeft: 15,
            fontFamily: 'RubikRegular',
            fontSize: 18,
          }}
          placeholder="Date naissance (dd/mm/yyyy)"
          placeholderTextColor="#888"
          value={birthDate}
          onChangeText={chooseBirthDate}
          keyboardType="number-pad"
        />
      </View>

      {/* Role Selection: Switch */}
      <View style={{ marginBottom: 30, width: '80%', flexDirection: 'column', alignItems: 'start' }}>
        <Text style={{ color: '#FFF', fontSize: 18, fontFamily: 'RubikMedium', marginRight: 10 }}>
        Choisissez votre rôle :
        </Text>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop:15}} >
            <Switch
            value={isSeller}
            onValueChange={setIsSeller}
            trackColor={{ false: '#4CAF50', true: '#4CAF50' }}
            thumbColor="#FFF"
            />
            <Text style={{ color: '#4CAF50', fontSize: 25, fontFamily: 'RubikMedium', marginLeft: 10 }}>
            {isSeller ? 'Vendeur' : 'Acheteur'}
            </Text>
        </View>
      </View>

      {/* Submit Button */}
      <TouchableOpacity
        onPress={handleSubmit}
        style={{
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
        <Text style={{ color: '#FFF', fontSize: 18, fontFamily: 'RubikBold' }}>
        SUIVANT
        </Text>
      </TouchableOpacity>
    </View>
    </TouchableWithoutFeedback>
  );
}