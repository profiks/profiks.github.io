ChefPlaza.MenuViewModel = function (menuId) {
    var self = this;
    //document.getElementById('review').scrollIntoView();

    //self.priceRange = ko.observable("0,300");

    //self.minPrice = ko.computed(function () {
    //    return self.priceRange().split(',')[0];
    //});

    //self.maxPrice = ko.computed(function () {
    //    return self.priceRange().split(',')[1];
    //});
    
    self.submitRequest = function (form) { 
        if ($(form).valid()) {
            $.ajax({
                method: "post",
                //url: ChefPlaza.basePath + "menu/requestmenu/" + menuId,
                //url: ChefPlaza.basePath + "menu/newmenurequest/" + menuId,
                url: "menu/newmenurequest/fakerequest.php",
                data: $(form).serialize(),
                success: function (data) {
                    $('#requestMenuDialog').modal('hide');
                    $('#requestMenuDialogConfirmation').modal('show');
                    //var url = $("#RedirectToThanks").val();
                    //location.href = url;
                    console.info('request success');
                    
                },
                error: function () {
                    $('#requestMenuDialog').modal('hide');
                    $('#requestMenuDialogConfirmation').modal('show');
                    console.error('request not sent');
                }
            });
        }
    }//end submitRequest
    
    return self;
    
}//end ChefPlaza


