import { View, SafeAreaView, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import Text from '../components/text/text'
import PlanetsHeader from '../components/PlanetsHeaders/PlanetsHeader'
import { colors } from '../theme/colors'
import { spacing } from '../theme/spacing'
import { PLANET_LIST } from '../data/planetsList'
import MenuItem from '../components/menuItem/MenuItem'




export default function home() {
    return (
        <>
            <SafeAreaView style={styles.container}>
                <PlanetsHeader />
                <FlatList
                    data={PLANET_LIST}
                    renderItem={({ item, index }) => {
                        return (
                            <MenuItem item={item} />
                        )
                    }}
                    keyExtractor={item => item.name}
                    ItemSeparatorComponent={(item) => <View
                        style={styles.separator}
                    />}
                />
            </SafeAreaView>
        </>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.black,
        flex: 1,
        padding: spacing[4]
    },
    separator: {
        height: 0.2,
        width: "100%",
        backgroundColor: colors.white,
    }
})
