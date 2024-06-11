import SPlus from "@assets/images/YELogo";
import MainContainer from "components/containers/MainContainer";
import SmallContainer from "components/containers/SmallContainer";
import BigText from "components/texts/BigText";
import RegularText from "components/texts/RegularText";
import Camera from "components/Camera/Camera";

export default function CameraTest() {
    return (
        <MainContainer>
            <SPlus />
            <BigText style={{ marginBottom: 10 }}>Camera Test</BigText>
            <RegularText style={{ marginBottom: 20 }}>
                Gestão Inteligente de Saúde
            </RegularText>
                <Camera/>
        </MainContainer>
    );
}
