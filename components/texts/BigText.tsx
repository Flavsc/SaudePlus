import React, { FunctionComponent } from "react";
import styled from "styled-components/native";

import { TextProps } from "./types";
import { colors } from "../colors";

const { white } = colors;

const StyledText = styled.Text`
    font-size: 30px;
    color: ${white};
    text-align: left;
`;

const BigText: FunctionComponent<TextProps> = (props) => {
    return <StyledText style={props.style}>{props.children}</StyledText>;
};

export default BigText;
