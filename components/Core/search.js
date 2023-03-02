import React,{ useContext } from "react";
import {View,Text,StyleSheet,FlatList,TouchableOpacity,TextInput} from "react-native";
import * as Animatable from 'react-native-animatable';
import { Context } from "../Global/context";
import Devices from "../DummyData/Devices";
import styles from "./style";

const Search = ({ navigation,route }) => {
    const globalContext = useContext(Context);
    const {  isLoggedIn, setIsLoggedIn } = globalContext;

    function Page() {
        const renderItem = ({ item }) => (
            <View style={styles.homepage}>
                <View style={styles.card}>
                    <Text style={styles.h1} >{item.name}</Text>
                    <Text style={styles.p} >{item.device_status}</Text>
                    <TouchableOpacity style={styles.ActionButton} >
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
            <View style={styles.searchInputArea}>
                <TextInput style={styles.searchInput} placeholder="Saerch Someone" />
            </View>
            <Animatable.View animation="fadeInUpBig" >
            {Page()}
            </Animatable.View>
        </View>
    )
}



export default Search;