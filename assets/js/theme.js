jQuery(document).ready(function ($) {

    "use strict";

    // Ajuste acesso via navagador
    function ajusteBarraDeNavegação() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    window.addEventListener('resize', () => {
        ajusteBarraDeNavegação();
    });
    ajusteBarraDeNavegação();

    // ################################################

    // Animação input buscar
    $('.pag-home header #inputBuscar').focusin(function () {
        $('.pag-home header').toggleClass('focus');
    });
    $('.pag-home header #inputBuscar').focusout(function () {
        $('.pag-home header').toggleClass('focus');
    });

    // ################################################

    // Animação btn principal
    $('.btn-principal .icon-principal').on('click', function(){
        $('.btn-principal').toggleClass('aberto');
    });

});