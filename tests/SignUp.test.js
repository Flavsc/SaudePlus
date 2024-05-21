import React from 'react';
import renderer from 'react-test-renderer';
import MainContainer from 'components/containers/MainContainer';
import StyledTextInput from 'components/inputs/StyledTextInput'; // ajuste o caminho conforme necessário
import { Button } from 'react-native-paper';

describe('SignUp', () => {
    it('Carregar menu de cadastro', () => {
        let container;

        act(() => {
            container = document.createElement('div');
            document.body.appendChild(container);
            ReactDOM.render(<MainContainer />, container);
        });

        act(() => {
            ReactDOM.unmountComponentAtNode(container);
        });

        expect(Button.props.children).toEqual(<StyledTextInput/>);
    });
});