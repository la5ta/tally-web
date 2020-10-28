import MainLayout from '@components/Layouts/Main/Main';
// import { create } from 'react-test-renderer';
import React from 'react';
import { mount, shallow } from 'enzyme';
import MainLayoutSider from '@components/Layouts/Main/Sider';

// import Layout from '../../components/Layouts/Main/Main';
const resizeWindow = (width, height) => {
    global.innerWidth = width;
    global.innerHeight = height;
    window.dispatchEvent(new Event('resize'));
}

jest.useFakeTimers();
describe('Layout', () => {
    it('Layout should have title: Tally', () => {

        const layout = mount(<MainLayout>
            <h1>Hello Next.js <span role="img" aria-label="hand wave">👋</span></h1>
        </MainLayout>);

        expect(layout.find('h1').text()).toBe('Hello Next.js 👋');
    });

    it('Button should collapse the side Menu', () => {
        const layout = mount(<MainLayout>
            <h1>Hello Next.js <span role="img" aria-label="hand wave">👋</span></h1>
        </MainLayout>);
        layout.find('#button').simulate('click');
        expect(layout.find(MainLayoutSider).prop("collapsed")).toBe(true);
    })

    it('On resize should show the other menu', () => {
        // eslint-disable-next-line no-global-assign
        const layout = shallow(<MainLayout>
            <h1>Hello Next.js <span role="img" aria-label="hand wave">👋</span></h1>
        </MainLayout>);
        expect(layout.find(MainLayoutSider).prop("className")).toBe("show-pc");
        // Change the viewport to 576px for mobile screen.
        // resizeWindow(576, 576);
        // console.log(global.innerWidth);
        expect(layout.find(MainLayoutSider).prop("className")).toBe("show-mobile");

        // Change the viewport to 1200px for pc screen.
        // resizeWindow(1200, 1200);
        // console.log(window.innerWidth);

    })
});