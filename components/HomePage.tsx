import { 
   View,
   Text,
   StyleSheet,
   TouchableOpacity, 
   FlatList
} from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import DeliveryItem from './DeliveryItem';
import { fakeData } from '../DummyData';
import {faHippo} from '@fortawesome/free-solid-svg-icons'

const HomePage = (props : any)=> {
  const [isSelected, setIsSelected] = React.useState<string>('all');

  return (
      <View style={styles.container}>
      {/* Header's background */}
        <View style={styles.x1}>
      {/* image and name of app */}
          <View style={{
            marginHorizontal: 30,
            flexDirection: 'row',
            justifyContent: 'space-around'
          }}>
          <View>
          <Text style={{color:'white', fontSize: 25, fontWeight: 'bold'}}>{props.name}</Text>
            <View style={{height: 60, width: 60, borderWidth: 1, borderRadius: 30, marginLeft: 20, backgroundColor:'white'}}>
              <FontAwesomeIcon icon={faHippo} size={50}/>
            </View>
            </View>
      {/*driver's status */}
          <View style={{
            marginTop: 20
          }}>
            <Text style={{color:'white'}}>Status will be here</Text>
          </View>
        </View>
      {/* selcet header's button */}
        <View style={{
          marginTop: 30,
          flexDirection: 'row',
          marginLeft: 5
        }}>
          <TouchableOpacity onPress={() => setIsSelected('all')} style={{
            height: 25, 
            width: 80,
            backgroundColor: isSelected === 'all' ? '#3cb5e8': 'white', 
            alignItems:'center', 
            justifyContent:'center',
            borderRadius: 10 ,
            borderWidth: 1,
            marginHorizontal: 10
          }}>
            <Text>All</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setIsSelected('distance')} style={{
            height: 25, 
            width: 80,
            backgroundColor: isSelected==='distance'? '#3cb5e8': 'white', 
            alignItems:'center', 
            justifyContent:'center',
            borderRadius: 10 ,
            borderWidth: 1
          }}>
            <Text>Distance</Text>
          </TouchableOpacity>
        </View>
        </View>
      {/* delivery items */}
        <View style={styles.deliveryBackground}>
            <FlatList
              data={fakeData}
              renderItem={({item}) =>(
                  <View>
                      <DeliveryItem
                        profit = {item.profit}
                        advanceMoney = {item.advanceMoney}
                        des1 = {item.destination1}
                        des2 ={item.destination2}
                        des1To = {item.distanceToDestination1}
                        des2To = {item.distanceToDestination2}
                        image = {item.image}
                      />
                  </View>
              )}
              keyExtractor={(item: any) => item.id}
             />
        </View>
      {/* distance */}
        <View>

        </View>
      </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'white',
  },
  x1:{
    height: 150,
    width: '100%',
    backgroundColor: '#52a2f2',
  },
  deliveryBackground:{
    marginTop: 20
  }
})
 
export default HomePage