import { mount } from '@vue/test-utils';
import App from '@/App.vue';

describe('App está montada', () => {
    const wrapper = mount(App);

    test('é uma instancia Vue', () => {
        expect(wrapper).toBeTruthy();
    });
});