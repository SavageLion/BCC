/**
 * long description for the file
 *
 * @summary short description for the file
 * @author Cliff Crerar
 *
 * Created at     : 2018-04-30 15:58:44 
 * Last modified  : 2018-04-30 15:59:33
 */

module.exports = (data) => {
    console.log(data);

    var validEmail = data.email.match(pattern);
    console.log('validmail ', validEmail);

    if (data.name == '' && (validEmail == null || data.email == '')) {
        $('#email').css('border-color', 'red');
        $('#name').css('border-color', 'red');
        // alert('MESSAGE NOT SENT \n Please enter your email address and name.');
        showAlert('#AlertEmailName');
    } else if (validEmail == null || data.email == '') {
        $('#email').css('border-color', 'red');
        //alert('MESSAGE NOT SENT \n Please enter a valid email address.');
        showAlert('#AlertEmail');
    } else if (data.name == '') {
        $('#name').css('border-color', 'red');
        //alert('MESSAGE NOT SENT \n Please enter your name.');
        showAlert('#AlertName');
    } else {
        //alert('Message sent');
        //console.log(data);
        sendMail(data);
        showAlert('#AlertSent');
        if (data.type == 'quote') {
            $('.modal').modal('hide');
            $('.modal-backdrop').hide();
        } else {
            $('.fbControl').val('');
            if (screen.width <= 414) {
                $('.fbType').children().each(function (i, el) {
                    console.log('index', i);
                    console.log('Element', el);
                    if (i == 0) {
                        $(el).addClass('active');
                    } else {
                        $(el).removeClass('active');
                    }
                });
            } else {
                $('#fbType').val('Compliment');
            }
        }
        //console.log('Message can be sent');
    }
};