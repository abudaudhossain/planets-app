import { View, StyleSheet } from 'react-native'
import React from 'react'
import Text from '../text/text';
import { spacing } from '../../theme/spacing';
import { colors } from '../../theme/colors';

export default function MenuItem({ item }) {
    const { name, color } = item;
    return (
        <View style={styles.container}>
            <View style={[styles.circle, {backgroundColor: color}]} />
            <Text preset='h3' style={styles.itemName}>{name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: "center",
        padding: spacing[4]
    },
    circle: {
        width: 20,
        height: 20,
        borderRadius: 50
    },
    itemName:{
        textTransform: "uppercase",
        marginLeft: spacing[4]
    }
})