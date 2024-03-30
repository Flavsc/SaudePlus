import React, { FunctionComponent } from "react";
import styled from "styled-components/native";

import { ContainerProps } from "./types";
import { colors } from "../colors";

const { primary, white } = colors;

const StyledView = styled.View`
    flex: 1;
    background-color: ${primary};
    justify-content: center;
    align-items: center;
    border-radius: 15px;
`;

const SmallContainer: FunctionComponent<ContainerProps> = (props) => {
    return <StyledView style={props.style}>{props.children}</StyledView>;
};

export default SmallContainer;
