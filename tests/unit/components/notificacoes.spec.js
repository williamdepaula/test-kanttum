import { mount, shallowMount } from '@vue/test-utils';
import AppNotificacao from '@/components/notificacoes/notificacoes.vue';

describe('App está montada', () => {
    const wrapper = mount(AppNotificacao);

    test('é uma instancia Vue', () => {
        expect(wrapper).toBeTruthy();
    });

    test('está renderizando corretamente', () => {
        const notificacao_vazia = "<div class=\"notificacoes\"><a href=\"#\"><img src=\"src/assets/icon-notifications.svg\" alt=\"\"> <span class=\"badge badge-danger\"></span></a></div>";
        expect(wrapper.html()).toEqual(notificacao_vazia);
    });

    test('está exibindo 3 quando 3 é passado', () => {

        const shallowWrapper = shallowMount(AppNotificacao,{
            scopedSlots: {
                default: '<notificacao>3</notificacao>'
            }
        });

        expect(shallowWrapper.html()).toContain('3')
    });
    
});