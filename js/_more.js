/**
 * long description for the file
 *
 * @summary Additional JS added by INFINITY ARC
 * @author Cliff Crerar
 *
 * Created at     : 2018-04-10 22:34:47 
 * Last modified  : 2018-04-30 15:15:39
 */

$(window).on('load', function () {
    setTimeout(function () {
        $('#loadingDiv').fadeOut(2000);
    }, 2000);
});

/* Functions that must run when document is ready */

$(document).ready(function () {
    $('.nav-menu').onePageNav();

    /* Resolve about us element hiegh issue */
    // Finds the tallest image in all the objects
    function desktopAboutView() {
        var imgHeight = 0; // declare image adjust variable
        var pHeight = 0; // devlare paragraph hight adjust variable
        $('.about-col>.img').each(function (i, img) {
            var imgHeightCheck = $(img).height(); // get the hieght of the current element
            if (imgHeightCheck > imgHeight) {
                imgHeight = imgHeightCheck; // if the current element is higher then assign the current element hieght
            }
        });
        //console.log(imgHeight);
        imgHeight = 233;
        // Finds the tallest paragraph in all the objects
        $('.about-col>.title-text>p').each(function (i, p) {
            //console.log($(p).height());
            var pHeightCheck = $(p).height(); // get the hieght of the current element
            if (pHeightCheck > pHeight) {
                pHeight = pHeightCheck; // if the current element is higher then assign the current element hieght
            }
        });
        //console.log(pHeight);
        console.log('IMGH: ', imgHeight, 'PH: ', pHeight);
        $('.about-col>.img').height(imgHeight); // Correct all images hieght
        var h2InnerH = $('.about-col>.title-text>h2').height(); // get h2 inner hieght
        var h2MarginT = Number(($('.about-col>.title-text>h2').css('margin-top').replace('px', ''))); // get h2 top margin and convert to number
        var h2MarginB = Number($('.about-col>.title-text>h2').css('margin-bottom').replace('px', '')); // get h2 bottom margin and convert to number
        console.log(h2InnerH, h2MarginT, h2MarginB);
        $('.about-col>.title-text').height(pHeight + h2InnerH + h2MarginT + h2MarginB); // Assign section section of about objects hieght
    }

    // Only corrects about us card objects for desktop view
    if (screen.width > 414) {
        desktopAboutView();
    }

    /* ON CLICK SEND MAIL */
    $('#sendBtn').on('click', function () {
        var msg = {
            name: $('#name').val(),
            email: $('#email').val(),
            subject: $('#subject').val(),
            message: $('#message').val()
        };
        console.log('sendMail');
        //console.log(validateMail);
        console.log(msg);
        validateMail(msg);
    });
});