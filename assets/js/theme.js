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
    let header = $('.pag-home header');
    $('.pag-home header #inputBuscar').focusin(function () {
        header.siblings().toggleClass('add-blur');
        header.toggleClass('focus');
    });
    $('.pag-home header #inputBuscar').focusout(function () {
        header.siblings().toggleClass('add-blur');
        header.toggleClass('focus');
    });

    // ################################################

    // Animação btn principal
    let btnPrincipal = $('.btn-principal .btn-blur');
    btnPrincipal.on('click', function () {
        btnPrincipal.parent('section').siblings().toggleClass('add-blur');
        $('.btn-principal').toggleClass('aberto');
    });

});