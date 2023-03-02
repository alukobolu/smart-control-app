import React,{ useContext, useState } from "react";
import {Text,TouchableOpacity,View,Image,FlatList} from "react-native";
import * as Animatable from 'react-native-animatable';
import styles from "./style";
import Applist from "../DummyData/Applist.js";
import { back,donut,checked } from "../Global/icons.js"

const ManageApps = ({ navigation,route }) => {

    function Page() {
        const renderItem = ({ item }) => (
            <TouchableOpacity style={styles.list} onPress={()=> navigation.navigate("actionmanageapps",{ blocked: item.blocked,title:item.name, })} >
                <View style={styles.appidentity}>
                    <Image
                        source={donut}
                        resizeMode="cover"
                        style={{
                            height: 30,
                            width: 30,
                            margin:12,
                            tintColor:"blue",
                        }}
                    />    
                    <Text style={styles.h3}>{item.name}</Text>
                </View>
                <View style={styles.appstatus}>
                    <Text  style={styles.p2}>{item.status} </Text>
                    <Text  style={styles.h3}>> </Text>
                    {/* <Image
                        source={back}
                        resizeMode="cover"
                        style={{
                            height: 20,
                            width: 20,
                            margin:5,
                            tintColor:"black",
                        }}
                    />  */}
                </View>
            </TouchableOpacity>
        )
        return (
            <FlatList
                data={Applist}
                keyExtractor={item => `${item.id}`}
                renderItem={renderItem}
            />
        )
    }

    return (
        <View style={styles.container}>
            <Animatable.View animation="fadeInUpBig" >
            {Page()}
            </Animatable.View>
        </View>
    )
}



export default ManageApps;