import {StatusBar} from 'expo-status-bar';
import {NavigationContainer} from "@react-navigation/native";
import TodoScreen from "./Screen/TodoScreen";
import {PaperProvider} from "react-native-paper";
import {TodoContextProvider} from "./Repository/TodosRepository";
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import DetailScreen from "./Screen/DetailScreen";


export default function App() {


    return (
        <NavigationContainer>
            <PaperProvider>
                <TodoContextProvider>
                    <StatusBar style="auto"/>
                    <RootStack/>
                </TodoContextProvider>
            </PaperProvider>
        </NavigationContainer>
    )
}
const Stack = createNativeStackNavigator();
function RootStack() {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={TodoScreen} />
            <Stack.Screen name="Details">
                {(props: any) => <DetailScreen {...props}  />}
            </Stack.Screen>
        </Stack.Navigator>
    );
}