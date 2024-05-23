import React from "react";
import { render, screen } from "@testing-library/react";
import MainContainer from "components/containers/MainContainer";
import RegularButton from "components/Buttons/RegularButton";

describe("SupportContact", () => {
    it("Carregar menu de suporte", () => {
        let container;

        act(() => {
            container = document.createElement(<MainContainer />);
            document.body.appendChild(container);
            ReactDOM.render(<MainContainer />, container);
        });

        act(() => {
            ReactDOM.unmountComponentAtNode(container);
        });

        expect(Button.props.children).toEqual(<RegularButton />);
    });
});
