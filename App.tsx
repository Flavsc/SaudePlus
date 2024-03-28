import { StatusBar } from "expo-status-bar";
import { useState } from "react";

import StyledTextInput from "./components/Inputs/StyledTextInput";
import MainContainer from "./components/containers/MainContainer";
import BigText from "./components/texts/BigText";
import RegularText from "./components/texts/RegularText";
import SmallText from "./components/texts/SmallText";

export default function App() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");

    return (
        <MainContainer>
            <BigText>Saude Plus</BigText>
            <RegularText>Gestão Inteligente de Saúde</RegularText>
            <SmallText style={{ marginBottom: 20 }}>
                Insira seus dados
            </SmallText>
            <StyledTextInput
                label="E-mail"
                icon="email-variant"
                value={email}
                onChangeText={setEmail}
                placeholder="seu@email.com"
                keyboardType="email-address"
                style={{ marginBottom: 20 }}
            />
            <StyledTextInput
                label="Nome Completo"
                icon="account"
                value={name}
                onChangeText={setName}
                placeholder="Seu Nome"
                keyboardType="email-address"
                style={{ marginBottom: 20 }}
            />
            <StatusBar style="auto" />
        </MainContainer>
    );
}
