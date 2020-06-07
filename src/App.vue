<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
        <a class="navbar-brand" data-toggle="collapse" data-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation" href="#">
            <img src="src/assets/icon-kanttum.svg" width="100" height="65" alt="" loading="lazy">
        </a>

        <div class="controles ml-auto">
              <notificacao>3</notificacao>
              <app-profile url="src/assets/user-profile.png"></app-profile>
        </div>
    
      </nav>

      <div class="wrapper d-flex">

          <app-menu/>

          <div class="content">
            <main>
                <div class="container-flluid">
                    <div class="conteudo">

                        <div class="titulo row">
                            <div class="col">
                              <h2>Formação</h2>
                            </div>
                            <div class="col-1 align-self-end">
                              <i class="material-icons">more_vert</i>
                            </div>
                        </div>

                        <app-busca v-on:filtrar="filtrarCards($event)" ></app-busca>
                          
                        <div class="cartoes row">
                          <div class="col-md-6" v-for="processo in processos" :key="processo.id">
                            <card-processo v-bind:processo="processo"></card-processo>
                          </div>
                        </div>
                    </div>
                </div>
            </main>
          </div>
      </div>
  </div>
</template>

<script>
import AppNotificacao from './components/notificacoes/notificacoes.vue';
import AppProfile from './components/profile/profile.vue';
import CardProcesso from './components/card-processo/card-processo.vue';
import AppBusca from './components/app-busca/app-busca.vue';
import AppMenu from './components/app-menu/app-menu.vue';

export default {
  components: {
    'notificacao': AppNotificacao,
    'app-profile': AppProfile,
    'card-processo': CardProcesso,
    'app-busca': AppBusca,
    'app-menu': AppMenu
  },
  data() {
    return {
      processos: [
        {
          id:1,
          nome: 'Processo 1',
          qtd_etapas: 7,
          atividades_esperando_mentoria: 23,
          evidencias: 13,
          feedbacks: 89
        },
        {
          id: 2,
          nome: 'Processo 2',
          qtd_etapas: 3,
          atividades_esperando_mentoria: 54,
          evidencias: 1,
          feedbacks: 24
        }
      ]
    }
  },
  methods: {
    filtrarCards: function(filtro) {
      alert(filtro);
    }
  }
  
}
</script>

<style>
body {
    min-width: 350px;
}

.wrapper {
    margin-top: 60px;
}

.content {
    width: 100%;
}

.navbar {
    background-color: #2B8FBA;
    padding: 0;
    height: 65px;
}

.navbar-brand {
    padding: 0;
}

.controles {
    display: flex;
}

.nav-link {
    color: #868686;
}

.nav-link i {
    display: block;
}

.nav-link:hover {
    color: #868686;
}

.titulo {
    background-color: #FAFAFA;
    padding: 30px 10px 30px 30px;
    color: #424242;
    border-bottom: 1px solid #EEEEEE;
    margin: 0;
}

.cartoes {
   margin: 0 auto;
}

</style>