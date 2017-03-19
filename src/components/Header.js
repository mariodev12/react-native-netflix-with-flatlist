import React from 'react'
import {
    Text,
    View,
    StyleSheet,
    Image
} from 'react-native'

const Header = () => (
    <View style={styles.container}>
        <Image style={styles.logo} source={require('../images/logo.png')} />
    </View>
)

const styles = StyleSheet.create({
    container: {
        height: 60,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: 'black'
    },
    logo: {
        width: 100,
        height: 40
    }
})

export default Header