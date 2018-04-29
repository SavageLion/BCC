/**
 * long description for the file
 *
 * @summary Additional JS added by INFINITY ARC
 * @author Cliff Crerar
 *
 * Created at     : 2018-04-10 22:34:47 
 * Last modified  : 2018-04-29 21:07:20
 */

$(window).on('load', function () {
    setTimeout(function () {
        $('#loadingDiv').fadeOut(2000);
    }, 2000);
});

/* Functions that must run when document is ready */

$(document).ready(function () {
    $('.nav-menu').onePageNav();
});

/* Resolve about us element hiegh issue */
var blockHAdj = 0; // declare block adjust variable
var objHeight = 0; // declare image adjust variable
var titleHAdj = 0; // declare title adjust variable
var parHAdj = 0; // devlare paragraph hight adjust variable
$('.about-col').each(function (i, el) {
    console.log($(el).height());
    var objHeightCheck = $(el).height(); // get the hieght of the current element
    if (objHeightCheck > objHeight) {
        objHeight = objHeightCheck; // if the current element is higher then assign the current element hieght
    }
});
$('.about-col').css('height', objHeight);
console.log(objHeight);
/*$('.about-col').each(function (i, el) {

    // find the largest img height
    var imgHCheck = $();
    console.log(imgHCheck);
    if (imgHCheck > imgHAdj) {
        imgHAdj = imgHCheck;
    }

    // Find largest title area
    var titleHCheck = $(el).find('.title').outerHeight();
    if (titleHCheck > parHAdj) {
        titleHAdj = titleHCheck;
    }

    // Find largest block hieght
    var blockHCheck = $(el).height();
    if (blockHCheck > blockHAdj) {
        blockHAdj = blockHCheck;
    }

    //console.log('imgH: ',imgHCheck, 'titleH: ',titleHCheck, 'blockH: ',blockHCheck);
});
var titleMarginTop = $('.about-col').find('.title').css('margin-top').replace('px', '');
var titleMarginBottom = $('.about-col').find('.title').css('margin-bottom').replace('px', '');
var parPadding = $('.about-col').find('p').css('padding-bottom').replace('px', '');
parHAdj = blockHAdj - titleHAdj - imgHAdj - titleMarginTop - titleMarginBottom + Number(parPadding);
//console.log('F imgH: ',imgHAdj, 'F titleH: ',titleHAdj, 'F blockH: ',blockHAdj, 'F parAdj:', parHAdj);
//var nadj = blockHAdj+parPadding;
//$('.about-col').css('height', (blockHAdj + Number(parPadding))); // Adjust block hieghts 
//$('.about-col>.img').css('height', imgHAdj); // Adjust img hieghts
//$('.about-col>.img>.ImgOverHide').css('height', imgHAdj); // Adjust img hieghts
//$('.about-col>.img>.ImgOverHide>img').css('height', imgHAdj); // Adjust img hieghts
//$('.about-col>h2').css('height', titleHAdj); // Adjust title heights
//$('.about-col>p').css('height', parHAdj); // Adjust paragraphs heights*/

/* ON CLICK SEND MAIL */
$('#sendBtn').on('click', function () {
    var msg = {
        name: $('#name').val(),
        email: $('#email').val(),
        subject: $('#subject').val(),
        message: $('#message').val()
    };
    console.log('sendMail');
    console.log(validateMail);
    console.log(msg);
    validateMail(msg);
});