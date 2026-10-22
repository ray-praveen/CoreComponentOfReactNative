import React from 'react'
import { Text, View } from 'react-native'
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context'

export default function viewModel() {
    return (
      <SafeAreaProvider >
        <SafeAreaView style={{flexDirection: 'row'}}>
          <View style={{height: 100, backgroundColor: 'blue', flex: 0.2}} />
          <View style={{height: 100, backgroundColor: 'red', flex: 0.4}} />
          <Text>Hello World!</Text>
        </SafeAreaView>     
      </SafeAreaProvider>
    );
}
