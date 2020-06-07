import { mount, shallowMount } from '@vue/test-utils';
import AppCardProcesso from '@/components/card-processo/card-processo.vue';

describe('App cardProcesso está montado', () => {

    const wrapper = mount(AppCardProcesso, {
        propsData: {
            processo: {
                id: 1,
                nome: 'Nome do processo',
                qtd_etapas: '8 Etapas',
                atividades_esperando_mentoria: 120,
                evidencias: 12,
                feedbacks: 3
            }
        }
    });

    test('é uma instancia Vue', () => {
        expect(wrapper).toBeTruthy();
    });

    test('se os dados do processo passado estão sendo exibidos de forma correta', () => {

        const processo_fake = {
            id: 1,
            nome: 'Nome do processo',
            qtd_etapas: '8 Etapas',
            atividades_esperando_mentoria: 120,
            evidencias: 12,
            feedbacks: 3
        };
        const componente = wrapper.html();
        expect(componente).toContain(processo_fake.nome);
        expect(componente).toContain(processo_fake.qtd_etapas);
        expect(componente).toContain(processo_fake.atividades_esperando_mentoria);
        expect(componente).toContain(processo_fake.evidencias);
        expect(componente).toContain(processo_fake.feedbacks);
    });
})