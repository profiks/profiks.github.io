$(document).ready(function() {
    var productName = localStorage.getItem('productName'),
        productPrice = localStorage.getItem('productPrice');

    window.price = productPrice || '25';
    window.productName = productName || 'T-Shirt';

    if ($('.js-product-name').length && $('.js-product-price').length) {
        $('.js-product-name').html(window.productName);
        $('.js-product-price').html('$' + window.price);
    }

    if ($("input[type='number']").length) {
        $("input[type='number']").inputSpinner();
    }

    if ($(".js-custom-slider").length) {
        $(".js-custom-slider").slider().on('slide', function () {
            $('.tui-image-editor').css('transform', 'scale(' + $(this).val() / 100 + ')');
        })
    }

    // var canvas = document.getElementById('constructor-stage-back-canvas');
    // canvas.width        = window.innerWidth;
    // canvas.height       = window.innerHeight;
    // canvas.style.width  = canvas.width.toString() + "px";
    // canvas.style.height = canvas.height.toString() + "px";
    // var ctx = canvas.getContext('2d');
    // var image = new Image();
    // image.width = canvas.width / 2;
    // image.height = canvas.height;
    // image.src = canvas.dataset.image;
    // image.onload = function() {
    //     ctx.drawImage(image, canvas.width / 2 - image.width / 2, 0, image.width, image.height);
    // };

    // $('input[name="groupOfDefaultRadios"]').on('change', function () {
    //     ctx.fillStyle = $(this).val();
    //     ctx.fillRect(canvas.width / 2 - image.width / 2, 0, image.width, image.height);
    //     ctx.drawImage(image, canvas.width / 2 - image.width / 2, 0, image.width, image.height);
    // });

    $('.js-text-buttons button').on('click', function (e) {
        $(this).toggleClass('active');
    });

    $('input[name="groupOfDefaultRadios"]').on('change', function () {
        $('.lower-canvas').css('background-color', $(this).val());
    });

    $('.js-construct').on('click', function (e) {
        e.preventDefault();
        var $this = $(this);

        localStorage.setItem('productName', $this.attr('data-name'));
        localStorage.setItem('productImage', $this.attr('data-product'));
        localStorage.setItem('productPrice', $this.attr('data-price'));

        window.location.href = $this.attr('href');
    });
});
