/**
 * long description for the file
 *
 * @summary short description for the file
 * @author Cliff Crerar
 *
 * Created at     : 2018-04-30 15:58:44 
 * Last modified  : 2018-05-02 15:32:44
 */

const showAlert = require('./_alerts.js');
const sendMail = require('./_sendMail.js');

module.exports = function (data) {
    console.log(data);
    var pattern = /^(([^<>()[\]\\.,;:\s@\']+(\.[^<>()[\]\\.,;:\s@\']+)*)|(\'.+\'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var validEmail = data.email.match(pattern);
    //console.log('validmail ', validEmail);

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
        if (data.subject == '') {
            Promise.resolve(showAlert('#subjectWarning'))
                .then(function () {
                    $('#noSubjectYes').on('click', function () {
                        console.log('Send msg no subject');
                        sendMail(data);
                    });
                });

        } else {
            showAlert('#AlertSent');
            sendMail(data);
        }
        //console.log('Message can be sent');
    }
};