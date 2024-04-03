import React, { FunctionComponent } from "react";
import styled from "styled-components/native";

import { ContainerProps } from "./types";
import { colors } from "../colors";

const { primary, white } = colors;

const StyledView = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${white};
    display: grid;
    grid-row-gap: 10px;
    grid-auto-rows: 90px;
    grid-column: 1 / 2;
    grid-row: 1 / 2;
`;

const SmallContainer: FunctionComponent<ContainerProps> = (props) => {
    return <StyledView style={props.style}>{props.children}</StyledView>;
};

export default SmallContainer;
