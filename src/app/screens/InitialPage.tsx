import SPlus from "@assets/images/sPlus";
import { NavigationContainer } from "@react-navigation/native"; // Importe NavigationContainer
import { createStackNavigator } from "@react-navigation/stack"; // Importe createStackNavigator
import MainContainer from "components/containers/MainContainer";
import BigText from "components/texts/BigText";
import RegularText from "components/texts/RegularText";
import React from "react";
import { StyleSheet } from "react-native";

const Stack = createStackNavigator(); // Crie uma pilha de navegação

export default function InitialPage() {
    return (
        <MainContainer>
            <SPlus />
            <BigText style={{ marginBottom: 10 }}>Saude Plus</BigText>
            <RegularText style={{ marginBottom: 20 }}>
                Gestão Inteligente de Saúde
            </RegularText>
        </MainContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    imageContainer: {
        margin: 12
    },
    imageSize: {
        width: 200,
        height: 200
    }
});
