import {StatusBar} from 'expo-status-bar';
import {NavigationContainer} from "@react-navigation/native";
import TodoScreen from "./Screen/TodoScreen";
import {PaperProvider} from "react-native-paper";
import {TodoContextProvider} from "./Repository/TodosRepository";
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import {createMaterialBottomTabNavigator} from "react-native-paper/react-navigation";
import DetailScreen from "./Screen/DetailScreen";
import {Status, Todo} from "./types/Todo";

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
    var statusType = ['done','inProgress','todo'] as Status[];
    console.log("Home-"+statusType[2])

    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={RootTab} />
            <Stack.Screen name="Details">
                {(props: any) => <DetailScreen {...props}  />}
            </Stack.Screen>
        </Stack.Navigator>
    );
}

const Tab = createMaterialBottomTabNavigator();
function RootTab(){

    return(
    <Tab.Navigator>
    <Tab.Screen name="todo" options={{tabBarIcon: 'progress-close'}}>
        {() => <TodoScreen status="todo"/>}
    </Tab.Screen>
    <Tab.Screen name="in Progress" options={{tabBarIcon: 'progress-clock'}}>
        {() => <TodoScreen status="inProgress"/>}
    </Tab.Screen>
    <Tab.Screen name="done" options={{tabBarIcon: 'check'}}>
        {() => <TodoScreen status="done" />}
    </Tab.Screen>
    </Tab.Navigator>
    )
}