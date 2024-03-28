import { ReactNode } from "react";
import { StyleProp, TextStyle } from "react-native";

export interface TextProps {
    children: ReactNode;
    style?: StyleProp<TextStyle>;
}
