import React,{ useContext, useState } from "react";
import {SafeAreaView,View,Text,StyleSheet,FlatList,TouchableOpacity} from "react-native";
import * as Animatable from 'react-native-animatable';
import { Context } from "../Global/context";
import Devices from "../DummyData/Devices";
import styles from "./style";

const Home = ({ navigation,route }) => {
    const globalContext = useContext(Context);
    const {  isLoggedIn, setIsLoggedIn } = globalContext;

    function logout(){
        setIsLoggedIn(false)
    }   

    function Page() {
        const renderItem = ({ item }) => (
            <View style={styles.homepage}>
                <View style={styles.card}>
                    <Text style={styles.h1} >{item.name}</Text>
                    <Text style={styles.p} >{item.device_status}</Text>
                    <TouchableOpacity style={styles.ActionButton} onPress={()=> navigation.navigate("managepage",{title: item.name})} >
                        <Text>MANAGE THIS DEVICE</Text>
                    </TouchableOpacity> 
                </View>     
            </View>
        )
        return (
            <FlatList
                data={Devices}
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
            <View style={styles.logout}>
                <TouchableOpacity style={styles.logoutBotton} onPress={()=> logout()} >
                    <Text style={styles.Buttontext} >Logout</Text>
                </TouchableOpacity> 
            </View>
        </View>
    )
}



export default Home;