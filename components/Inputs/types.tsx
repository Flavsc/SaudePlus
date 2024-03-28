import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ReactNode, ComponentProps } from "react";
import { TextInputProps } from "react-native";

interface ExtraInputProps {
    label: ReactNode;
    icon: ComponentProps<typeof MaterialCommunityIcons>["name"];
    isPassword?: boolean;
}

export type InputProps = TextInputProps & ExtraInputProps;
