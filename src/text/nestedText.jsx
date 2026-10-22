import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context'

export default function nestedText()
 {
    return (
      <SafeAreaProvider >
        <SafeAreaView style={styles.container}>
            <Text style={styles.baseText}>I'm Bold
                <Text style={styles.innerText}> and red</Text>
            </Text>
        </SafeAreaView>
      </SafeAreaProvider>
    );
  
}

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    baseText:{
        fontWeight: 'bold',
    },
    innerText:{
        color: 'red',
    }
});