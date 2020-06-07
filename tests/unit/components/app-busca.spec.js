import { mount } from '@vue/test-utils';
import AppBusca from '@/components/app-busca/app-busca.vue';

describe('App busca está montado', () => {
    const wrapper = mount(AppBusca);

    test('é uma instancia Vue', () => {
        expect(wrapper).toBeTruthy();
    });
})