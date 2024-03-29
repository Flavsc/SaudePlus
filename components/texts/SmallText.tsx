import { useFonts } from "expo-font";
import React, { FunctionComponent } from "react";
import styled from "styled-components/native";

import { TextProps } from "./types";
import { colors } from "../colors";

const { white, black } = colors;

const StyledText = styled.Text`
    font-size: 15px;
    color: ${black};
    text-align: left;
    font-family: Nunito;
`;

const SmallText: FunctionComponent<TextProps> = (props) => {
    const [fontsLoaded] = useFonts({
        Nunito: require("src/app/assets/fonts/Nunito.ttf")
    });

    if (!fontsLoaded) {
        return undefined;
    }

    return <StyledText style={props.style}>{props.children}</StyledText>;
};

export default SmallText;
