import SPlus from "@assets/images/sPlus";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegularButton from "components/Buttons/RegularButton";
import GridView from "components/Grids/GridView";
import MainContainer from "components/containers/MainContainer";
import SmallContainer from "components/containers/SmallContainer";
import BigText from "components/texts/BigText";
import RegularText from "components/texts/RegularText";
import React = require("react");
import { useState } from "react";
import { View } from "react-native";
import { Checkbox, Button } from "react-native-paper";

export default function DeleteEmail({ navigation }: { navigation: any }) {
    const [checked, setChecked] = React.useState(false);
    function excluirConta() {
        // Função de excluir tudo do usuário
        navigation.navigate(" ");
    }
    return (
        <MainContainer>
            <SPlus />
            <BigText style={{ marginBottom: 40 }}> Exclusão de conta</BigText>
            <SmallContainer style={{ flexDirection: "row", flexWrap: "wrap" }}>
                <RegularText>
                    {" "}
                    Ao clicar no botão você concorda que todos os seus dados
                    serão deletados, contendo remédios,exames, consultas e
                    informações pessoais permanentemente. Não há uma forma de
                    voltar atrás.{" "}
                </RegularText>
                <Checkbox
                    color="darkgreen"
                    status={checked ? "checked" : "unchecked"}
                    onPress={() => {
                        setChecked(!checked);
                    }}
                />
            </SmallContainer>
            {checked && (
                <Button
                    style={{
                        width: 343,
                        height: 60,
                        padding: 10,
                        borderRadius: 15,
                        justifyContent: "center",
                        alignItems: "center",
                        marginBottom: 60
                    }}
                    buttonColor="red"
                    icon="delete"
                    mode="contained"
                    onPress={() => excluirConta()}
                >
                    DELETAR MINHA CONTA
                </Button>
            )}
        </MainContainer>
    );
}
