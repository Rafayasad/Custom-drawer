import { createDrawerNavigator } from '@react-navigation/drawer';
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../components/Home';
import About from '../../components/About';
import DrawerContent from '../../components/DrawerContent';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function Navigation(){
    return <NavigationContainer>
            <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}>
                <Drawer.Screen  name='home' component={Home}/>
                <Drawer.Screen  name='about' component={About}/>
            </Drawer.Navigator>
    </NavigationContainer>
}