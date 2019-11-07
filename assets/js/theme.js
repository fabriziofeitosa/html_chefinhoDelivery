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

    // ################################################

    /*
    * Replace all SVG images with inline SVG
    */
    jQuery('img.svg').each(function () {
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        jQuery.get(imgURL, function (data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');

            // Add replaced image's ID to the new SVG
            if (typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if (typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass + ' replaced-svg');
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
            if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
            }

            // Replace image with new SVG
            $img.replaceWith($svg);

        }, 'xml');
    });
});