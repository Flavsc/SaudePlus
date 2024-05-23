import SPlus from "@assets/images/YELogo";
import RegularButton from "components/Buttons/RegularButton";
import StyledTextInput from "components/Inputs/StyledTextInput";
import { colors } from "components/colors";
import MainContainer from "components/containers/MainContainer";
import BigText from "components/texts/BigText";
import RegularText from "components/texts/RegularText";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { auth } from "firebase/Config";
import { updateEmail } from "firebase/auth";

const { primary, accent, white } = colors;

export default function NewEmail({ navigation }: { navigation: any }) {
    const [newEmail, setNewEmail] = useState("");
    const [verifyNewEmail, setVerifyNewEmail] = useState("");
    async function updateEmailAdress() {
        const user = auth.currentUser;
        if(user){
            try {
                await updateEmail(user, newEmail);
            } catch (error) {
                alert(error);
            }
        }else{
            alert("Sessão não iniciada ou algum erro inesperado aconteceu");
        }
    }
    function sameEmail() {
        if (newEmail == verifyNewEmail) {
            updateEmailAdress();
            navigation.navigate("Login");
            // puxar função do functions que atualize o email
            return true;
        } else {
            alert("Emails não coincidem.");
            navigation.navigate("NewEmail");
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
                label="Novo email"
                icon="lock-open"
                value={newEmail}
                onChangeText={setNewEmail}
                placeholder="Novo email"
                keyboardType="email-address"
                style={{ marginBottom: 50 }}
            />
            <RegularText style={{ marginBottom: 20 }}>
                Digite sua senha novamente:
            </RegularText>
            <StyledTextInput
                label="Novo email novamente"
                icon="lock-open"
                value={verifyNewEmail}
                onChangeText={setVerifyNewEmail}
                placeholder="Novo email"
                keyboardType="email-address"
                style={{ marginBottom: 50 }}
            />
            <StatusBar style="auto" />
            <RegularButton
                style={{ marginBottom: 20 }}
                onPress={() => sameEmail()}
            >
                Finalizar
            </RegularButton>
        </MainContainer>
    );
}
