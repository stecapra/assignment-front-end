import { mount } from '@vue/test-utils';
import _sut from './BaseButton.vue'
import { writePackageJSON } from 'pkg-types';

describe('Base Button', () => {
    it('mount', () => {
        expect(_sut).toBeTruthy();
    })

    it('shows the title', async () => {
        const wrapper = mount(_sut);
        await wrapper.setProps({title: 'title'});
        expect(wrapper.find('button[data-test="title"]').text()).toBe('title');
        expect(wrapper.find('span[data-test="title-link"]').exists()).toBeFalsy();
    })

    it('shows the link version if link prop is passed', async () => {
        const wrapper = mount(_sut);
        await wrapper.setProps({title: 'title', link: true});
        expect(wrapper.find('span[data-test="title"]').exists()).toBeFalsy();
        expect(wrapper.find('span[data-test="title-link"]').text()).toBe('title');
    })

    it('emit an event when clicked', async () => {
        const wrapper = mount(_sut);
        const button = wrapper.find('button[data-test="title"]');
        await button.trigger('click');
        await wrapper.vm.$nextTick();
        expect(wrapper.emitted('clicked')).toBeTruthy();
    })
})
