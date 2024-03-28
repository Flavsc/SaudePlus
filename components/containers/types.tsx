import { ReactNode } from "react";
import { StyleProp, ViewStyle } from "react-native";

export interface ContainerProps {
    children: ReactNode;
    style?: StyleProp<ViewStyle>;
}
