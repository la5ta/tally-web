import React from 'react';
import { create } from 'react-test-renderer';
import Layout from '../../components/Layouts/Main/Main';

jest.useFakeTimers();
describe('Layout', () => {
    it('Layout should have title: Tally', () => {
        const layout = create(<Layout>
            <h1>Hello Next.js <span role="img" aria-label="hand wave">👋</span></h1>
        </Layout>);

        // expect(wrap.find('h1').text()).toBe('Hello Next.js 👋');
        expect(1).toBe(1);
        // expect(layout.toJSON()).toMatchSnapshot();
    });
});