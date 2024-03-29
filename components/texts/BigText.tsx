import { useFonts } from "expo-font";
import React, { FunctionComponent } from "react";
import styled from "styled-components/native";

import { TextProps } from "./types";
import { colors } from "../colors";

const { white, black, primary } = colors;

const StyledText = styled.Text`
    font-size: 32px;
    color: ${primary};
    text-align: left;
    font-family: Nunito;
`;

const BigText: FunctionComponent<TextProps> = (props) => {
    const [fontsLoaded] = useFonts({
        Nunito: require("src/app/assets/fonts/Nunito.ttf")
    });

    if (!fontsLoaded) {
        return undefined;
    }

    return <StyledText style={props.style}>{props.children}</StyledText>;
};

export default BigText;
