import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './code/pages/login/Login';
import { useFonts, Rubik_300Light, Rubik_400Regular, Rubik_500Medium, Rubik_700Bold } from '@expo-google-fonts/rubik';
// import * as Font from 'expo-font';
import { ActivityIndicator } from 'react-native';
import RegistrationScreen from './code/pages/signup/basicInfo';
import ConfirmCodeScreen from './code/pages/login/ConfirmCode';
import RegistrationScreen2 from './code/pages/signup/BasicInfo2';
import ChooseCategory from './code/pages/signup/ChooseCat';
import HomeRouter from './code/pages/home/Home';


const Stack = createStackNavigator();

export default function App() {

  let [fontsLoaded] = useFonts({
    RubikLight: Rubik_300Light,
    RubikRegular: Rubik_400Regular,
    RubikMedium: Rubik_500Medium,
    RubikBold: Rubik_700Bold,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#4CAF50" style={{ flex: 1 }} />;
  }
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}} >
          <Stack.Screen name="Home" component={HomeRouter} />
          <Stack.Screen name="Login" component={LoginScreen}  />
          <Stack.Screen name="ConfirmCode" component={ConfirmCodeScreen}  />
          <Stack.Screen name="Register" component={RegistrationScreen}  />
          <Stack.Screen name="Register2" component={RegistrationScreen2}  />
          <Stack.Screen name="ChooseCategory" component={ChooseCategory}  />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

