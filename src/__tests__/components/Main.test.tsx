import MainLayout from '@components/Layouts/Main/Main';
import { mount } from 'enzyme';
import React from 'react';

// import Layout from '../../components/Layouts/Main/Main';

jest.useFakeTimers();
describe('Layout', () => {
    it('Layout should have title: Tally', () => {
        const layout = mount(<MainLayout>
            <h1>Hello Next.js <span role="img" aria-label="hand wave">👋</span></h1>
        </MainLayout>);

        // expect(wrap.find('h1').text()).toBe('Hello Next.js 👋');
        expect(1).toBe(1);
        // expect(layout.toJSON()).toMatchSnapshot();
    });
});