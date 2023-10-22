$(document).ready(function () {

    var phoneWpp = '5511974216669';
    var msgExperimenteConforto = "Quero%20experimentar%20mais%20conforto%20com%20os%20produtos%20Ortole";
    var msgSaibaMais = "Quero%20saber%20mais%20sobre%20os%20produtos%20Ortole";
    var msgFacaPedidoTutor = "Quero%20saber%20mais%20sobre%20o%20produto%20Tutor%20Longo";
    var msgFacaPedidoProtese = "Quero%20saber%20mais%20sobre%20o%20produto%20Protese";
    var msgFacaPedidoOrtese = "Quero%20saber%20mais%20sobre%20o%20produto%20Ortese";
    var msgFacaPedidoPalmilha = "Quero%20saber%20mais%20sobre%20o%20produto%20Palmilha";

    $('#lnkExperimenteConforto').click(function () {
        window.location.href = 'https://web.whatsapp.com/send/?phone=' + phoneWpp + '&text=' + msgExperimenteConforto;
    });

    $('#lnkSaibaMais').click(function () {
        window.location.href = 'https://web.whatsapp.com/send/?phone=' + phoneWpp + '&text=' + msgSaibaMais;
    });

    $('#lnkFacaPedidoTutor').click(function () {
        window.location.href = 'https://web.whatsapp.com/send/?phone=' + phoneWpp + '&text=' + msgFacaPedidoTutor;
    });

    $('#lnkFacaPedidoProtese').click(function () {
        window.location.href = 'https://web.whatsapp.com/send/?phone=' + phoneWpp + '&text=' + msgFacaPedidoProtese;
    });

    $('#lnkFacaPedidoOrtese').click(function () {
        window.location.href = 'https://web.whatsapp.com/send/?phone=' + phoneWpp + '&text=' + msgFacaPedidoOrtese;
    });

    $('#lnkFacaPedidoPalmilha').click(function () {
        window.location.href = 'https://web.whatsapp.com/send/?phone=' + phoneWpp + '&text=' + msgFacaPedidoPalmilha;
    });

    $('#lnkEntrarContato').click(function () {
        window.location.href = 'https://web.whatsapp.com/send/?phone=' + phoneWpp + '&text=' + msgSaibaMais;
    });

    if ($(window).width() < 576) {

        //var glide = new Glider('.glide', {
        //    slidesToScroll: 1,
        //    slidesToShow: 1.2,
        //    draggable: true
        //});

        var glide = new Glide('.glide');
        glide.on('build.after', function () {
            var slideHeight = $('.glide .glide__slide--active').outerHeight();
            var glideTrack = $('.glide .glide__track').outerHeight();
            if (slideHeight != glideTrack) {
                var newHeight = slideHeight;
                $('.glide .glide__track').css('height', newHeight);
            }
        });

        glide.on('run.after', function () {
            var slideHeight = $('.glide .glide__slide--active').outerHeight();
            var glideTrack = $('.glide .glide__track').outerHeight();
            if (slideHeight != glideTrack) {
                var newHeight = slideHeight;
                $('.glide .glide__track').css('height', newHeight);
            }
        })

        glide.mount();

        var glide2 = new Glide('.glide2');
        glide2.mount();

        $('.removeFooterMobile').remove();
    }
    else {
        $('.glide__slides').removeClass('glide__slides');
        $('.glide__slide').removeClass('glide__slide');
        $('.glide__track').removeClass('glide__track');
    }
});

$('.btn-tipoproduto').click(function () {
    var btnOldActive = $('.tipoproduto-active');
    var btnNewActive = $(this);

    btnOldActive.removeClass('tipoproduto-active');
    btnNewActive.addClass('tipoproduto-active');

    $('.detalheTipoProduto').hide();
    if (btnNewActive.data('tipo') == 'tutor') {
        $('#divTutorLongo').css('display', 'flex');
    }
    else if (btnNewActive.data('tipo') == 'protese') {
        $('#divProtese').css('display', 'flex');
    }
    else if (btnNewActive.data('tipo') == 'ortese') {
        $('#divOrtese').css('display', 'flex');
    }
    else if (btnNewActive.data('tipo') == 'palmilha') {
        $('#divPalmilhas').css('display', 'flex');
    }
});