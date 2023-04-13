import { View, Text, StyleSheet, StatusBar, Dimensions, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackPrams } from '../App'

type props = NativeStackScreenProps<RootStackPrams, 'SignIn'>;
const {width, height} = Dimensions.get('window')


const SignIn = ({navigation} : props)=> {
  const [account, setAccount] = React.useState<string>('');
  const [password, setpassword] = React.useState<string>('');

  const login = () =>{
    fetch(`http://10.0.2.2:3000/users/${account}/${password}`,{
      method: 'POST',
      headers:{
        'Accept': 'application/json',
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
        userName: account,
        password: password
      })
    }).then((response) => response.json())
    .then((res) =>{
        if(res.success === true)
        {
          navigation.navigate('HomeScreen',{
            id: res.data.account_id,
            name: res.data.username,
            password: res.data.password
          })
        }
    }).catch((error) =>{
      console.log(error)
    })
  }
  return (
    <View style={styles.container}>
      <View style={styles.frameSignIn}>
        <View style={{alignItems:'center'}}>
          <View style={styles.frameTextIn}>
            <Image source={{
              uri:'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'
            }} style={{height: 50, width: 50}}/>
            <TextInput onChangeText={text => setAccount(text)} placeholder='Enter your account' style={styles.textIn}/>
          </View>
          <View style={styles.frameTextIn}>
            <Image source={{
              uri:'https://cdn-icons-png.flaticon.com/512/9919/9919005.png'
            }} style={{height: 50, width: 50}}/>
            <TextInput onChangeText={text => setpassword(text)} placeholder='Enter your password' style={styles.textIn}/>
          </View>
        </View>
         
        <View style={styles.frameButton}>
          <TouchableOpacity onPress={() => login()} style={styles.touchButton}>
            <Text style={{fontSize: 18, color:'white', fontWeight: 'bold'  }}>Sign in</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchButtonSignUp}>
            <Text style={{fontSize: 18, color:'black', fontWeight: 'bold'  }}>Sign up</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#6c6c73",
    alignItems: 'center',
    justifyContent: 'center'
  },
 frameSignIn: {
    height: height-50,
    width: width-30,
    borderRadius: 20,
    borderColor: "#6edde0",
    backgroundColor: 'white'
 },
 frameTextIn:{
  marginTop: 30,
  flexDirection:'row',
  height: 50,
  borderWidth: 1,
  width: '90%',
 },
 textIn:{
    height: 50,
    width: "100%",
    borderLeftWidth: 1,
    padding: 5
 },
 frameButton:{
  alignItems: 'center',
  marginVertical: 20
 },
 touchButton:{
  backgroundColor: '#fa8655',
  height: 40,
  width: '90%',
  alignItems:'center',
  justifyContent:'center',
  borderRadius: 20,
  marginVertical: 5
 },
 touchButtonSignUp:{
  backgroundColor: 'white',
  height: 40,
  width: '90%',
  alignItems:'center',
  justifyContent:'center',
  borderRadius: 20,
  marginVertical: 5,
  borderWidth: 1,
 }
})
export default SignIn