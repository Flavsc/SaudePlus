import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState, FunctionComponent } from "react";
import styled from "styled-components/native";

import { InputProps } from "./types";
import { colors } from "../colors";
import SmallText from "../texts/SmallText";

const { primary, secondary, accent, white, black, gray, comp, inputback } =
    colors;

const InputWrapper = styled.View`
    width: 100%;
`;

const InputField = styled.TextInput`
    background-color: ${white};
    height: 250px;
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

const InputForComment: FunctionComponent<InputProps> = ({
    icon,
    label,
    isPassword,
    ...props
}) => {
    const [inputBackgroundColor, setInputBackgroundColor] = useState(white);
    const [hidePassword, setHidePassword] = useState(true);
    const customOnFocus = () => {
        props?.onFocus;
        setInputBackgroundColor(inputback);
    };
    const customOnBlur = () => {
        props?.onBlur;
        setInputBackgroundColor(white);
    };

    return (
        <InputWrapper>
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

export default InputForComment;
