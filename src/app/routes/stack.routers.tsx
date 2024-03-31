import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CameraTest from "@screens/CameraTest";
import InitialPage from "@screens/InitialPage";
import MainPage from "@screens/MainPage";
import SignIn from "@screens/SignIn";
import SignUp from "@screens/SignUp";
import TGT from "@screens/TextGridTest";

const Stack = createStackNavigator();

export default function Nav() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name=" " component={InitialPage} />
                <Stack.Screen name="Login" component={SignIn} />
                <Stack.Screen name="Cadastro" component={SignUp} />
                <Stack.Screen name="Main" component={MainPage} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
