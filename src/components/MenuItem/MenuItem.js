import { View, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import Text from '../text/text';
import { spacing } from '../../theme/spacing';
import { colors } from '../../theme/colors';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function MenuItem({ item }) {
    const { name, color } = item;
    const navigation = useNavigation();

    return (
        <Pressable onPress={() =>  navigation.navigate('Details', {planet : item})} >
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', alignItems: "center" }}>
                    <View style={[styles.circle, { backgroundColor: color }]} />
                    <Text preset='h3' style={styles.itemName}>{name}</Text>
                </View>
                <AntDesign name="right" size={24} color="white" />
            </View>
        </Pressable>

    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between",
        padding: spacing[4]
    },
    circle: {
        width: 20,
        height: 20,
        borderRadius: 50
    },
    itemName: {
        textTransform: "uppercase",
        marginLeft: spacing[4]
    }
})