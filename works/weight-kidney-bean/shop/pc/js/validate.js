$(document).ready(function() {


/*validat4e*/

    // init validation
    $.extend($.validator.messages, {
        required: " is required."
    });

    $("#outform").validate({
        ignore: ['hidden'],
        invalidHandler: function(form, validator) {
            var errors = validator.numberOfInvalids();
            var label = '';
            if (errors) {
                label = $(validator.errorList[0].element).parents('.form-group').children('label').text().split(':')[0]
                alert(label + validator.errorList[0].message);
                validator.errorList[0].element.focus();
                internalLink = false;
            }
        },
        errorPlacement: function(error, element) {
            // to not show
        },
        focusInvalid: false,
        onfocusout: false
    })


});//end DOM