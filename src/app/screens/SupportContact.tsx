import SPlus from "@assets/images/sPlus";
import RegularButton from "components/Buttons/RegularButton";
import InputForComment from "components/Inputs/InputForComment";
import { colors } from "components/colors";
import MainContainer from "components/containers/MainContainer";
import BigText from "components/texts/BigText";
import RegularText from "components/texts/RegularText";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";

const { primary, accent, white } = colors;

export default function PasswordForget({ navigation }: { navigation: any }) {
    const [newComment, setComment] = useState("");
    function enviarEmail() {
        ////// chamar a função do backend para enviar o email, puxar o email do cliente e enviar a dúvida no corpo do email
    }
    return (
        <MainContainer>
            <BigText style={{ marginBottom: 20 }}>Suporte</BigText>
            <RegularText style={{ marginBottom: 20 }}>
                O atendimento ocorre de segunda a sexta das 8-20hrs - Telefone
                (xxxxxxxxxxxxx)
            </RegularText>
            <RegularText style={{ marginBottom: 20 }}>
                Escreva sua dúvida que será enviada ao suporte.
            </RegularText>
            <InputForComment
                label="Comentário"
                icon="help"
                value={newComment}
                onChangeText={setComment}
                placeholder=""
                keyboardType="email-address"
                style={{ marginBottom: 50 }}
            />
            <StatusBar style="auto" />
            <RegularButton
                style={{ marginBottom: 20 }}
                onPress={() => enviarEmail()}
            >
                Enviar Dúvida
            </RegularButton>
        </MainContainer>
    );
}
