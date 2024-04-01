import SPlus from "@assets/images/sPlus";
import RegularButton from "components/Buttons/RegularButton";
import MainContainer from "components/containers/MainContainer";
import SmallContainer from "components/containers/SmallContainer";
import BigText from "components/texts/BigText";
import RegularText from "components/texts/RegularText";

export default function InitialPage({ navigation }: { navigation: any }) {
    return (
        <MainContainer>
            <SPlus />
            <BigText style={{ marginBottom: 10 }}>Saude Plus</BigText>
            <RegularText style={{ marginBottom: 20 }}>
                Gestão Inteligente de Saúde
            </RegularText>
            <RegularButton
                style={{ marginBottom: 20 }}
                onPress={() => navigation.navigate("Login")}
            >
                Proximo
            </RegularButton>
        </MainContainer>
    );
}
