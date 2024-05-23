import SPlus from "@assets/images/YELogo";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegularButton from "components/Buttons/RegularButton";
import CameraT from "components/Camera/Camera";
import GridView from "components/Grids/GridView";
import MainContainer from "components/containers/MainContainer";
import SmallContainer from "components/containers/SmallContainer";
import BigText from "components/texts/BigText";
import RegularText from "components/texts/RegularText";
import React from "react";
import { View } from "react-native";
import { Button, SegmentedButtons } from "react-native-paper";

export default function MainPage({ navigation }: { navigation: any }) {
    const [value, setValue] = React.useState("");
    return (
        <MainContainer>
            <BigText style={{ marginBottom: 10 }}>Remédios Salvos</BigText>
            <SmallContainer style={{ flexDirection: "row", flexWrap: "wrap" }}>
                <SegmentedButtons
                    value={value}
                    onValueChange={setValue}
                    buttons={[
                        {
                            value: "plus",
                            label: "Adicionar"
                        },
                        {
                            value: "pencil",
                            label: "Editar"
                        },
                        { value: "delete", label: "Excluir" }
                    ]}
                />
            </SmallContainer>
        </MainContainer>
    );
}
