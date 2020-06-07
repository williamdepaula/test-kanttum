<template>
    <div>
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
    </div>
</template>

<style scoped>

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

.sidebar {
    text-align: center;
    background-color: #F5F5F5;
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

</style>