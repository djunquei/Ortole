$(document).ready(function () {
    $('#divProtese').hide();
    $('#divOrtese').hide();
    $('#divPalmilhas').hide();
});

$('.btn-tipoproduto').click(function () {
    var btnOldActive = $('.tipoproduto-active');
    var btnNewActive = $(this);

    btnOldActive.removeClass('tipoproduto-active');
    btnNewActive.addClass('tipoproduto-active');

    $('.detalheTipoProduto').hide();
    if (btnNewActive.data('tipo') == 'tutor') {
        $('#divTutorLongo').show();
    }
    else if (btnNewActive.data('tipo') == 'protese') {
        $('#divProtese').show();
    }
    else if (btnNewActive.data('tipo') == 'ortese') {
        $('#divOrtese').show();
    }
    else if (btnNewActive.data('tipo') == 'palmilha') {
        $('#divPalmilhas').show();
    }
});