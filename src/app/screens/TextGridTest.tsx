import TextGrid from "components/Grids/TextGrid";
import MainContainer from "components/containers/MainContainer";
import BigText from "components/texts/BigText";

export default function TextGridTest() {
    return (
        <MainContainer>
            <BigText style={{ marginBottom: 20, marginTop: 20 }}>
                TextGridTest
            </BigText>
            <TextGrid />
        </MainContainer>
    );
}
