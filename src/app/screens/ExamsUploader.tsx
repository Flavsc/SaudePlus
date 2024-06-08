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
        
            <BigText>Escolha um modo:</BigText>
            <SmallContainer style={{ flexDirection: "column", flexWrap: "wrap" }}>
                
                <RegularButton
                    style={{ width: 150, height: 100, margin: 2 }}
                    onPress={() => navigation.navigate("ExamsUploader")}
                >
                    Enviar com camera
                </RegularButton>
                <BigText style={{marginBottom: 50, marginTop: 50}}>OU</BigText>
                <RegularButton
                    style={{ width: 150, height: 100, margin: 2 }}
                    onPress={() => navigation.navigate("PDFUploader")}
                >
                    Enviar em PDF
                </RegularButton>
                
            </SmallContainer>
        </MainContainer>
    );
}