jQuery(window).load(function () {
    //Background Image carousel
    $('.carousel').carousel({
        interval: false
    });

    $('[data-provide="datepicker"]').each(function () {
        var curDatePicker = $(this);

        curDatePicker.datepicker({
            container: curDatePicker.closest('.date-input-container')
        });
    });
    $('.search-form, .navbar-form').on('change', function () {
        var action = $('option:selected', this).text();
        $(this).attr('action', '/' + action.toLowerCase() + '/');
    }).trigger('change');
});
