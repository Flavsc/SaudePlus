import React, { FunctionComponent } from "react";
import styled from "styled-components/native";

import { ContainerProps } from "./types";
import { colors } from "../colors";

const { primary } = colors;

const StyledView = styled.View`
    flex: 1;
    padding: 25pc;
    padding-top: 40px;
    background-color: ${primary};
    justify-content: center;
    align-items: center;
`;

const MainContainer: FunctionComponent<ContainerProps> = (props) => {
    return <StyledView style={props.style}>{props.children}</StyledView>;
};

export default MainContainer;
