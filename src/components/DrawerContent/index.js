import React from 'react';
import { View } from 'react-native';
import { 
    DrawerContentScrollView ,
    DrawerItem 
} from '@react-navigation/drawer';
import {
    Avatar,
    Title,
    Text,
    Switch,
    Drawer,
} from 'react-native-paper'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Home from '../Home';
import About from '../About';

export default function DrawerContent(props){
    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={{flex:1}}>

                    <Drawer.Section style={{marginTop:1}}>
                    <View style={{paddingLeft:20}}>
                        <View style={{flexDirection:'row',marginTop:15}}>
                            <Avatar.Image
                            source={{
                                uri:'https://scontent.fkhi1-1.fna.fbcdn.net/v/t1.6435-9/206794796_1817102075127261_8372042873344739012_n.jpg?_nc_cat=110&ccb=1-4&_nc_sid=09cbfe&_nc_eui2=AeG3xSkRvTa-ez3MCmYIeUYSy51BI-AXwuPLnUEj4BfC4yhRvsbQcGKE65aleXmJVSQ56yct5CALeKmG-bRgflzl&_nc_ohc=R59fC4IqGSYAX-FRzsP&_nc_ht=scontent.fkhi1-1.fna&oh=f1a18042d07df659ba1cb7140bfe956e&oe=613803CE'
                            }}
                            size={70}
                            />
                        <View style={{marginLeft:10}}>
                            <Title style={{fontSize:16,marginTop:15}}>Rafay Asad</Title>
                        </View>
                        </View>
                    </View>
                    </Drawer.Section>

                    <Drawer.Section style={{marginTop:15}}>
                        <DrawerItem
                        icon={({color,size})=>(
                            <Icon
                            name='home-outline'
                            color={color}
                            size={size}
                            />
                            )}
                            label="Home"
                            onPress={()=>{props.navigation.navigate('home')}}
                         />

                         <DrawerItem
                        icon={({color,size})=>(
                            <Icon
                            name='account-outline'
                            color={color}
                            size={size}
                            />
                            )}
                            label="About"
                            onPress={()=>{props.navigation.navigate('about')}}
                         />
                    </Drawer.Section>
                    
                </View>
            </DrawerContentScrollView>
        </View>
    )
}