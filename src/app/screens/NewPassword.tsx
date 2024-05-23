import SPlus from "@assets/images/YELogo";
import RegularButton from "components/Buttons/RegularButton";
import StyledTextInput from "components/Inputs/StyledTextInput";
import { colors } from "components/colors";
import MainContainer from "components/containers/MainContainer";
import BigText from "components/texts/BigText";
import RegularText from "components/texts/RegularText";
import { StatusBar } from "expo-status-bar";
import { auth } from "firebase/Config";
import { AuthErrorCodes, getAuth, updatePassword } from "firebase/auth";
import { useState } from "react";

const { primary, accent, white } = colors;

export default function NewPassword({ navigation }: { navigation: any }) {
    const [newPassword, setNewPassword] = useState("");
    const [verifyNewPassword, setVerifyNewPassword] = useState("");
    async function changeUserPassword() {
        const auth = getAuth();
        const user = auth.currentUser;
        if (user) {
            try {
                await updatePassword(user, newPassword);
                console.log("Senha Atualizada");
                alert("Senha Atualizadaa");
                // Adicione aqui qualquer lógica adicional que você deseja após a atualização da senha
            } catch (error) {
                console.error("Erro ao atualizar senha: ", error);
                alert("Ocorreu um erro ao atualizar a senha.")
            }
        } else {
            console.log("No user is currently signed in");
            alert("No user is currently signed in");
        }
    }
    async function samePassword() {
        if (newPassword == verifyNewPassword) {
            if (newPassword.length >= 6) {
                await changeUserPassword();
                navigation.navigate("Login");
            } else {
                alert("Senha melhor !");
            }

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
                onPress={() => samePassword()}
            >
                Finalizar
            </RegularButton>
        </MainContainer>
    );
}
