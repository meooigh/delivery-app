import { StyleSheet, Text, View } from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { NavigationContainer} from '@react-navigation/native';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import HomeScreen from './components/HomeScreen';
import Map from './components/Map';

export type RootStackPrams ={
  HomeScreen:{
    id: number,
    name: string,
    password: string
  };
  SignIn: undefined;
  SignUp: undefined;
  map: undefined
}

const stack = createNativeStackNavigator<RootStackPrams>();
export default function App(): JSX.Element {
 
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName='SignIn' screenOptions={{
        headerShown: false
      }}>
        <stack.Screen name='SignIn' component={SignIn}/>
        <stack.Screen name='SignUp' component={SignUp}/>
        <stack.Screen name = 'HomeScreen' component={HomeScreen} />
        <stack.Screen name='map' component={Map}/>
      </stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
