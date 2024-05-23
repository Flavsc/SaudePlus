import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import { render, screen } from "@testing-library/react";
import Configuration from "../screens/Configuration";
import RegularButton from "components/Buttons/RegularButton";

describe("configuration", () => {
    it("Carregar menu configuracoes", () => {
        let container;

        act(() => {
            container = document.createElement("div");
            document.body.appendChild(container);
            ReactDOM.render(<Configuration />, container);
        });

        act(() => {
            ReactDOM.unmountComponentAtNode(container);
        });

        const texts = [
            "Exames",
            "Calendário",
            "Mapa",
            " Consultas",
            " Sobre nós",
            " Configuração"
        ];

        texts.forEach((texts) => {
            expect(Button.props.children).toEqual(<RegularButton />);
        });
    });
});
