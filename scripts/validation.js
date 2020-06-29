$(document).ready(function () {

    // Quick Book Form Validation
    $('#quick-form').validate({
        errorPlacement: function (error, element) {
            error.insertBefore(element);
        },
        rules: {
            quickName: {
                required: true,
                minlength: 3,
                maxlength: 30
            },
            quickPhone: {
                required: true,
                digits: true
            },
            quickDate: {
                required: true
            },
            quickTime: {
                required: true
            },
            quickPeople: {
                required: true
            }
        }
    });

});