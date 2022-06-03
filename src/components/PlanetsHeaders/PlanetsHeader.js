
import { View, StyleSheet } from 'react-native'
import React from 'react'
import Text from '../text/text'
import { spacing } from '../../theme/spacing'
import { colors } from '../../theme/colors'

export default function PlanetsHeader() {
    return (
        <View style={styles.container}>
            <Text preset='h1'>The Planets</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding: spacing[5],
        borderBottomWidth: 0.3,
        borderBottomColor: colors.white
    }
})