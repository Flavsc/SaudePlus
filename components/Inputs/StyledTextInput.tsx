import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState, FunctionComponent } from "react";
import styled from "styled-components/native";

import { InputProps } from "./types";
import { colors } from "../colors";
import SmallText from "../texts/SmallText";

const { primary, secondary, accent, white, black, gray, comp } = colors;

const InputWrapper = styled.View`
    width: 100%;
`;

const LeftIcon = styled.View`
    position: absolute;
    top: 35px;
    left: 15px;
    z-index: 1;
    border-right-width: 2px;
    border-color: ${secondary};
    padding-right: 10px;
`;

const InputField = styled.TextInput`
    background-color: ${white};
    height: 60px;
    border-width: 2px;
    border-radius: 10px;
    border-color: ${secondary};
    margin-vertical: 3px;
    margin-bottom: 10px;
    padding: 15px;
    padding-left: 65px;
    padding-right: 55px;
    font-size: 16px;
    color: ${black};
`;

const RightIcon = styled.TouchableOpacity`
    position: absolute;
    top: 35px;
    right: 15px;
    z-index: 1;
`;

const StyledTextInput: FunctionComponent<InputProps> = ({
    icon,
    label,
    isPassword,
    ...props
}) => {
    const [inputBackgroundColor, setInputBackgroundColor] = useState(white);
    const [hidePassword, setHidePassword] = useState(true);
    const customOnFocus = () => {
        props?.onFocus;
        setInputBackgroundColor(comp);
    };
    const customOnBlur = () => {
        props?.onBlur;
        setInputBackgroundColor(white);
    };

    return (
        <InputWrapper>
            <LeftIcon>
                <MaterialCommunityIcons name={icon} size={30} color={accent} />
            </LeftIcon>
            <SmallText>{label}</SmallText>
            <InputField
                {...props}
                placeholderTextColor={gray}
                style={[{ backgroundColor: inputBackgroundColor }, props.style]}
                onFocus={customOnFocus}
                onBlur={customOnBlur}
                secureTextEntry={isPassword && hidePassword}
            />
            {isPassword && (
                <RightIcon
                    onPress={() => {
                        setHidePassword(!hidePassword);
                    }}
                >
                    <MaterialCommunityIcons
                        name={hidePassword ? "eye-off" : "eye"}
                        size={30}
                        color={black}
                    />
                </RightIcon>
            )}
        </InputWrapper>
    );
};

export default StyledTextInput;
