import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps'

const {width, height} = Dimensions.get('window')
const Map = () => {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} provider={PROVIDER_GOOGLE} initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}/>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center'
    },
    map:{
        width: width,
        height: height
    }
})
export default Map