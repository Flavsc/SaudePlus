import React from "react";
import renderer from "react-test-renderer";
import { Button } from "react-native-paper";
import MedicalAppoitment from "../screens/MedicalAppoitment";

describe("MedicalAppoitment", () => {
    it("Carregar página de consultas", () => {
        const screen = renderer.create(<MedicalAppoitment />);
        const instance = screen.root;
        expect(Button.props.children).toEqual("Adicionar Consulta");
        expect(instance.findByType(Button).props.children).toEqual(
            "Adicionar Consulta"
        );
    });
});
