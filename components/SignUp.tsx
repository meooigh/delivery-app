import {
  View,
  Text,
  StyleSheet,
  TextInput,
  StatusBar,
  Dimensions,
  TouchableOpacity
} from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackPrams } from '../App'
const { width, height } = Dimensions.get('window')

type props = NativeStackScreenProps<RootStackPrams, 'SignUp'>;

const SignUp = ({ navigation }: props) => {
  return (
    <View style={styles.container}>
      <View style={styles.frameSignUp}>
        <View style={{
          flexDirection: 'row',
          marginTop: 30,
          justifyContent: 'space-around',
        }}>
          <TextInput placeholder='Ho' style={styles.ht} />
          <TextInput placeholder='Ten' style={styles.ht} />
        </View>
        <View style={{
          marginTop: 30,
          alignItems: 'center'
        }}>
          <TextInput placeholder='Account' style={{
            height: 40,
            width: '90%',
            padding: 5,
            borderRadius: 5,
            borderWidth: 1
          }} />

        </View>
        <View style={{
          flexDirection: 'row',
          marginTop: 30,
          justifyContent: 'space-around',

        }}>
          <TextInput placeholder='Mat Khau' style={styles.ht} />
          <TextInput placeholder='Xac Nhan' style={styles.ht} />
        </View>
        <View style={{
          marginTop: 50,
          flexDirection: 'row',
          justifyContent: 'space-around'
        }}>
          <TouchableOpacity onPress={() => navigation.navigate('SignIn')} style={{
            height: 50,
            width: 80,
            borderWidth: 1,
            borderRadius: 5,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Sign in</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{
            height: 50,
            width: 80,
            borderWidth: 1,
            borderRadius: 5,
            backgroundColor: '#fa8655',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#6c6c73",
    alignItems: 'center',
    justifyContent: 'center'
  },
  frameSignUp: {
    height: height - 50,
    width: width - 30,
    borderRadius: 20,
    borderColor: "#6edde0",
    backgroundColor: 'white',
  },
  ht: {
    height: 40,
    width: "40%",
    borderWidth: 1,
    padding: 5,
    borderRadius: 5
  }
})
export default SignUp