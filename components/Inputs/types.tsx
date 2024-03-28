import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ReactNode, ComponentProps } from "react";
import { TextInputProps } from "react-native";

interface ExtraInputProps {
    label: ReactNode;
    icon: ComponentProps<typeof MaterialCommunityIcons>["name"];
}

export type InputProps = TextInputProps & ExtraInputProps;
