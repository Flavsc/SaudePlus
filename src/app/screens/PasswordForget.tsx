import SPlus from "@assets/images/sPlus";
import RegularButton from "components/Buttons/RegularButton";
import StyledTextInput from "components/Inputs/StyledTextInput";
import { colors } from "components/colors";
import MainContainer from "components/containers/MainContainer";
import BigText from "components/texts/BigText";
import RegularText from "components/texts/RegularText";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { auth } from "firebase/Config";
import { sendPasswordResetEmail } from "firebase/auth";
const { primary, accent, white } = colors;

export default function PasswordForget({ navigation }: { navigation: any }) {
    const [email, setEmail] = useState("");
    async function resetEmail() {
        try {
            await sendPasswordResetEmail(auth, email);
            alert("Email enviado!");
            navigation.navigate("Login");
        } catch (error) {
            alert(error);
        }
    }
    return (
        <MainContainer>
            <SPlus />
            <BigText style={{ marginBottom: 20 }}>Insira os dados</BigText>
            <RegularText style={{ marginBottom: 20 }}>
                Enviaremos um link no seu e-mail para que você possa trocar de
                senha.
            </RegularText>
            <StyledTextInput
                label="E-mail"
                icon="email-variant"
                value={email}
                onChangeText={setEmail}
                placeholder="seu@email.com"
                keyboardType="email-address"
                style={{ marginBottom: 50 }}
            />
            <StatusBar style="auto" />
            <RegularButton
                style={{ marginBottom: 20 }}
                onPress={() => resetEmail()}
            >
                Enviar
            </RegularButton>
        </MainContainer>
    );
}
