import { NavigationContainer, StackRouter } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

// export default function Routers(){
//     return(
//         <NavigationContainer>
//             <Stack.Navigator>
//                 {/* feito para telas que formos add */}
//                 <Stack.Screen name="#" component={"#"}/>
//                 <Stack.Screen name="#" component={"#"}/>
//                 <Stack.Screen name="#" component={"#"}/>
//                 <Stack.Screen name="#" component={"#"}/>
//                 <Stack.Screen name="#" component={"#"}/>
//                 <Stack.Screen name="#" component={"#"}/>
//             </Stack.Navigator>
//         </NavigationContainer>
//     );
// }
// descomentar tudo e colocar em "name"e e "component" os mesmos nomes - necessario importar os arquivos que forem ser as páginas
