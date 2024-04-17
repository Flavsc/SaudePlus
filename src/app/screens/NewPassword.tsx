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
    const [newPassword, setNewPassword] = useState("");
    const [verifyNewPassword, setVerifyNewPassword] = useState("");
    function samePassword(newPassword: string, verifyNewPassword: string) {
        if (newPassword == verifyNewPassword) {
            return true;
        } else {
            alert("Senhas não coincidem.");
            return false;
        }
    }
    return (
        <MainContainer>
            <SPlus />
            <BigText style={{ marginBottom: 20 }}>Insira os dados</BigText>
            <RegularText style={{ marginBottom: 20 }}>
                Digite sua nova senha:
            </RegularText>
            <StyledTextInput
                label="Nova senha"
                icon="lock-open"
                value={newPassword}
                onChangeText={setNewPassword}
                placeholder="Nova senha"
                keyboardType="email-address"
                style={{ marginBottom: 50 }}
            />
            <RegularText style={{ marginBottom: 20 }}>
                Digite sua senha novamente:
            </RegularText>
            <StyledTextInput
                label="Nova senha novamente"
                icon="lock-open"
                value={verifyNewPassword}
                onChangeText={setVerifyNewPassword}
                placeholder="Nova senha"
                keyboardType="email-address"
                style={{ marginBottom: 50 }}
            />
            <StatusBar style="auto" />
            <RegularButton
                style={{ marginBottom: 20 }}
                onPress={() => navigation.navigate("PaginaInicial")}
            >
                Finalizar
            </RegularButton>
        </MainContainer>
    );
}
