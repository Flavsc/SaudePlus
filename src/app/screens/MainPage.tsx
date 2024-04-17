import SPlus from "@assets/images/sPlus";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegularButton from "components/Buttons/RegularButton";
import CameraT from "components/Camera/Camera";
import GridView from "components/Grids/GridView";
import MainContainer from "components/containers/MainContainer";
import SmallContainer from "components/containers/SmallContainer";
import BigText from "components/texts/BigText";
import RegularText from "components/texts/RegularText";
import React from "react";
import { View } from "react-native";

export default function MainPage({ navigation }: { navigation: any }) {
    return (
        <MainContainer>
            <SPlus />
            <BigText style={{ marginBottom: 10 }}>Bem Vindo!</BigText>
            <RegularText style={{ marginBottom: 20 }}>
                Como podemos te ajudar hoje?
            </RegularText>
            <SmallContainer style={{ flexDirection: "row", flexWrap: "wrap" }}>
                <RegularButton
                    style={{ width: 150, height: 100, margin: 2 }}
                    onPress={() => navigation.navigate("Exames")}
                >
                    Exames
                </RegularButton>
                <RegularButton
                    style={{ width: 150, height: 100, margin: 2 }}
                    onPress={() => navigation.navigate("Calendar")}
                >
                    Calendario
                </RegularButton>
                <RegularButton
                    style={{ width: 150, height: 100, margin: 2 }}
                    onPress={() => alert("Indo para função 3")}
                >
                    Função 3
                </RegularButton>
                <RegularButton
                    style={{ width: 150, height: 100, margin: 2 }}
                    onPress={() => alert("Indo para função 4")}
                >
                    Função 4
                </RegularButton>
                <RegularButton
                    style={{ width: 150, height: 100, margin: 2 }}
                    onPress={() => alert("Indo para função 5")}
                >
                    Função 5
                </RegularButton>
                <RegularButton
                    style={{ width: 150, height: 100, margin: 2 }}
                    onPress={() => navigation.navigate("Configuration")}
                >
                    Configurações
                </RegularButton>
            </SmallContainer>
        </MainContainer>
    );
}
