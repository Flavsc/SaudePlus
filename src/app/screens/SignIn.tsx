import SPlus from "@assets/images/sPlus";
import FakeButton from "components/Buttons/FakeButton";
import RegularButton from "components/Buttons/RegularButton";
import StyledTextInput from "components/Inputs/StyledTextInput";
import { colors } from "components/colors";
import MainContainer from "components/containers/MainContainer";
import BigText from "components/texts/BigText";
import RegularText from "components/texts/RegularText";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";

const { primary, accent, white } = colors;

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
                style={{ marginBottom: 5 }}
            />
            <FakeButton
                style={{ backgroundColor: white, marginBottom: 5 }}
                onPress={() => navigation.navigate("PasswordForget")}
            >
                Esqueci minha senha
            </FakeButton>
            <RegularButton
                style={{ marginBottom: 20 }}
                onPress={() => navigation.navigate("PaginaInicial")}
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
