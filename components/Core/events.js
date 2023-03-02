import React,{ useContext, useState } from "react";
import {Text,TouchableOpacity,View,Image,FlatList} from "react-native";
import * as Animatable from 'react-native-animatable';
import styles from "./style";
import eventsList from "../DummyData/eventsList";

const Events = ({ navigation,route }) => {

    function Page() {
        const renderItem = ({ item }) => (
            <View style={styles.event}>
                <View style={styles.eventlist}>
                   <Text style={{fontSize:18,fontWeight:'600',}}>{item.title}</Text>
                   <Text>App: {item.app}</Text>
                   <Text>Time: {item.time}</Text>
                </View>
            </View>
        )
        return (
            <FlatList
                data={eventsList}
                keyExtractor={item => `${item.id}`}
                renderItem={renderItem}
            />
        )
    }

    return (
        <View style={styles.container}>
            <Animatable.View animation="fadeInUpBig"  style={styles.eventContainer}>
            {Page()}
            </Animatable.View>
        </View>
    )
}



export default Events;