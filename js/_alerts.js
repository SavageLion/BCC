/**
 * long description for the file
 *
 * @summary Controls Alerts Popups
 * @author Cliff Crerar
 *
 * Created at     : 2018-04-09 23:07:07 
 * Last modified  : 2018-04-29 15:08:31
 */

//module.exports = (alertType) => {
var showAlert = (alertType) => {
    $(alertType).slideDown();
    setTimeout(() => {
        $(alertType).slideUp();
    }, 5000);
    $('.alert').on('click', (ev) => {
        //console.log($(ev.currentTarget));
        $(ev.currentTarget).slideUp();
    });
};