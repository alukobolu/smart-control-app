import React,{ useContext, useState } from "react";
import {SafeAreaView,View,Text,StyleSheet,TouchableOpacity} from "react-native";
import { Context } from "../Global/context";

const Choice = ({ navigation,route }) => {
    const globalContext = useContext(Context);
    const { managingDevice, setManagingDevice } = globalContext;

    function choose(){
        setManagingDevice(false)
        navigation.navigate("signin")
    }   

    function Page() {
        return (
            <View style={styles.form}>
                <View style={styles.formComponents}>
                    <Text style={{textAlign: 'center',}}>Click this to allow your device be managed by parent devices</Text>
                    <TouchableOpacity style={styles.controlButton}  onPress ={()=> choose()}>
                        <Text style={{color: 'white',}}>Control This Device</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.formComponents}>
                    <Text style={{textAlign: 'center',}} >Click this to use this device to manage other devices</Text>
                    <TouchableOpacity style={styles.manageButton} onPress={()=> navigation.navigate("signin",)}>
                        <Text style={{color: 'white',}}>Manage Other Devices</Text>
                    </TouchableOpacity>
                </View>      
            </View>
        )
    }

    return (
        <View style={styles.container}>
            {Page()}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    form:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    formComponents:{
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        width: "70%",
        height:220,
    },
    controlButton:{
        justifyContent: 'center',
        width: 180,
        height: 70,
        alignItems: 'center',
        backgroundColor:"red",  
    },
    manageButton:{
        justifyContent: 'center',
        width: 180,
        height: 70,
        alignItems: 'center',
        backgroundColor:"blue",
    },
})

export default Choice;