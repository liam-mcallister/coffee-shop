$(document).ready(function () {

    // Quick Book Form Validation
    $('#quick-form').submit(function (e) {
        e.preventDefault();

        const nameVal = $('#quick-name').val();
        const phoneVal = $('#quick-phone').val();
        const dateVal = $('#quick-date').val();
        const timeVal = $('#quick-time').val();
        const peopleVal = $('#quick-people').val();

        if (nameVal.length === 0) {
            $('#quick-name').before('<span class="quick-form-error">This field is required</span>');
        } else if (nameVal.length < 3 || nameVal.length > 30) {
            $('#quick-name').before('<span class="quick-form-error">Between 3 and 30 characters</span>');
        }

        if (phoneVal.length !== 11) {
            $('#quick-phone').before('<span class="quick-form-error">Enter an 11 digit phone number</span>');
        }

        if (dateVal.length === 0) {
            $('#quick-date').before('<span class="quick-form-error">This field is required</span>');
        }

        if (timeVal === "") {
            $('#quick-time').before('<span class="quick-form-error">This field is required</span>');
        }

        if (peopleVal === "") {
            $('#quick-people').before('<span class="quick-form-error">This field is required</span>');
        }
    });

    // Contact Form Validation
    $('#contact-form').validate({
        errorPlacement: function (error, element) {
            error.insertBefore(element);
        },
        rules: {
            contactName: {
                required: true,
                minlength: 3,
                maxlength: 30
            },
            contactEmail: {
                required: true,
                email: true
            },
            contactMessage: {
                required: true
            }
        }
    });

});