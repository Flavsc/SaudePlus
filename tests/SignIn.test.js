import React from 'react';
import { render, screen } from '@testing-library/react';
import SignIn from '../screens/SignIn'; 
import FakeButton from 'components/Buttons/FakeButton';

describe('SignIn', () => {
    it('Carregar página de login', () => {
        const screen = renderer.create(<SignIn />);
        const instance = screen.root;
        expect(text.props.children).toEqual('Login');
        expect(instance.findByType(<FakeButton/>).props.children).toEqual('Esqueci minha senha');
    });
});