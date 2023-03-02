import React,{ useContext, useState } from "react";
import {SafeAreaView,View,Text,StyleSheet,TouchableOpacity,Image,FlatList,TextInput} from "react-native";
import * as Animatable from 'react-native-animatable';
import stylepage from "./styles";

const ForgotPassword = ({ navigation,route }) => {

    function Page() {
        return (
            <View style={stylepage.outerPage}>
                <View  style={stylepage.foreBox}>
                    <View style={stylepage.formheader}>
                        <Text style={stylepage.h1}>FORGOT PASSWORD </Text>
                    </View>
                    <Text style={stylepage.p}>Enter your email and you'll get a link where you can reset your password</Text>
                    <View style={stylepage.formComponents}>
                        <Text  style={stylepage.inputLabel}>Email</Text>
                        <TextInput  textContentType='email'  autoCompleteType="email"  style={stylepage.textInput}  placeholder="Username/Email" />
                    </View>
                    <View style={stylepage.formComponents}>
                        <TouchableOpacity style={stylepage.loginbutton}   >
                            <Text style={stylepage.buttonFonts}>Enter</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{marginTop:20}}  onPress={()=> navigation.navigate("signin",)}>
                            <Text style={stylepage.p}>Back</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
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

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center',
        backgroundColor: '#fff',
      },
})

export default ForgotPassword;