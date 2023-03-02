import React,{ useContext, useState } from "react";
import {Text,Button,TouchableOpacity,TextInput,View} from "react-native";
import styles from "./style";

const SetInstructions = ({ navigation,route }) => {

    const { title } = route.params;
    navigation.setOptions({ title: title })

    function Page() {
        return( 
            <View style={{justifyContent:"center",alignContent:"center"}}>
                <Text style={styles.h1}>WRITE SOMETHING</Text>
                <TextInput style={{alignSelf:"center",width:"98%",height:"90%",borderColor:"blue",borderWidth:1,}}>

                </TextInput>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View >
                {Page()}
            </View>
            <View style={styles.logout}>
                <TouchableOpacity style={styles.logoutBotton} onPress={()=> navigation.goBack()} >
                    <Text style={styles.Buttontext} >Okay</Text>
                </TouchableOpacity> 
            </View>
        </View>
    )
}



export default SetInstructions;