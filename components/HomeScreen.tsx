import { View, Image, Text, StyleSheet } from 'react-native'
import React from 'react'
import {
  createDrawerNavigator, 
  DrawerContentScrollView, 
  DrawerScreenProps, 
  DrawerItemList,
} from '@react-navigation/drawer';
import HomePage from './HomePage';
import OrdersReceived from './OrdersReceived';
import Revenua from './Revenua';
import News from './News';
import Profile from './Profile';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHippo } from '@fortawesome/free-solid-svg-icons';
import { RootStackPrams } from '../App';



const Drawer = createDrawerNavigator();
type props = DrawerScreenProps<RootStackPrams, 'HomeScreen'>;

const DrawerHeader = () => {
  return (
    <View style={{height: 230}}>
      <View style={{
        height: 150,
        alignItems:'center',
        justifyContent:'center'
      }}>
        <Image source={require('../anh/anh.webp')}
          style={{
            height: 140,
            width: 140,
            borderRadius: 100
          }}
        />
      </View>
      <View style={{
        marginTop: 20,
        flexDirection: 'row',
        justifyContent:'space-around',
        
      }}>
        <Text style={styles.text}>Danh hiệu: Quái xế</Text>
        <Text style={styles.text}>Đánh giá: 10</Text>
      </View>
    </View>
  )
}
const CustomDrawer = (props : any) =>{
  return (
    <DrawerContentScrollView>
      <DrawerHeader />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  )
}

const HomeScreen = ({route}: props) =>{
   
      return (
        <Drawer.Navigator
        drawerContent={(props) =>(
          <CustomDrawer {...props}/>
        )}
          screenOptions={{
            headerShown: false
          }}
        >
          
          <Drawer.Screen
           name = 'Home'
           options={{
            drawerIcon: ({size}) =>(
              <FontAwesomeIcon 
                icon={faHippo}
                size={size}
              />
            )
           }}
           >
            {(props) => <HomePage 
              id={route.params.id}
              name = {route.params.name}
              password= {route.params.password}
              {...props}/>}
           </Drawer.Screen>
          <Drawer.Screen 
            name = 'OrdersReceived' 
            component={OrdersReceived}
            options={{
              drawerIcon: ({focused, size}) =>(
                <FontAwesomeIcon 
                  icon={faHippo}
                  size={size}
                />
              )
             }} />
          <Drawer.Screen 
            name = 'Revenua' 
          component={Revenua}
          options={{
            drawerIcon: ({focused, size}) =>(
              <FontAwesomeIcon 
                icon={faHippo}
                size={size}
              />
            )
           }} />
          <Drawer.Screen 
          name = 'News' 
          component={News}
          options={{
            drawerIcon: ({size}) =>(
              <FontAwesomeIcon 
                icon={faHippo}
                size={size}
              />
            )
           }} />
          <Drawer.Screen 
          name = 'Profile' 
          component={Profile}
          options={{
            drawerIcon: ({focused, size}) =>(
              <FontAwesomeIcon 
                icon={faHippo}
                size={size}
              />
            )
           }} />
        </Drawer.Navigator>
      )
  }
const styles = StyleSheet.create({
    text:{
      color: 'black',
      fontSize: 16
    }
})
export default HomeScreen