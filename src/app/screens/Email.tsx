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
import { updateEmail } from "firebase/auth";

const { primary, accent, white } = colors;

export default function Email({ navigation }: { navigation: any }) {
    const [newEmail, setNewEmail] = useState("");
    const [verifyNewEmail, setVerifyNewEmail] = useState("");
    async function sameEmail() {
        if (newEmail == verifyNewEmail) {
            const user = auth.currentUser;
            if (user) {
                await updateEmail(user, newEmail);
                alert("Email alterado com sucesso!");
                navigation.navigate("Login");
            } else {
                alert("Erro ao alterar senha.");
            }

            return true;
        } else {
        }
    }
    return (
        <MainContainer>
            <SPlus />
            <BigText style={{ marginBottom: 20 }}>Insira os dados</BigText>
            <RegularText style={{ marginBottom: 20 }}>
                Digite seu novo email:
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
                Digite seu novo email novamente:
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
                Alterar
            </RegularButton>
        </MainContainer>
    );
}
