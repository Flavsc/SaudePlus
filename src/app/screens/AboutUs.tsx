import SPlus from "@assets/images/YELogo";
import MainContainer from "components/containers/MainContainer";
import SmallContainer from "components/containers/SmallContainer";
import BigText from "components/texts/BigText";
import RegularText from "components/texts/RegularText";
import React from "react";
import { ScrollView } from "react-native";

export default function AboutUs() {
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <MainContainer>
                <SPlus />
                <BigText style={{ marginBottom: 10 }}>Sobre Nós</BigText>
                <SmallContainer
                    style={{ flexDirection: "row", flexWrap: "wrap" }}
                >
                    <RegularText>
                        Nos somos o Minha Saúde em Dia, um aplicativo
                        desenvolvido para melhorar a gestão da sua propria saúde
                        e melhorar sua qualidade de vida. Nele você pode colocar
                        lembretes de suas consultas, colocar um resumo delas,
                        definir os horarios de suas medicações com apenas quatro
                        informações, organizar os resultados de seus exames, bem
                        como armazenar uma copia deles e muito mais.
                    </RegularText>
                    <BigText>Quem somos?</BigText>
                    <RegularText>
                        Somos uma equipe de desenvolvedores que tem como
                        objetivo facilitar a vida de pessoas que tem
                        dificuldades em se organizar com seus exames, consultas
                        e remédios.
                    </RegularText>
                </SmallContainer>
            </MainContainer>
        </ScrollView>
    );
}
