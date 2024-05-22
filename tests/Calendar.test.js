import React from "react";
import renderer from "react-test-renderer";
import { render, screen, create } from "@testing-library/react";
import Calendar from "../screens/Calendar";

describe("Calendar", () => {
    it("carregar calendario", () => {
        const screen = renderer.create(<Calendar />);
        const instance = screen.root;
        expect(title.props.children).toEqual("Calendário");
        expect(text.props.children).toEqual(
            " Selecione o dia para marcar sua consulta"
        );
    });
});
