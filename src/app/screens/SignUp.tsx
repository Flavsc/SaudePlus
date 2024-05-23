import SPlus from "@assets/images/sPlus";
import RegularButton from "components/Buttons/RegularButton";
import StyledTextInput from "components/Inputs/StyledTextInput";
import MainContainer from "components/containers/MainContainer";
import BigText from "components/texts/BigText";
import RegularText from "components/texts/RegularText";
import { StatusBar } from "expo-status-bar";
import { auth } from "firebase/Config";
import {
    AuthErrorCodes,
    createUserWithEmailAndPassword,
    sendEmailVerification
} from "firebase/auth";
import { useState } from "react";

export default function SignUp({ navigation }: { navigation: any }) {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    async function cadastrar(): Promise<void> {
        try {
            if (email && password != null) {
                const userCredential = await createUserWithEmailAndPassword(
                    auth,
                    email,
                    password
                );
                const user = userCredential.user;
                try {
                    sendEmailVerification(user);
                } catch (error) {
                    alert(error);
                }
                console.log("Usuário registrado:", user);
                alert("usuário cadastrado com sucesso!");
                navigation.navigate("Login");
            }
        } catch (error) {
            console.error("Erro ao registrar usuário:", error);
            alert("Erro ao cadastrar usuário");
            if (AuthErrorCodes.EMAIL_EXISTS) {
                alert("Esse email já existe!");
            } else if (AuthErrorCodes.INVALID_EMAIL) {
                alert("O email fornecido é muito fraco.");
            } else if (AuthErrorCodes.WEAK_PASSWORD) {
                alert("A senha inserida é muito fraca!");
            }
        }
    }

    return (
        <MainContainer>
            <SPlus />
            <BigText style={{ marginBottom: 20 }}>Faça seu Cadastro</BigText>
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
                    cadastrar();
                }}
            >
                Continuar
            </RegularButton>

            <StatusBar style="auto" />
        </MainContainer>
    );
}
