import React ,{ useContext, useState } from "react";
import { Image,Text,TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Signin from "../Authentication/Signin.js";
import Signup from "../Authentication/Signup.js";
import Choice from "../Authentication/Choice.js";
import Home from "../Core/Home.js";
import Time from "../Core/time.js"
import Search from "../Core/search.js";
import Manage from "../Core/manage.js";
import ManageApps from "../Core/ManageApps.js";
import ManageAction from "../Core/ActionManageApp.js";
import Events from "../Core/events.js";
import SetInstructions from "../Core/SetInstructions.js";
// import Location from "../Core/Location.js";
import ForgotPassword from "../Authentication/ForgotPassword.js";
import { Context }  from "../Global/context.js"; 
import { search_icon } from "../Global/icons.js"
import TimeRestrict from "../Core/TimeRestrict.js";

const Stack = createStackNavigator();

function Navigator(props) {

    const globalContext = useContext(Context);
    const { isLoggedIn,userObject } = globalContext;

    return(
        <Stack.Navigator initialRouteName ="choice">
            {(!isLoggedIn)?
                <>
                    <Stack.Screen name ="choice" component={Choice} options={{
                        title: 'SMART CONTROL',
                        headerStyle: {
                            backgroundColor: 'blue',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                        }} 
                    />
                    <Stack.Screen name ="signin" component={Signin} options={{headerShown: false }} />
                    <Stack.Screen name ="signup" component={Signup} options={{headerShown: false }} />
                    <Stack.Screen name ="forgotpassword" component={ForgotPassword} options={{headerShown: false }} />     
                </>
                :
                <>        
                    <Stack.Screen name ="home" component={Home} options={({ navigation, route }) => ({
                        title: 'Home Page',
                        headerStyle: {
                            backgroundColor: '#fff',
                        },
                        headerTintColor: '#000',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                        headerRight: () => (
                            <TouchableOpacity  onPress={()=> navigation.navigate("search")} style={{backgroundColor:"transparent",marginRight:4,}}>
                                <Image
                                    source={search_icon}
                                    resizeMode="cover"
                                    style={{
                                        height: 25,
                                        width: 25,
                                        margin:10,
                                        tintColor:"black",
                                    }}
                                /> 
                            </TouchableOpacity>
                        ),
                        })} 
                    />
                    <Stack.Screen name ="search" component={Search} options={{
                        title: 'Search',
                        headerStyle: {
                            backgroundColor: 'blue',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                        }} 
                    />
                    <Stack.Screen name ="managepage" component={Manage} options={{
                        title: 'Manage Device',
                        headerStyle: {
                            backgroundColor: 'blue',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                        }} 
                    />
                    <Stack.Screen name ="manageapp" component={ManageApps} options={{
                        title: 'Manage Apps',
                        headerStyle: {
                            backgroundColor: 'blue',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                        }} 
                    />
                    <Stack.Screen name ="actionmanageapps" component={ManageAction} options={{
                        title: 'Apps Actions ',
                        headerStyle: {
                            backgroundColor: 'blue',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                        }} 
                    />
                     <Stack.Screen name ="events" component={Events} options={{
                        title: 'Events',
                        headerStyle: {
                            backgroundColor: 'blue',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                        }} 
                    />
                    <Stack.Screen name ="timelist" component={TimeRestrict} options={{
                        title: 'Time',
                        headerStyle: {
                            backgroundColor: 'blue',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                        }} 
                    />
                    <Stack.Screen name ="time" component={Time} options={{
                        title: 'Time',
                        headerStyle: {
                            backgroundColor: 'blue',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                        }} 
                    />
                     <Stack.Screen name ="setinstructions" component={SetInstructions} options={{
                        title: 'setinstructions',
                        headerStyle: {
                            backgroundColor: 'blue',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                        }} 
                    />
                </>
            }
        </Stack.Navigator>
    )

};

export default Navigator;