import SPlus from "@assets/images/YELogo";
import RegularButton from "components/Buttons/RegularButton";
import StyledTextInput from "components/Inputs/StyledTextInput";
import { colors } from "components/colors";
import MainContainer from "components/containers/MainContainer";
import BigText from "components/texts/BigText";
import RegularText from "components/texts/RegularText";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import SmallContainer from "components/containers/SmallContainer";

const { primary, accent, white } = colors;


export default function ExamsUploader({ navigation }: { navigation: any }){
    return(
        <MainContainer>
            <BigText>
                Escolha um modo:
            </BigText>
            <SmallContainer style={{ flexDirection: "row", flexWrap: "wrap", margin: 10}}>
                <RegularButton style={{height: 100, width: 120,  margin: 10}} onPress={() => navigation.navigate("CameraTest")}>
                    Enviar com camera
                </RegularButton>
                <RegularButton style={{height: 100, width: 120,  margin: 10}} onPress={() => navigation.navigate("PDFUploader")}>
                    Enviar em PDF
                </RegularButton>
            </SmallContainer>
        </MainContainer>
    );
}