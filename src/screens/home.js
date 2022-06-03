import { View} from 'react-native'
import React from 'react'
import Text from '../components/text'

export default function home() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text >This is home</Text>
        </View>
    )
}