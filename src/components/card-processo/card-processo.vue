<template>
    <div>
            <div class="cartao">
                <div class="cartao-line row">
                    <div class="img">
                    <span class="dot"></span>
                    </div>
                    <div class="col">
                        <div class="processo row">{{processo.nome}}</div>
                        <div class="etapa row">{{processo.qtd_etapas}} Etapas</div>
                    </div>
                </div>

                <div class="cartao-line link row">
                    <a href="#">
                    <div class="col-md-1">
                    <i class="material-icons">school</i>
                    </div>
                    <div class="col">
                    <p>{{processo.atividades_esperando_mentoria}} atividades <span>aguardando mentoria</span></p>
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
                    <p>{{processo.evidencias}} evidências <span>aguardando mentoria</span></p>
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
                        <p>{{processo.feedbacks}} feedback <span>aguardando mentoria</span></p>
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
</template>
<script>
export default {
    name: 'card-processo',
    props: {
        'processo' : {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
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