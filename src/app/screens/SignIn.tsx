import SPlus from "@assets/images/sPlus";
import RegularButton from "components/Buttons/RegularButton";
import StyledTextInput from "components/Inputs/StyledTextInput";
import MainContainer from "components/containers/MainContainer";
import BigText from "components/texts/BigText";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";

export default function SignIn({ navigation }: { navigation: any }) {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    return (
        <MainContainer>
            <SPlus />
            <BigText style={{ marginBottom: 20 }}>Faça seu Login</BigText>
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
                label="Senha"
                icon="lock-open"
                value={password}
                onChangeText={setPassword}
                placeholder="Sua Senha"
                isPassword
                style={{ marginBottom: 20 }}
            />

            <RegularButton
                style={{ marginBottom: 20 }}
                onPress={() => {
                    alert("Logando...");
                }}
            >
                Logar
            </RegularButton>

            <RegularButton
                style={{ marginBottom: 20 }}
                onPress={() => navigation.navigate("Cadastro")}
            >
                Faça Cadastro
            </RegularButton>

            <StatusBar style="auto" />
        </MainContainer>
    );
}
