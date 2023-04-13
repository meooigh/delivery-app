import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'


const DeliveryItem = (props: any)=> {
  return (
    <TouchableOpacity style={styles.container}>
        <View style={[styles.delivery, styles.shadowStyle]}>
    {/* left side */}
           <View style={styles.leftSide}>
                <FontAwesomeIcon icon={props.image}  size={150} color="black"/>
           </View>
    {/* right side */}
            <View style={styles.rightSide}> 
                <Text style={styles.text}>Tiền nhận: {props.profit}</Text>
                <Text style={styles.text}>Tiền tạm ứng: {props.advanceMoney}</Text>
                <Text style={styles.text}>Nơi nhận hàng: {props.des1}</Text>
                <Text style={styles.text}>Nơi giao hàng: {props.des2}</Text>
                <Text style={styles.text}>Cách nơi nhận hàng: {props.des1To}</Text>
                <Text style={styles.text}>Cách nơi giao hàng: {props.des2To} </Text>
            </View>
        </View>
    </TouchableOpacity>
    
    )
}
const styles = StyleSheet.create({
    container:{
        height: 180,
        width: '100%',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 9
    },
    delivery:{
        height: 180,
        width: '95%',
        backgroundColor: 'white',
        borderRadius: 20,
        flexDirection: 'row',
        shadowColor: 'black',
        marginVertical: 5
    },
    leftSide:{
        height: 180,
        width: '40%',
        backgroundColor: 'white',
        borderRadius: 20
    },
    rightSide:{
        height: 180,
        width: '50%',
        paddingVertical: 5
    },
    text:{
        marginVertical: 4,
        fontSize: 16
    },
    shadowStyle:{
        elevation: 20,
        shadowColor:'blue'
    }
})
export default DeliveryItem