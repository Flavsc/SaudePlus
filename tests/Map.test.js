import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Map from 'path/to/Map'; 
import MapView from 'react-native-maps'; 
import MapViewDirections from 'react-native-maps-directions'; 

describe('Map', () => {
    it('carregar mapa', () => {
        const screen = renderer.create(<Map />);
        const instance = screen.root;
        expect(title.props.children).toEqual('Mapa');
        expect(instance.findByType(MapView)).toBeDefined();
        expect(instance.findByType(MapViewDirections).toBeDefined());
    });
});