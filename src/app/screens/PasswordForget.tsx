import SPlus from "@assets/images/sPlus";
import RegularButton from "components/Buttons/RegularButton";
import StyledTextInput from "components/Inputs/StyledTextInput";
import { colors } from "components/colors";
import MainContainer from "components/containers/MainContainer";
import BigText from "components/texts/BigText";
import RegularText from "components/texts/RegularText";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";

const { primary, accent, white } = colors;

export default function PasswordForget({ navigation }: { navigation: any }) {
    const [email, setEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [codigoDigitado, setCodigo] = useState("");
    const codigoEnviado = 1234;
    function emailVerificado(codigoEnviado: number, codigoDigitado: number) {
        if (codigoEnviado == codigoDigitado) {
            return (
                <RegularText style={{ marginBottom: 20 }}>
                    Digite sua nova senha:
                </RegularText>
            );
        } else {
            alert("Código inválido!");
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
                style={{ marginBottom: 20 }}
            />
            <StatusBar style="auto" />
            <RegularText style={{ marginBottom: 20 }}>
                Digite o código enviado para o seu email:
            </RegularText>
            <StyledTextInput
                label="Codigo"
                icon="account"
                value={codigoDigitado}
                onChangeText={setCodigo}
                placeholder="Ex: 1234"
                style={{ marginBottom: 20 }}
            />
        </MainContainer>
    );
}
