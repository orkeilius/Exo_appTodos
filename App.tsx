import {StatusBar} from 'expo-status-bar';
import {NavigationContainer} from "@react-navigation/native";
import TodoScreen from "./Screen/TodoScreen";
import {PaperProvider} from "react-native-paper";
import {TodoContextProvider} from "./Repository/TodosRepository";


export default function App() {
   return (
        <NavigationContainer>
            <PaperProvider>
                <TodoContextProvider>
                    <StatusBar style="auto"/>
                    <TodoScreen/>
                </TodoContextProvider>
            </PaperProvider>
        </NavigationContainer>
    )
}
