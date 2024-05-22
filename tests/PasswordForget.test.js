import React from "react";
import renderer from "react-test-renderer";
import PasswordForget from "../screens/PasswordForget";
import RegularButton from "components/Buttons/RegularButton";

describe("PasswordForget", () => {
    it("Carregar página de esqueci minha senha", () => {
        const screen = renderer.create(<PasswordForget />);
        const instance = screen.root;
        expect(text.props.children).toEqual(
            "Enviaremos um link no seu e-mail para que você possa trocar de senha."
        );
        expect(instance.findByType(<RegularButton />).props.children).toEqual(
            "Proximo"
        );
    });
});
