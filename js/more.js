/**
 * long description for the file
 *
 * @summary Additional JS added by INFINITY ARC
 * @author Cliff Crerar
 *
 * Created at     : 2018-04-10 22:34:47 
 * Last modified  : 2018-04-12 20:03:58
 */

 $(window).load(function(){
     setTimeout(function(){
        $('#loadingDiv').fadeOut(2000);
     }, 2000);
 });

 /* Functions that must run when document is ready */

$(document).ready(function(){
    $('.nav-menu').onePageNav();
});