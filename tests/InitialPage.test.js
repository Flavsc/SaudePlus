import React from "react";
import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import InitialPage from "../screens/InitialPage";
import RegularButton from "components/Buttons/RegularButton";
import { Button } from "react-native-paper";

describe("InitialPage", () => {
    it("carregar página inicial", () => {
        const screen = renderer.create(<InitialPage />);
        const instance = screen.root;
        expect(title.props.children).toEqual("Gestão Inteligente de Saúde");
        expect(Button.props.children).toEqual(<RegularButton />);
    });
});
