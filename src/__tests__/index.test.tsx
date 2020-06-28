import React from 'react';
import TestRenderer from 'react-test-renderer';
import Index from '../pages/index';
import 'jsdom-global/register';


describe('Index', () => {
    it('should render without throwing an error', () => {
        const testRenderer = TestRenderer.create(<Index />);
        expect(testRenderer.toJSON()).toMatchSnapshot();
    });

});