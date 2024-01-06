import React from "react";
import { View, StyleSheet, TextInput, Button, Alert } from "react-native";
import { useState } from "react";

export const AddToDo = ({onSubmit}) => {
    const [value, setValue] = useState('')

    const pressHandler = () => {
        if (value.trim()) {
            onSubmit(value)
            setValue('')
        } else {
            Alert.alert('Ошибка', 'Поля не может быть пустым')
        }
    }

    return (
        <View style={styles.container}>
            <TextInput style={styles.input} 
            onChangeText={setValue} 
            value={value} 
            placeholder="Введите название дела.."
            autoCorrect={false}>
            </TextInput>

            <Button title="Добавить" onPress={pressHandler}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 15
    },
    input: {
        width: '60%',
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: '#3949ab',
        paddingBottom: 2
    }
})