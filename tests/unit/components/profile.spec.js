import { mount } from '@vue/test-utils';
import AppProfile from '@/components/profile/profile.vue';

describe('App profile está montada', () => {
    const wrapper = mount(AppProfile);

    test('é uma instancia Vue', () => {
        expect(wrapper).toBeTruthy();
    });

    test('se url da imagem está sendo recebida', () => {
        wrapper.setProps({url: 'caminho/user-profile.png'});
        expect(wrapper.vm.url).toBe('caminho/user-profile.png');
    });

    test('se a url da imagem está sendo usada corretamente', () => {
        wrapper.setProps({url: 'caminho/user-profile.png'});
        expect(wrapper.html()).toContain('caminho/user-profile.png');
    })
})