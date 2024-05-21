import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import AboutUs from '../screens/AboutUs'; 

describe('AboutUs', () => {
    it('verificar se os componentes renderizam', () => {
        const screen = renderer.create(<AboutUs />);
        const instance = screen.root;

        const title = instance.findByType('h1');
        expect(title.props.children).toEqual('Sobre Nós');

        const text = instance.findByType('p');
        expect(text.props.children).toEqual('Nos somos o Minha Saúde em Dia, um aplicativo desenvolvido para melhorar a gestão da sua propria saúde e melhorar sua qualidade de vida. Nele você pode colocar lembretes de suas consultas, colocar um resumo delas, definir os horarios de suas medicações com apenas quatro informações, organizar os resultados de seus exames, bem como armazenar uma copia deles e muito mais.');
    });

    it('verifica se os componentes renderizam com react-testing-library', () => {
        render(<AboutUs />);

        const title = screen.getByRole('heading', { level: 1 });
        expect(title).toHaveTextContent('Sobre Nós');

        const text = screen.getByText('Nos somos o Minha Saúde em Dia, um aplicativo desenvolvido para melhorar a gestão da sua propria saúde e melhorar sua qualidade de vida. Nele você pode colocar lembretes de suas consultas, colocar um resumo delas, definir os horarios de suas medicações com apenas quatro informações, organizar os resultados de seus exames, bem como armazenar uma copia deles e muito mais.');
        expect(text).toBeInTheDocument();
    });
});