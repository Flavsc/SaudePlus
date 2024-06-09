import SPlus from "@assets/images/YELogo";
import RegularButton from "components/Buttons/RegularButton";
import CameraT from "components/Camera/Camera";
import MainContainer from "components/containers/MainContainer";
import SmallContainer from "components/containers/SmallContainer";
import BigText from "components/texts/BigText";
import RegularText from "components/texts/RegularText";
import React from "react";

export default function Camera({ navigation }: { navigation: any }) {
    return (
        <MainContainer>
            <SPlus />
            <BigText style={{ marginBottom: 10 }}>Camera</BigText>
            <RegularText style={{ marginBottom: 20 }}>
                Tire aqui a foto do documento
            </RegularText>
            <SmallContainer>
                <CameraT />
                <RegularButton onPress={navigation.navigate("Exames")}>Ver os resultados</RegularButton>
            </SmallContainer>
        </MainContainer>
    );
}
