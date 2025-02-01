import { StatusBar } from 'expo-status-bar';
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
