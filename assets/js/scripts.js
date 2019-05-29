
$( document ).ready(function() {
    
    $('#valueDonation').keyup(function () {
        $('#displayValue').text($(this).val().slice(0, -3));
    });

    // Mascara
    $(function() {
        $('#valueDonation').maskMoney();
    })

    // Validator
    $("#form-donation").validate({
        // verifica se exite erro
        invalidHandler: function(event, validator) {
            var errors = validator.numberOfInvalids();
            // se tiver erro ele mostra a mensagem e os campos q estão com erros
            if (errors) {
                $(".wrap-error").show();
                $("#form-donation").addClass('was-validated');
            } else {
                $(".wrap-error").hide();
                $("#form-donation").addClass('was-validated');
            }
        },

        // Se não deu erro, envia o form

        submitHandler: function( form, event ){
            event.preventDefault();

            let _recurrence =       $('#recurrence').val();
            let _valueDonation =    $('#valueDonation').val();
            let _firstName =        $('#firstName').val();
            let _lastName =         $('#lastName').val();
            let _email =            $('#email').val();
            let _cpf =              $('#cpf').val();
            let _numberCard =       $('#numberCard').val();
            let _cvvCard =          $('#cvvCard').val();
            let _validity =         $('#validity').val();
            let _accept_contact =   $('#accept_contact').val();
        
            /* Formatando uos dados*/     
            const dados = {
                "recurrence"       : _recurrence,
                "value"            : _valueDonation,
                "complete_name"    : _firstName + ' ' + _lastName,
                "first_name"       : _firstName,
                "last_name"        : _lastName,
                "email"            : _email,
                "document"         : _cpf,
                "card_number"      : _numberCard,
                "cvv"              : _cvvCard,
                "validity"         : _validity,
                "accept_contact"   : _accept_contact,
            };

            // const params = $(form).serialize();

            $.ajax({
				url:        'envia_form.php',
				type:       'post',
				dataType:   'json',
				data:       dados,
				cache: 		false,
				success: function(response) {
                    location.href = "obrigado.html"
				},
				error: function(error) {
					console.log(error)
				}
			});
            return false;
        }

    });
    
    // validação primeiro Nome
    $('#firstName').blur(function() {
        if( !this.value ) {
            $(this).addClass('is-invalid');
        } else{
            $(this).removeClass('is-invalid');
        }
    });
    
    // Validação sobrenome
    $('#lastName').blur(function(){
        if( !this.value ) {
            $(this).addClass('is-invalid');
        } else{
            $(this).removeClass('is-invalid');
        }
    });

    // Validação email
    $('#email').blur(function(){
        if( !this.value ) {
            $(this).addClass('is-invalid');
        } else{
            $(this).removeClass('is-invalid');
        }
    });

    // Validação CPF
    $('#cpf').blur(function(){
        if( !this.value ) {
            $(this).addClass('is-invalid');
        } else{
            $(this).removeClass('is-invalid');
        }
    });

    // Validação card number
    $('#numberCard').blur(function(){
        if( !this.value ) {
            $(this).addClass('is-invalid');
        } else{
            $(this).removeClass('is-invalid');
        }
    });

    // Validação ccv
    $('#cvvCard').blur(function(){
        if( !this.value ) {
            $(this).addClass('is-invalid');
        } else{
            $(this).removeClass('is-invalid');
        }
    });

    // Validação data validação
    $('#validity').blur(function(){
        if( !this.value ) {
            $(this).addClass('is-invalid');
        } else{
            $(this).removeClass('is-invalid');
        }
    });
    

});


