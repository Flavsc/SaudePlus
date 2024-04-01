import React, { FunctionComponent } from "react";
import styled from "styled-components/native";

import { ButtonProps } from "./types";
import { colors } from "../colors";
import RegularText from "../texts/RegularText";

const { primary, accent, white, secondary } = colors;

const ButtonView = styled.TouchableOpacity`
    background-color: ${secondary};
    width: 100%;
    height: 60px;
    padding: 15px;
    border-radius: 15px;
    justify-content: center;
    align-items: center;
`;

const RegularButton: FunctionComponent<ButtonProps> = (props) => {
    return (
        <ButtonView onPress={props.onPress} style={props.style}>
            <RegularText style={[{ color: white }, props.textStyle]}>
                {props.children}
            </RegularText>
        </ButtonView>
    );
};

export default RegularButton;
