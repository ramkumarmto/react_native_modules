import { View, Text, Pressable, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import DatePicker from 'react-native-date-picker';
import { Button } from 'react-native-paper';

const DatePickerComp = () => {
    const [openDatePicker, setOpenDatePicker] = useState(false);
    const [ date, setDate] = useState(new Date())


    const DatePickerHandler = () => {
        setOpenDatePicker(true)
    }

    console.log("date..", date, "modified", date.toLocaleDateString() );
    return (
        <View style={styles.container}>
            
            <Pressable style={styles.btnContainer} onPress={DatePickerHandler}>
                <Text style={{ color: "white" }}>
                    Pick Date
                </Text>
            </Pressable>
            
             <DatePicker
                modal
                open={openDatePicker}
                date={date}
                mode="date"
                onConfirm={(date) => {
                    setOpenDatePicker(false)
                    setDate(date)
                    // console.log("date", date.toLocaleDateString());
                }}
                onCancel={() => {
                    setOpenDatePicker(false)
                }}
            />  
        </View>
    )
}

export default DatePickerComp;

const styles = StyleSheet.create({
    // container : {
    //     flex:1,
    //     justifyContent : "center",
    //     alignItems : "center",

    // },
    btnContainer: {
        backgroundColor: "#00203FFF",
        padding: 10
    },

});