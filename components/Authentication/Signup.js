import React,{ useContext, useState } from "react";
import {SafeAreaView,View,Text,StyleSheet,TouchableOpacity,Image,FlatList,TextInput} from "react-native";
import * as Animatable from 'react-native-animatable';
import stylepage from "./styles";
import { Context } from "../Global/context";

const Signup = ({ navigation,route }) => {
    const globalContext = useContext(Context);
    const { isLoggedIn, setIsLoggedIn  } = globalContext;

    function register(){
        setIsLoggedIn(true)
    }   
    function Page() {
        return (
            <View style={stylepage.outerPage}>
                <View  style={stylepage.foreBox}>
                    <View>
                        <Text style={stylepage.h1}>SIGN UP</Text>
                    </View>
                    <View style={stylepage.formComponents}>
                        <Text  style={stylepage.inputLabel}>Email</Text>
                        <TextInput  textContentType='emailAddress'  autoCompleteType="email"  style={stylepage.textInput}  placeholder="Email Address" />
                    </View>
                    <View style={stylepage.formComponents}>
                        <Text  style={stylepage.inputLabel}>Name</Text>
                        <TextInput  textContentType='name'  autoCompleteType="email"  style={stylepage.textInput}  placeholder="Full Name" />
                    </View>
                    <View style={stylepage.formComponents}>
                        <Text  style={stylepage.inputLabel}>Password</Text>
                        <TextInput   textContentType='password' autoCompleteType="password"  style={stylepage.textInput} placeholder="Password" />
                    </View>
                    <View style={stylepage.formComponents}>
                        <Text  style={stylepage.inputLabel}>Confirm Password</Text>
                        <TextInput   textContentType='password' autoCompleteType="password"  style={stylepage.textInput} placeholder="Confirm Password" />
                    </View>
                    <View style={stylepage.formComponents}>
                        <TouchableOpacity style={stylepage.loginbutton}   >
                            <Text style={stylepage.buttonFonts}>Sign up</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{marginTop:20}} onPress={()=> register()}>
                            <Text style={stylepage.p}>Already have an account ?</Text>
                        </TouchableOpacity>
                        <TouchableOpacity  style={{marginTop:20,height:200}} >
                            <Text style={stylepage.p}>Having problems trying to sign up?</Text>
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
        backgroundColor: '#fff',
      },
})

export default Signup;