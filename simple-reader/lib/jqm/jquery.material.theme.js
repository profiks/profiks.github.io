(function ($) {
  $(document).ready(function() {
    $(document).on('change', 'input, textarea', function () {
      if($(this).val().length !== 0) {
        $(this).parent('div').addClass('ui-active');
      } else {
        $(this).parent('div').removeClass('ui-active');
      }
    });

    $(document).on('click.ui-card', '.ui-card', function (e) {
      if ($(this).find('.ui-card-reveal').length) {
        if ($(e.target).is($('.ui-card-reveal .ui-card-title')) || $(e.target).is($('.ui-card-reveal .ui-card-title i'))) {
          $(this).find('.ui-card-reveal').removeClass('open').addClass('close');
        }
        else if ($(e.target).is($('.ui-card .activator')) ||
                 $(e.target).is($('.ui-card .activator i')) ) {
          $(this).find('.ui-card-reveal').removeClass('close').addClass('open');
        }
      }
    });
  });
}( jQuery ));
