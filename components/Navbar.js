import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const Navbar = (props) => {
    return (
        <View style={styles.navbar}>
            <Text style={styles.text}>{ props.title }</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: '#3949ab',
        paddingBottom: 10,
        paddingTop: 50
    },
    text: {
        color: 'white',
        fontSize: 20
    }
})