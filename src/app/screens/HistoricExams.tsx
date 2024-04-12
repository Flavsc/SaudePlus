import RegularButton from "components/Buttons/RegularButton";
import MainContainer from "components/containers/MainContainer";
import SmallContainer from "components/containers/SmallContainer";

export default function HistoricExams({ navigation }: { navigation: any }) {
    return (
        <MainContainer>
            <SmallContainer style={{ flexDirection: "row", flexWrap: "wrap" }}>
                <RegularButton
                    style={{ marginBottom: 20 }}
                    onPress={() => navigation.navigate("Hemograma")}
                >
                    Hemograma
                </RegularButton>
                <RegularButton
                    style={{ marginBottom: 20 }}
                    onPress={() => navigation.navigate("Glicose")}
                >
                    Glicose
                </RegularButton>
                <RegularButton
                    style={{ marginBottom: 20 }}
                    onPress={() => navigation.navigate("Colesterol")}
                >
                    Colesterol
                </RegularButton>
                <RegularButton
                    style={{ marginBottom: 20 }}
                    onPress={() => navigation.navigate("TGO")}
                >
                    TGO
                </RegularButton>
                <RegularButton
                    style={{ marginBottom: 20 }}
                    onPress={() => navigation.navigate("TGP")}
                >
                    TGP
                </RegularButton>
            </SmallContainer>
        </MainContainer>
    );
}
