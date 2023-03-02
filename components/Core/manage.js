import React,{ useContext, useState } from "react";
import {Text,TouchableOpacity,View,ScrollView} from "react-native";
import * as Animatable from 'react-native-animatable';
import styles from "./style";

const Manage = ({ navigation,route }) => {

    const { title } = route.params;
    navigation.setOptions({ title: title }) 

    function Page() {
        return (
            <ScrollView>
                <View style={styles.homepage}>
                    <View style={styles.card}>
                        <Text style={styles.h1} >Reports</Text>
                        <Text style={styles.p} >Review recent app activities </Text>
                        <TouchableOpacity style={styles.ActionButton} onPress={()=> navigation.navigate("events")} >
                            <Text>REVIEW APP ACTIVITIES</Text>
                        </TouchableOpacity> 
                    </View>   
                    {/* <View style={styles.card}>
                        <Text style={styles.h1} >Location</Text>
                        <Text style={styles.p} >Monitor the location ofthe tabs at any point in time </Text>
                        <TouchableOpacity style={styles.ActionButton} >
                            <Text>LOCATION</Text>
                        </TouchableOpacity> 
                    </View>  */}
                    <View style={styles.card}>
                        <Text style={styles.h1} >Manage Applications</Text>
                        <Text style={styles.p} >Block and Uninstall Apps on the device </Text>
                        <TouchableOpacity style={styles.ActionButton} onPress={()=> navigation.navigate("manageapp")} >
                            <Text>MANAGE APPS</Text>
                        </TouchableOpacity> 
                    </View>   
                    <View style={styles.card}>
                        <Text style={styles.h1} >Time Restrictions</Text>
                        <Text style={styles.p} >Set time restrictions for app usages </Text>
                        <TouchableOpacity style={styles.ActionButton} onPress={()=> navigation.navigate("timelist")} >
                            <Text>SET TIME RESTRICTIONS</Text>
                        </TouchableOpacity> 
                    </View>
                    <View style={styles.card}>
                        <Text style={styles.h1} >Set Instructions</Text>
                        <Text style={styles.p} >Set instructions to be displayed on the device  </Text>
                        <TouchableOpacity style={styles.ActionButton} onPress={()=> navigation.navigate("setinstructions",{title:title})} >
                            <Text>SET INSTRUCTIONS</Text>
                        </TouchableOpacity> 
                    </View>
                </View>
            </ScrollView>
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



export default Manage;