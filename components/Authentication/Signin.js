import React,{ useContext, useState } from "react";
import {SafeAreaView,View,Text,StyleSheet,TouchableOpacity,Image,FlatList,TextInput} from "react-native";
import * as Animatable from 'react-native-animatable';
import stylepage from "./styles";
import { Context } from "../Global/context";

const Signin = ({ navigation,route }) => {
    const globalContext = useContext(Context);
    const { isLoggedIn, setIsLoggedIn,managingDevice  } = globalContext;

    function login(){
        setIsLoggedIn(true)
    }   
    function Page() {
        return (
            <View style={stylepage.outerPage}>
                <View  style={stylepage.foreBox}>
                    <View style={stylepage.formheader}>
                        <Text style={stylepage.h1}>SIGNIN </Text>
                    </View>
                    <View style={stylepage.formComponents}>
                        <Text  style={stylepage.inputLabel}>Email</Text>
                        <TextInput  textContentType='emailAddress'  autoCompleteType="email"  style={stylepage.textInput}  placeholder="Username/Email" />
                    </View>
                    <View style={stylepage.formComponents}>
                        <Text  style={stylepage.inputLabel}>Password</Text>
                        <TextInput   textContentType='password' autoCompleteType="password"  style={stylepage.textInput} placeholder="Password" />
                    </View>
                    <View style={stylepage.formComponents}>
                        <TouchableOpacity style={stylepage.loginbutton} onPress ={()=> login()} >
                            <Text style={stylepage.buttonFonts}>Sign in</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{marginTop:20}}  onPress={()=> navigation.navigate("signup",)}>
                            <Text style={stylepage.p}>Don't have an account ?</Text>
                        </TouchableOpacity>
                        <TouchableOpacity  style={{marginTop:20}} onPress={()=> navigation.navigate("forgotpassword",)}>
                            <Text style={stylepage.p}>Have you forgotten your Password ?</Text>
                        </TouchableOpacity>
                        
                        {(managingDevice)?<Text style={stylepage.h1}>True</Text>:<Text style={stylepage.h1}>False</Text>}
                        
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

export default Signin;