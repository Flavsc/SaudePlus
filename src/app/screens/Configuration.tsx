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

export default function Configuration({ navigation }: { navigation: any }) {
    return (
        <MainContainer>
            <SPlus />
            <BigText style={{ marginBottom: 40 }}>Configurações</BigText>
            <SmallContainer style={{ flexDirection: "row", flexWrap: "wrap" }}>
                <RegularButton
                    style={{ width: 150, height: 120, margin: 5 }}
                    onPress={() => alert("Função para alterar email")}
                >
                    Alterar E-mail
                </RegularButton>
                <RegularButton
                    style={{ width: 150, height: 120, margin: 5 }}
                    onPress={() => navigation.navigate("PasswordForget")}
                >
                    Alterar Senha
                </RegularButton>
                <RegularButton
                    style={{ width: 150, height: 120, margin: 5 }}
                    onPress={() => alert("Função para contatar suporte")}
                >
                    Contatar suporte
                </RegularButton>
                <RegularButton
                    style={{ width: 150, height: 120, margin: 5 }}
                    onPress={() => alert("Função para Excluir Conta")}
                >
                    Excluir conta
                </RegularButton>
            </SmallContainer>
        </MainContainer>
    );
}
