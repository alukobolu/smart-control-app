import RNDateTimePicker from "@react-native-community/datetimepicker";
import React,{ useContext, useState } from "react";
import {Text,Button,TouchableOpacity,Image,View} from "react-native";
import styles from "./style";
import { back,donut,pizza } from "../Global/icons.js" 
import {Dropdown, MultiSelect} from 'react-native-element-dropdown';

const Time = ({ navigation,route }) => {

    const { title } = route.params;
    navigation.setOptions({ title: title })

    const [dropdown, setDropdown] = useState(null);
    const [startTime, setStartTime] = useState(new Date());
    const [endTime, setEndTime] = useState(new Date());

    const onChangeStart = (event, selectedDate) => {
        const currentDate = selectedDate;
        setStartTime(currentDate);
    };

    const onChangeEnd = (event, selectedDate) => {
        const currentDate = selectedDate;
        setEndTime(currentDate);
    };

    const pickTimeStart = () => { 
        setStartTime(null);
    };

    const pickTimeEnd = () => { 
        setEndTime(null);
    };

    const _renderItem = item => {
        return (
        <View style={styles.item}>
            <Text style={styles.p}>{item.label}</Text>
        </View>
        );
    };

    const data = [
        {label: 'Everyday', value: '0'},
        {label: 'Mon - Fri ', value: '1'},
        {label: 'Weekend', value: '2'},
        {label: 'Sunday only', value: '3'},
        {label: 'Monday only', value: '4'},
        {label: 'Tuesday only', value: '5'},
        {label: 'Wednesday only', value: '6'},
        {label: 'Thursday only', value: '7'},
        {label: 'Friday only', value: '8'},
        {label: 'Saturday only', value: '9'},
    ];
    function Page() {
        return( 
            <View>
                <Dropdown
                    style={styles.dropdown}
                    containerStyle={styles.shadow}
                    data={data}
                    search
                    searchPlaceholder="Search"
                    labelField="label"
                    valueField="value"
                    label="Dropdown"
                    placeholder="Select Restriction Days"
                    value={dropdown}
                    onChange={item => {
                    setDropdown(item.value);
                        console.log('selected', item);
                    }}
                    renderLeftIcon={() => (
                        <Image style={styles.icon} source={pizza} />
                    )}
                    renderItem={item => _renderItem(item)}
                    textError="Error"
                />
                <View>
                    <Text>START TIME :</Text>
                    {(!startTime)? 
                        <RNDateTimePicker mode="time" value={new Date()} onChange={onChangeStart} /> 
                    : 
                    <></>
                    }
                    <Text>{(startTime)? <Text> {startTime.getHours().toLocaleString()}: {startTime.getMinutes().toLocaleString()} </Text>: <Text>Nothing yet</Text>}</Text>
                    <Button title="Select starting time" onPress={() => pickTimeStart()}></Button>
                
                </View>
                <View>
                    <Text>END TIME :</Text>
                    {(!endTime)? 
                        <RNDateTimePicker mode="time" value={new Date()} onChange={onChangeEnd} /> 
                    : 
                    <></>
                    }
                    <Text>{(endTime)? <Text> {endTime.getHours().toLocaleString()}: {endTime.getMinutes().toString()} </Text>: <Text>Nothing yet</Text>}</Text>
                    <Button title="Select ending time" onPress={() => pickTimeEnd()}></Button>
                </View>
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



export default Time;