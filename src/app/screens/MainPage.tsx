import SPlus from "@assets/images/sPlus";
import MainContainer from "components/containers/MainContainer";
import BigText from "components/texts/BigText";
import RegularText from "components/texts/RegularText";
import type { PropsWithChildren } from "react";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function MainPage() {
    return (
        <MainContainer>
            <SPlus />
            <BigText>Saude Plus</BigText>
            <RegularText>Gestão Inteligente de Saúde</RegularText>
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
