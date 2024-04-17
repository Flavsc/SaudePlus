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
                style={{ marginBottom: 50 }}
            />
            <RegularButton
                style={{ marginBottom: 20 }}
                onPress={() => navigation.navigate("NewPassword")}
            >
                Verificar (Verificar se codigo e correto)
            </RegularButton>
        </MainContainer>
    );
}
