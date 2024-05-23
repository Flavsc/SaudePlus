import SPlus from "@assets/images/sPlus";
import FakeButton from "components/Buttons/FakeButton";
import RegularButton from "components/Buttons/RegularButton";
import StyledTextInput from "components/Inputs/StyledTextInput";
import { colors } from "components/colors";
import MainContainer from "components/containers/MainContainer";
import BigText from "components/texts/BigText";
import RegularText from "components/texts/RegularText";
import { IconButton, Button, Portal, Modal, Provider, PaperProvider } from 'react-native-paper';
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { auth } from "firebase/Config";
import {
    signInWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider
} from "firebase/auth";
import { useState } from "react";
import GoogleModal from "components/Modal/GoogleModal";

const { primary, accent, white } = colors;
export var globalEmail: string;

export default function SignIn({ navigation }: { navigation: any }) {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    
    globalEmail = email;

    async function login(): Promise<void> {
        try {
            if (email && password == null) {
                alert("Campo vazio!");
            }
            const userCredential = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );
            const user = userCredential.user;

            console.log("Usuário autenticado:", user);
            alert("Login realizado com sucesso");
            navigation.navigate("PaginaInicial");
        } catch (error) {
            console.error("Erro ao fazer login:", error);
            alert("Usuário ou senha inválidos");
        }
    }

    return (
        <MainContainer>
            <SPlus />
            <BigText style={{marginBottom: 10}}>Faça seu Login</BigText>
            <GoogleModal />
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
                <Text style={{ color: 'darkblue', textDecorationLine: 'underline' }}>Esqueci minha senha</Text>
            </FakeButton>
            <RegularButton style={{ marginBottom: 10 }} onPress={() => login()}>
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
