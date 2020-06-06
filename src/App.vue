<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
        <a class="navbar-brand" data-toggle="collapse" data-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation" href="#">
            <img src="src/assets/icon-kanttum.svg" width="100" height="65" alt="" loading="lazy">
        </a>

        <div class="controles ml-auto">
              <app-notificacao>3</app-notificacao>
              <app-profile></app-profile>
        </div>
    
      </nav>

      <div class="wrapper d-flex">
          <div class="sideMenu collapse navbar-collapse show" id="navbarSupportedContent1">
              <div class="sidebar">
                    <div class="row">
                        <div class="col">
                            <a href="#" class="menu-link">
                            <div class="menu-item">
                                <i class="material-icons">donut_large</i>
                                Formações
                            </div>
                            </a>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col">
                            <a href="#" class="menu-link">
                              <div class="menu-item">
                                  <i class="material-icons">school</i>
                                  Cursos
                              </div>
                            </a>
                          </div>
                    </div>

                    <div class="row">
                        <div class="col">
                            <a href="#" class="menu-link">
                              <div class="menu-item">
                                  <i class="material-icons">play_circle_outline</i>
                                  Canais
                              </div>
                            </a>
                        </div>
                    </div>

                    <div class="row">
                        
                        <div class="col">
                            <a href="#" class="menu-link">
                              <div class="menu-item">
                                  <i class="material-icons">bar_chart</i>
                                  Relatórios
                              </div>
                            </a>
                        </div>
                    </div>

                    <div class="row">                  
                        <div class="col">
                            <a href="#" class="menu-link">
                                <div class="menu-item">
                                  <i class="material-icons">group</i>
                                  Grupos de Usuários
                                </div>
                            </a>
                        </div>
                    </div>
                  
              </div>
          </div>
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

                        <div class="filtros row">
                            <div class="col-11">
                              <form action="" class="search-form">
                                  <div class="form-group has-feedback">
                                  <label for="search" class="sr-only">Buscar</label>
                                  <input type="text" class="form-control" name="search" id="search" placeholder="buscar">
                                  <span class="glyphicon glyphicon-search form-control-feedback"></span>
                                  <span class="material-icons form-control-feedback">search</span>
                                </div>
                              </form>
                          </div>
                          <div class="col-1"> 
                            <div class="filtro text-center">
                            <i class="material-icons">filter_list</i>
                            </div>               
                          </div>
                        </div>
                          
                          <div class="cartoes row">
                            <div class="col-md-6">
                              <div class="cartao">
                                  <div class="cartao-line row">
                                      <div class="img">
                                        <span class="dot"></span>
                                      </div>
                                      <div class="col">
                                          <div class="processo row">Nome do Processo</div>
                                          <div class="etapa row">5 Etapas</div>
                                      </div>
                                  </div>
            
                                  <div class="cartao-line link row">
                                     <a href="#">
                                      <div class="col-md-1">
                                        <i class="material-icons">school</i>
                                      </div>
                                      <div class="col">
                                        <p>102 atividades <span>aguardando mentoria</span></p>
                                      </div>
                                      <div class="col-md-1">
                                        <i class="material-icons">keyboard_arrow_right</i>
                                      </div>
                                     </a>                          
                                  </div>
            
                                  <div class="cartao-line link row">
                                     <a href="#">
                                      <div class="col-md-1">
                                        <i class="material-icons">videocam</i>
                                      </div>
                                      <div class="col">
                                        <p>9 evidências <span>aguardando mentoria</span></p>
                                      </div>
                                      <div class="col-md-1">
                                        <i class="material-icons">keyboard_arrow_right</i>
                                      </div>
                                     </a>                              
                                  </div>
            
                                  <div class="cartao-line link row">
                                    <a href="#">
                                      <div class="col-md-1">
                                        <i class="material-icons">record_voice_over</i>
                                      </div>
                                      <div class="col">
                                          <p>4 feedback <span>aguardando mentoria</span></p>
                                      </div>
                                      <div class="col-md-1">
                                          <i class="material-icons">keyboard_arrow_right</i>
                                      </div>     
                                    </a>                
                                  </div>
            
                                  <div class="cartao-comandos row">
                                    <div class="col text-right">
                                      <button type="button" class="cartao-buttons btn btn-light">PRÉ-VISUALIZAR</button>
                                      <button type="button" class="cartao-buttons btn btn-info">VER MENTORADOS</button>
                                    </div>                          
                                  </div>                     
                              </div>
                            </div>

                            <div class="col-md-6">
                                <div class="cartao">
                                    <div class="cartao-line row">
                                        <div class="img">
                                          <span class="dot"></span>
                                        </div>
                                        <div class="col">
                                            <div class="processo row">Nome do Processo</div>
                                            <div class="etapa row">5 Etapas</div>
                                        </div>
                                    </div>
              
                                    <div class="cartao-line link row">
                                       <a href="#">
                                        <div class="col-md-1">
                                          <i class="material-icons">school</i>
                                        </div>
                                        <div class="col">
                                          <p>102 atividades <span>aguardando mentoria</span></p>
                                        </div>
                                        <div class="col-md-1">
                                          <i class="material-icons">keyboard_arrow_right</i>
                                        </div>
                                       </a>                          
                                    </div>
              
                                    <div class="cartao-line link row">
                                       <a href="#">
                                        <div class="col-md-1">
                                          <i class="material-icons">videocam</i>
                                        </div>
                                        <div class="col">
                                          <p>9 evidências <span>aguardando mentoria</span></p>
                                        </div>
                                        <div class="col-md-1">
                                          <i class="material-icons">keyboard_arrow_right</i>
                                        </div>
                                       </a>                              
                                    </div>
              
                                    <div class="cartao-line link row">
                                      <a href="#">
                                        <div class="col-md-1">
                                          <i class="material-icons">record_voice_over</i>
                                        </div>
                                        <div class="col">
                                            <p>4 feedback <span>aguardando mentoria</span></p>
                                        </div>
                                        <div class="col-md-1">
                                            <i class="material-icons">keyboard_arrow_right</i>
                                        </div>     
                                      </a>                
                                    </div>
              
                                    <div class="cartao-comandos row">
                                      <div class="col text-right">
                                        <button type="button" class="cartao-buttons btn btn-light">PRÉ-VISUALIZAR</button>
                                        <button type="button" class="cartao-buttons btn btn-info">VER MENTORADOS</button>
                                      </div>                          
                                    </div>                     
                                </div>

                                </div>

                                <div class="col-md-6">
                                    <div class="cartao">
                                        <div class="cartao-line row">
                                            <div class="img">
                                              <span class="dot"></span>
                                            </div>
                                            <div class="col">
                                                <div class="processo row">Nome do Processo</div>
                                                <div class="etapa row">5 Etapas</div>
                                            </div>
                                        </div>
                  
                                        <div class="cartao-line link row">
                                           <a href="#">
                                            <div class="col-md-1">
                                              <i class="material-icons">school</i>
                                            </div>
                                            <div class="col">
                                              <p>102 atividades <span>aguardando mentoria</span></p>
                                            </div>
                                            <div class="col-md-1">
                                              <i class="material-icons">keyboard_arrow_right</i>
                                            </div>
                                           </a>                          
                                        </div>
                  
                                        <div class="cartao-line link row">
                                           <a href="#">
                                            <div class="col-md-1">
                                              <i class="material-icons">videocam</i>
                                            </div>
                                            <div class="col">
                                              <p>9 evidências <span>aguardando mentoria</span></p>
                                            </div>
                                            <div class="col-md-1">
                                              <i class="material-icons">keyboard_arrow_right</i>
                                            </div>
                                           </a>                              
                                        </div>
                  
                                        <div class="cartao-line link row">
                                          <a href="#">
                                            <div class="col-md-1">
                                              <i class="material-icons">record_voice_over</i>
                                            </div>
                                            <div class="col">
                                                <p>4 feedback <span>aguardando mentoria</span></p>
                                            </div>
                                            <div class="col-md-1">
                                                <i class="material-icons">keyboard_arrow_right</i>
                                            </div>     
                                          </a>                
                                        </div>
                  
                                        <div class="cartao-comandos row">
                                          <div class="col text-right">
                                            <button type="button" class="cartao-buttons btn btn-light">PRÉ-VISUALIZAR</button>
                                            <button type="button" class="cartao-buttons btn btn-info">VER MENTORADOS</button>
                                          </div>                          
                                        </div>                     
                                    </div>

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
import AppNotificacao from './components/notificacoes/notificacoes.vue'
import AppProfile from './components/profile/profile.vue'

