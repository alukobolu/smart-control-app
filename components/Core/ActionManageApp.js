import React,{ useContext, useState } from "react";
import {Text,TouchableOpacity,View,Image} from "react-native";
import * as Animatable from 'react-native-animatable';
import { back,donut,checked } from "../Global/icons.js"
import styles from "./style";

const ManageAction = ({ navigation,route }) => {

    const { blocked,title } = route.params;
    navigation.setOptions({ title: title })

    const [uninstall, setUninstall] = React.useState(false)
    const [block, setBlock] = React.useState(false)
    const [unblock, setUnblock] = React.useState(false)

    function pick(picked){
        if (picked == "ui") {
            setUninstall(true)
            setBlock(false)
            setUnblock(false)
        } else if (picked == "b"){
            setUninstall(false)
            setBlock(true)
            setUnblock(false)
        }else if(picked =="ub"){
            setUninstall(false)
            setBlock(false)
            setUnblock(true)
        } else {
            alert("something went wroung")
        }
    }

    function Page() {
        return( 
            <View style={styles.ManageAppBox}>
                <TouchableOpacity style={styles.ManageAppBoxOption} onPress ={()=> pick("ui")}>
                    <Text style={styles.ManageAppBoxOptionText}>Uninstall</Text>
                    {(uninstall)?
                        <Image
                            source={checked}
                            resizeMode="contain"
                            style={{
                                height: 25,
                                width: 25,
                                margin:5,
                                tintColor:"green",
                                flex:1,
                                display: 'flex', 
                                justifyContent: 'flex-end',
                            }}
                        />   
                        :
                        <></>
                    }
                    
                </TouchableOpacity>

                {(!blocked)?
                    <TouchableOpacity style={styles.ManageAppBoxOption} onPress ={()=> pick("b")}>
                        <Text style={styles.ManageAppBoxOptionText}>Block</Text>
                        {(block)?
                            <Image
                                source={checked}
                                resizeMode="contain"
                                style={{
                                    height: 25,
                                    width: 25,
                                    margin:5,
                                    tintColor:"green",
                                    flex:1,
                                    display: 'flex', 
                                    justifyContent: 'flex-end',
                                }}
                            />   
                            :
                            <></>
                        }
                    </TouchableOpacity>
                :
                    <TouchableOpacity style={styles.ManageAppBoxOption} onPress ={()=> pick("ub")}>
                        <Text style={styles.ManageAppBoxOptionText}>Allow</Text>
                        {(unblock)?
                            <Image
                                source={checked}
                                resizeMode="contain"
                                style={{
                                    height: 25,
                                    width: 25,
                                    margin:5,
                                    tintColor:"green",
                                    flex:1,
                                    display: 'flex', 
                                    justifyContent: 'flex-end',
                                }}
                            />   
                            :
                            <></>
                        }
                    </TouchableOpacity>
                }
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View >
                {Page()}
            </View>
            <View style={styles.logout}>
                <TouchableOpacity style={styles.logoutBotton} onPress={()=>  navigation.goBack()} >
                    <Text style={styles.Buttontext} >Okay</Text>
                </TouchableOpacity> 
            </View>
        </View>
    )
}



export default ManageAction;