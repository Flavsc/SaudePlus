import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CameraTest from "@screens/CameraTest";
import InitialPage from "@screens/InitialPage";
import SignIn from "@screens/SignIn";
import SignUp from "@screens/SignUp";
import TGT from "@screens/TextGridTest";
import * as React from "react";
import { View, Text } from "react-native";

const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name=" " component={InitialPage} />
            <Stack.Screen name="Login" component={SignIn} />
            <Stack.Screen name="Cadastro" component={SignUp} />
        </Stack.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    );
}
