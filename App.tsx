import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import TodoScreen from "./Screen/TodoScreen";
import {PaperProvider} from "react-native-paper";

export default function App() {
  return (
      <NavigationContainer>
        <PaperProvider>
          <StatusBar style="auto" />
          <TodoScreen />
        </PaperProvider>
      </NavigationContainer>
  )
}
