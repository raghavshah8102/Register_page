$(document).ready(function(){
    $("#name").on('blur',function(){
        validateFullName();
    }).on('focus',function(){
        $('#name-error').hide();
    });
    $('#email').on('blur',function() {
        validateEmail();
    }).on('focus',function(){
        $('#email-error').hide();
    })
    $('#mobile_no').on('blur',function(){
        validateMobile();
    }).on('focus',function(){
        $('#mobile-error').hide();
    });
    $('#dob').on('blur',function(){
        validateDOB();
    }).on('focus',function(){
        $('#dob-error').hide();
    })
    $('#city').on('blur',function(){
        validateCity();
    }).on('focus',function(){
        $('#city-error').hide();
    });

    $('#registration-form').on('submit',function(e){
        e.preventDefault();

        validateFullName();
        validateEmail();
        validateMobile();
        validateDOB();
        validateCity();

        if($('.error:visible').length === 0){

        data =  $(this).serialize();
        $.ajax({
            type: "POST",
            url: 'register.php',
            data: data,
            success: function(response)
            {
                $('#registration-form')[0].reset();
                alert(response);
           },
           error : function(error) {
            console.log(error);
           }
       });
        }
    });


    function validateFullName(){
        var fullName = $('#name').val();
        if(fullName === ''){
            $('#name-error').text('Full name is required!').show();
        }else if(!isValidFullName(fullName)){
            $('#name-error').text("Full Name should only contain characters!").show();
        }else{
            $('#name-error').hide();
        }
    }
    function isValidFullName(fullName){
        // $('#name-error').css({'display':'none'});
        return /^[A-Za-z\s]*$/.test(fullName);
    }

    function validateEmail(){
        var email = $('#email').val();
        if(email === ''){
            $('#email-error').text('Email is required!').show();
        }else if(!isValidEmail(email)){
            $('#email-error').text('Email is not valid,Please Check it!').show();
        }else{
            $('#email-error').hide();
        }
    }
    function isValidEmail(email){
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function validateMobile(){
        var mobile = $('#mobile_no').val();
        if(mobile === ''){
            $('#mobile-error').text("Mobile Number is required!").show();
        }else if(!isValidMobile(mobile)){
            $('#mobile-error').text('Mobile Number is not valid,Please Check it!').show();
        }else{
            $('#mobile-error').hide();
        }
    }
    function isValidMobile(mobile){
        var mobileRegex = /^\d{10}$/;
        return mobileRegex.test(mobile);
    }

    function validateDOB(){
        var dob = $('#dob').val();
        if(dob === ''){
            $('#dob-error').text("DOB is required!").show();
        }else if(TDate(dob)){
            $('#dob-error').text("The Date must be less than today date").show();
        }
        else{
            $('#dob-error').hide();
        }
    }
    function TDate(dob) {
        var ToDate = new Date();
    
        if (new Date(dob) < ToDate) {
              return false;
         }
        return true;
    }

    function validateCity(){
        var city = $('#city').val();
        if(city === ''){
            $('#city-error').text("City is required!").show();
        }else if(!isValidCity(city)){
            $('#city-error').text('City should only contain characters!').show();
        }else{
            $('#city-error').hide();
        }
    }
    function isValidCity(city){
        // $('#name-error').css({'display':'none'});
        return /^[A-Za-z\s]*$/.test(city);
    }
})