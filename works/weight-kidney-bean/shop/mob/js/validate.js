$(document).ready(function() {



    $("#outform").validate({
        rules: {
            FirsName: "required",
            LastName: "required",
            adress: "required",
            city: "required",
            country: "required",
            state: "required",
            zip: "required",
            phone: "required",
            email: {
              required: true,
              email: true
            }
          },
          errorPlacement: function(error, element) {         
             error.insertBefore(element);
         },
           invalidHandler: function(event, validator) {
          // 'this' refers to the form
          var errors = validator.numberOfInvalids();
          if (errors) {
            var message = errors == 1
              ? 'You missed 1 field. It has been highlighted'
              : 'You missed ' + errors + ' fields. They have been highlighted';
            $("div.error span").html(message);
            $("div.error").show();
          } else {
            $("div.error").hide();
          }
        }


    });


});//end DOM