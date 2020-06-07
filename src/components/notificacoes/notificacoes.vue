<template>
    <div class="notificacoes">
        <a href="#">
            <img src="src/assets/icon-notifications.svg" alt="">
            <span class="badge badge-danger">
                <slot></slot>
            </span>
        </a>
    </div>    
</template>

<script>
export default {
    name: 'app-notificacao'
}
</script>

<style scoped>
.notificacoes {
  top: 15px;
  position: relative;
}

.badge.badge-danger {
    top: -8px;
    position: relative;
    right: 18px;
    font-size: x-small;
}
</style>