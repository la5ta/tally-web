import React from 'react';
import { mount } from 'enzyme';
import 'jsdom-global/register';
import Layout from './Layout';

describe('Layout', () => {
    it('Layout should have title: Tally', async () => {
        const wrap = mount(<Layout title="algo">
            <h1>Hello Next.js <span role="img" aria-label="hand wave">👋</span></h1>
        </Layout>);

        await expect(wrap.find('h1').text()).toBe('Hello Next.js 👋');
    });
});