export default {
  components: {
    'app-notificacao': AppNotificacao,
    'app-profile': AppProfile
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

.wrapper .sideMenu {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    margin: 65px auto auto;
    transition: all ease 1s;
    transform: translateX(0);
    z-index: 2000;
    background-color: white;
}

@media (min-width: 992px) {
    .wrapper .sideMenu {
        display: contents;
    }
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

.sidebar {
    text-align: center;
    background-color: #F5F5F5;
}

.titulo {
    background-color: #FAFAFA;
    padding: 30px 10px 30px 30px;
    color: #424242;
    border-bottom: 1px solid #EEEEEE;
    margin: 0;
  }

  .menu-link i {
    display: block;
  }
  
  .menu-link {
    width: 60px;
    height: 100px;
    color: #868686;
  }

  .menu-link:hover {
    color: #868686;
    text-decoration: none;
}
  
  .menu-item { 
    padding: 20px 0 20px;
    width: 100px;
    font-size: 13px;
  }
  
  .menu-item:hover {
    background-color: lightgray;
  }


.search-form .form-group {
    float: right !important;
    transition: all 0.35s, border-radius 0s;
    width: 32px;
    height: 32px;
    background-color: #F5F5F5;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset;
    border-radius: 25px;
  }
  .search-form .form-group input.form-control {
    padding-right: 20px;
    border: 0 none;
    background: transparent;
    box-shadow: none;
    display:block;
  }
  .search-form .form-group input.form-control::-webkit-input-placeholder {
    display: none;
  }
  .search-form .form-group input.form-control:-moz-placeholder {
    /* Firefox 18- */
    display: none;
  }
  .search-form .form-group input.form-control::-moz-placeholder {
    /* Firefox 19+ */
    display: none;
  }
  .search-form .form-group input.form-control:-ms-input-placeholder {
    display: none;
  }
  .search-form .form-group:hover,
  .search-form .form-group.hover {
    width: 99%;
    border-radius: 4px 25px 25px 4px;
  }
  .search-form .form-group span.form-control-feedback {
    position: absolute;
    top: -1px;
    right: 12px;
    z-index: 2;
    display: block;
    width: 34px;
    height: 34px;
    line-height: 34px;
    text-align: center;
    color: #616161;
    left: initial;
    font-size: 20px;
  }
  
  .filtro {
    padding: 0;
    background-color: #F5F5F5;
    width: 32px;
    height: 32px;
    border-radius: 25px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset;
    line-height: 30px;
  }
  
  .filtro i {
    color: #616161;
    font-size: 20px;
    vertical-align: middle;
  }
  
  .filtros {
    margin-top: 30px;
  }

  
  .cartoes {
    margin: 0 auto;
  }
  
  .cartao {
    box-shadow: 0px 2px 8px #00000029;
    opacity: 1;
    padding: 0;
  }


.cartao-line {
    border-bottom: 1px solid #EEEEEE;
    margin: 0 15px 0 15px;
    padding: 16px 0;
  }
  
  .cartao-line i {
    color: #7F7F7F;
  }
  
  .cartao-line.link.row:hover {
    background-color: lightgray;
  }

  .link a {
    color: #424242;
    display: contents;
  }
  
  .link a:hover {
    text-decoration: none;
  }
  
  .link p {
    font-weight: bold;
    font-size: 14px;
  }
  
  .link p span {
    font-weight: lighter;
  }
  
  .dot {
    height: 60px;
    width: 60px;
    background-color: #479AC5;
    border-radius: 50%;
    display: inline-block;
  }

  
.img {
    text-align: center;
    padding-top: 16px;
  }
  
.processo {
    font-size: 16px;
    color: #424242;
    font-weight: bold;
    margin-top: 16px;
}

.etapa {
    font-size: 12px;
    color: #7F7F7F;
    position: absolute;
    bottom: 4px;
}
  
.cartao-comandos {
    margin: 9px 16px;
}

.cartao-buttons {
    font-size: 14px;
    margin: 9px;
    font-weight: bold;  
}

.cartao-buttons.btn.btn-light {
    color: #328EBA;
}

</style>