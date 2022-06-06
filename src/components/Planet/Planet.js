import { View, StyleSheet } from 'react-native'
import React from 'react'
import Text from '../text/text'
import { spacing } from '../../theme/spacing'

export default function Planet({ color }) {
    return (
        <View style={styles.container}>

            <View style={[styles.circle, { backgroundColor: color }]} />
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: spacing[11]
    },
    circle: {
        width: 200,
        height: 200,
        borderRadius: 100,
    }
})