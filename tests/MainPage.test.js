import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import MainPage from '../screens/MainPage';
import RegularButton from 'components/Buttons/RegularButton';
import { Button } from 'react-native-paper';

describe('MainPage', () => {
    it('carregar página principal', () => {
        const screen = renderer.create(<MainPage />);
        const instance = screen.root;
        expect(title.props.children).toEqual('Como podemos te ajudar hoje?');
        expect(Button.props.children).toEqual(<RegularButton/>);
        const texts = ['Exames', 'Calendário', 'Mapa', ' Consultas', ' Sobre nós', ' Configuração'];

        titles.forEach(texts => {
            expect(Button.props.children).toEqual(<RegularButton />);
        });
    });
});