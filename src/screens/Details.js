import { View, SafeAreaView, StyleSheet, ScrollView, Linking, Pressable } from 'react-native'
import React from 'react'
import PlanetsHeader from '../components/PlanetsHeaders/PlanetsHeader'
import Text from '../components/text/text'
import { colors } from '../theme/colors'
import { spacing } from '../theme/spacing'
import Planet from '../components/Planet/Planet'
import PlanetDetails from '../components/PlanetDetails/PlanetDetails'

export default function Details({ route }) {
    const planet = route.params.planet;
    console.log(planet)
    const { name, color, description,wikiLink ,revolutionTime, rotationTime, radius, avgTemp} = planet;
    return (
        <>
            <SafeAreaView style={styles.container}>
                <PlanetsHeader backBtn="true" title={planet.name} />
                <ScrollView contentContainerStyle={styles.planetDetails}>
                    <Planet color={color} />

                    <Text preset='h1' style={styles.planetName}>{name}</Text>
                    <Text style={styles.description}>{description}</Text>

                    <Pressable preset='bold' onPress={() => Linking.openURL(wikiLink)}>
                        <Text>Source: <Text preset='bold'>Wiki</Text> </Text>
                    </Pressable>

                    <PlanetDetails title='Revolution Time' measured={revolutionTime}/>
                    <PlanetDetails title='Rotation Time' measured={rotationTime}/>
                    <PlanetDetails title='Radius' measured={radius}/>
                    <PlanetDetails title='Avg Temp' measured={avgTemp}/>
                   

                </ScrollView>
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
    planetDetails: {


    },
    planetName: {
        textAlign: 'center',
        textTransform: "uppercase",
        marginTop: spacing[9]
    },
    description: {
        textAlign: 'center',
        lineHeight: spacing[7],
        padding: spacing[5]
    }
})