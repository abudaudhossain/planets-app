import { View, StyleSheet } from 'react-native'
import React from 'react'
import Text from '../text/text'
import { colors } from '../../theme/colors'
import { spacing } from '../../theme/spacing'

export default function PlanetDetails({title, measured}) {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: spacing[7]}}>{title}</Text>
      <Text preset='h2'>{measured}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 0.5,
        borderColor: colors.white,
        padding: spacing[3],
        marginTop: spacing[8],
        marginHorizontal: spacing[4]
    }
})