
import { View, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import Text from '../text/text'
import { spacing } from '../../theme/spacing'
import { colors } from '../../theme/colors'
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons';

export default function PlanetsHeader({ backBtn, title = "Planets" }) {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            {
                backBtn && <Pressable onPress={() => navigation.goBack()} style={styles.backBtn}>
                    <AntDesign name="doubleleft" size={24} color="white" />
                </Pressable>
            }
            <Text preset='h1' style={styles.title}>The {title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: spacing[5],
        borderBottomWidth: 0.3,
        borderBottomColor: colors.white,
        flexDirection: 'row',
        alignItems: 'center'
    },
    backBtn: {
        marginRight: spacing[4]
    },
    title:{
        textTransform: "capitalize"
    }
})