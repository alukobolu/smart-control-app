import React ,{ useContext }  from 'react';
import { StyleSheet , Dimensions } from 'react-native';

const GlobalStyle = StyleSheet.create({
    h1:{
        color:"#fff",
        fontSize:34,
        fontWeight:"700",
        textAlign:"center",
        width:"100%",
        marginTop:"30%",
    },
    p:{
        color:"blue",
        fontSize:12,
        width:"100%",
        textAlign:"center",
        margin:0,
    },

});

export default GlobalStyle;