import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import ViewModel from './src/view/viewModel';
// import TextComponent from './src/text/textComponent';
import NestedText from './src/text/nestedText';

export default function App() {
  return (
    <>
    {/* <ViewModel /> */}
    {/* <TextComponent/> */}
    <NestedText />
    <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  
});
