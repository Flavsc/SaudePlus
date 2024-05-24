import SPlus from "@assets/images/YELogo";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GridView from "components/Grids/GridView";
import MainContainer from "components/containers/MainContainer";
import BigText from "components/texts/BigText";
import React from "react";
import { SafeAreaView, StyleSheet, View, Text} from "react-native";
import { Button, Portal, Provider} from "react-native-paper";

export default function MainPage({ navigation }: { navigation: any }) {
    const [value, setValue] = React.useState("");
    return (
        <MainContainer>
            <BigText style={{ marginTop: 10 }}>Remédios Salvos</BigText>

            <Provider>
                <SafeAreaView style={styles.container}>
                    <View style={styles.buttonContainer}>
                        <Button 
                            mode="contained"
                            style={{ backgroundColor: "#739986" }}
                            onPress={() => 
                                <Portal>
                                    <Text>This is rendered at a different place</Text>
                                </Portal>}
                        >
                            Press Me
                        </Button>
                    </View>
                </SafeAreaView>
            </Provider>
        </MainContainer>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-end', // Alinha o botão na parte inferior
      alignItems: 'flex-end', // Alinha o botão na direita
      
    },
    buttonContainer: {
      position: 'absolute',
      bottom: 16,
      left: 70,
    },
  });
