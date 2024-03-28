import React, { FunctionComponent } from "react";
import styled from "styled-components/native";

import { TextProps } from "./types";
import { colors } from "../colors";

const { white, black } = colors;

const StyledText = styled.Text`
    font-size: 13px;
    color: ${black};
    text-align: left;
`;

const SmallText: FunctionComponent<TextProps> = (props) => {
    return <StyledText style={props.style}>{props.children}</StyledText>;
};

export default SmallText;
