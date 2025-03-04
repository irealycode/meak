import React, { useState,useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert, Keyboard, TouchableWithoutFeedback } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Animated, { Easing, withTiming, useSharedValue, useAnimatedStyle } from 'react-native-reanimated';
import { useThemeColors } from '../../Imps';
const {color0,color1,color2,color3,color4,color5,scndBGColor,colorW0,textColor,shadowColor,shadowColor1} = useThemeColors()


export default function RegistrationScreen2({ navigation }) {
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState('');
  const [category,setCategory] = useState(null);
  const getAway = useSharedValue(0);

  useEffect(() => {
    // Add event listeners for keyboard events
    const keyboardDidShowListener = Keyboard.addListener('keyboardWillShow', () => {
        getAway.value = 300
    });
    const keyboardDidHideListener = Keyboard.addListener('keyboardWillHide', () => {
        getAway.value = 0
    });

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleSubmit = () => {
    if (!image || !description) {
      Alert.alert('Missing Information', 'Please upload a photo and enter a description.');
      return;
    }
    // navigation.navigate('NextScreen');
  };

  const goChooseCategory = () =>{
    navigation.navigate('ChooseCategory',{chooseCategory:chooseCategory});
  }

  const chooseCategory = (cat) =>{
    setCategory(cat)
  }

  const style = useAnimatedStyle(() => {
    return {
        paddingBottom:withTiming(getAway.value, {duration: 300,easing:Easing.bezier(0.5, 0.01, 0, 1)})
    };
  });

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Animated.View style={[{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: color1, padding: 20 },style]}>
        <Text style={{ color: '#4CAF50', fontSize: 32, fontFamily: 'RubikBold', marginBottom: 40 }}>
          Completez
        </Text>

        <TouchableOpacity onPress={pickImage} style={{ marginBottom: 20, alignItems: 'center' }}>
          <View
            style={{
              width: 120,
              height: 120,
              borderRadius: 60,
              backgroundColor: color5,boxShadow:`0px 0px 10px ${shadowColor1}`,
              justifyContent: 'center',
              alignItems: 'center',
              overflow: 'hidden',
            }}
          >
            {image ? (
              <Image source={{ uri: image }} style={{ width: '100%', height: '100%' }} />
            ) : (
              <Text style={{ color: '#888', fontSize: 16, fontFamily: 'RubikRegular' }}>Ajouter Photo</Text>
            )}
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>goChooseCategory()} style={{ width: '80%', height: 50, backgroundColor: color5,boxShadow:`0px 0px 10px ${shadowColor1}`, justifyContent: 'center', alignItems: 'center', borderRadius: 12, marginBottom:10 }}>
            <Text style={{ color: !category?'#888':'#4CAF50', fontSize: 18, fontFamily: 'RubikBold' }}>{category?.title||'Choisir une catégorie'}</Text>
        </TouchableOpacity>

        <View style={{ marginBottom: 20, width: '80%' }}>
          <TextInput
            style={{
              backgroundColor: color5,boxShadow:`0px 0px 10px ${shadowColor1}`,
              height: 100,
              borderRadius: 12,
              color: textColor,
              paddingLeft: 15,
              paddingTop: 10,
              fontFamily: 'RubikRegular',
              fontSize: 18,
              textAlignVertical: 'top',
            }}
            placeholder="Décrivez-vous..."
            placeholderTextColor="#888"
            value={description}
            onChangeText={setDescription}
            multiline
          />
        </View>

        <TouchableOpacity
          onPress={()=>{getAway.value = 300}}
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
          <Text style={{ color: '#FFF', fontSize: 18, fontFamily: 'RubikBold' }}>SUIVANT</Text>
        </TouchableOpacity>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
}


