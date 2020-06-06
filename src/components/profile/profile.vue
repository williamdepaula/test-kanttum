<template>
    <div>
        <ul class="navbar-nav mr-auto">
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <img src="src/assets/user-profile.png" class="rounded" alt="User image" style="height: 40px;"> 
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">Configurações</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Sair</a>
                    </div>
            </li>            
        </ul>       
    </div>
</template>

<style scoped>

.navbar-nav .dropdown-menu {
    position: absolute;
}

.dropdown-menu.show {
    left: -100px;
}
</style>