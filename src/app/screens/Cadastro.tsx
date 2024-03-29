import RegularButton from "components/Buttons/RegularButton";
import StyledTextInput from "components/Inputs/StyledTextInput";
import MainContainer from "components/containers/MainContainer";
import BigText from "components/texts/BigText";
import RegularText from "components/texts/RegularText";
import SmallText from "components/texts/SmallText";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";

export default function Cadastro() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    return (
        <MainContainer>
            <BigText>Saude Plus</BigText>
            <RegularText>Gestão Inteligente de Saúde</RegularText>
            <SmallText style={{ marginBottom: 20 }}>
                Faça seu Cadastro.
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
                style={{ marginBottom: 20 }}
            />
            <StyledTextInput
                label="Senha"
                icon="lock-open"
                value={password}
                onChangeText={setPassword}
                placeholder="Sua Senha"
                isPassword
                style={{ marginBottom: 20 }}
            />

            <RegularButton
                onPress={() => {
                    alert("Continuando...");
                }}
            >
                Continuar
            </RegularButton>

            <StatusBar style="auto" />
        </MainContainer>
    );
}
