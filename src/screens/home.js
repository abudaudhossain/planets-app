import { View, SafeAreaView, StyleSheet, FlatList, TextInput } from 'react-native'
import {React, useState} from 'react'
import Text from '../components/text/text'
import PlanetsHeader from '../components/PlanetsHeaders/PlanetsHeader'
import { colors } from '../theme/colors'
import { spacing } from '../theme/spacing'
import { PLANET_LIST } from '../data/planetsList'
import MenuItem from '../components/MenuItem/MenuItem'


export default function home({ navigation }) {

    const [planets, setPlanets] = useState(PLANET_LIST)

     const planetSearch =(text) =>{
      
         const searchItems = PLANET_LIST.filter(item =>{
             console.log(item.name.toLowerCase())
            return item.name.toLowerCase().indexOf(text) != -1;
         })

         setPlanets(searchItems)
     }

    const renderItem = ({ item }) => {
        return (
            <MenuItem item={item} />
        )
    }
    return (
        <>
            <SafeAreaView style={styles.container}>
                <PlanetsHeader />
                <View>
                    <TextInput
                        style={styles.input}
                        placeholder="Type The Planet Name"
                        placeholderTextColor={colors.white}
                        autoCorrect={false}
                        onChangeText={(text)=>planetSearch(text)}
                        
                    />
                </View>
                <FlatList
                    data={planets}
                    renderItem={renderItem}
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
        height: 0.5,
        width: "100%",
        backgroundColor: colors.white,
    },
    input: {
        padding: spacing[4],
        margin: spacing[4],
        color: colors.white,
        borderBottomColor: colors.white,
        borderBottomWidth: 1,
      },
      
})
