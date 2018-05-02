/**
 * long description for the file
 *
 * @summary Controls Alerts Popups
 * @author Cliff Crerar
 *
 * Created at     : 2018-04-09 23:07:07 
 * Last modified  : 2018-05-02 15:30:37
 */

module.exports = function (alertType) {
    $(alertType).slideDown();
    if (alertType != '#subjectWarning') {
        setTimeout(function () {
            $(alertType).slideUp();
        }, 5000);
    }
    $('.alert').on('click', function (ev) {
        //console.log($(ev.currentTarget));
        $(ev.currentTarget).slideUp();
    });
};