<template>
    <div class="filtros row">
        <div class="col-11">
            <form v-on:submit.prevent="" action="" class="search-form">
                <div class="form-group has-feedback">
                <label for="search" class="sr-only">Buscar</label>
                <input v-on:keyup="burcarValor" v-model="valorBuscado" type="text" class="form-control" name="search" id="search" placeholder="buscar">
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
</template>

<script>
export default {
    data() {
        return {
            valorBuscado: ''
        }
    },
    methods: {
        burcarValor: function() {
            this.$emit('filtrar', this.valorBuscado);
        }
    }
}
</script>

<style scoped>
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

.filtro i {
    color: #616161;
    font-size: 20px;
    vertical-align: middle;
}

.filtros {
    margin-top: 30px;
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

</style>