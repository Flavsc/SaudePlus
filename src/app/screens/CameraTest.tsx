import SPlus from "@assets/images/YELogo";
import MainContainer from "components/containers/MainContainer";
import SmallContainer from "components/containers/SmallContainer";
import BigText from "components/texts/BigText";
import RegularText from "components/texts/RegularText";
import Camera from "components/Camera/Camera";
import { red } from "react-native-reanimated/lib/typescript/reanimated2/Colors";

export default function CameraTest() {
    return (
        <MainContainer>
            <RegularText style={{fontSize: 25 }}>
                Tire uma foto com a camera
            </RegularText>
            <RegularText style={{ color: 'red' }}>
                OBS: Certifique-se que a imagem está nítida
            </RegularText>
            <Camera/>
        </MainContainer>
    );
}
