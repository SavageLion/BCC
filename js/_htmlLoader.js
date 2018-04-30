/**
 * long description for the file
 *
 * @summary Loads HTML files in the correct order
 * @author Clifford Crerar
 *
 * Created at     : 2018-04-29 18:17:51 
 * Last modified  : 2018-04-30 01:24:29
 */

/* * * * * * * * * * * * * * * * */
/*     IMPORTING HTML FILES      */
/* * * * * * * * * * * * * * * * */

/* 1.  ANALYTICS SCRIPT */ //import analytics from '../html/00_analyticScript.html';
/* 1.  LOADER           */ import loader from '../html/01_loader.html';
/* 2.  NAVIGATION BAR   */ import navigation from '../html/02_navigation.html';
/* 3.  HOME             */ import home from '../html/03_home.html';
/* 4.  ABOUT US         */ import about from '../html/04_aboutUs.html';
/* 5.  SERVICES         */ import services from '../html/05_services.html';
/* 6.  PORTFOLIO        */ import portfolio from '../html/06_portfolio.html';
/* 7.  TEAM             */ import team from '../html/07_team.html';
/* 8.  CONTACT          */ import contact from '../html/08_contact.html';
/* 9.  FOOTER           */ import footer from '../html/09_footer.html';
/* 10. ALERTS           */ import alerts from '../html/10_alerts.html';

/* * * * * * * * * * * * * * * * */
/*       INSERT HTML FILES       */
/* * * * * * * * * * * * * * * * */

/* 0.  */ //$('head').append(analytics);
/* 1.  */ $('body').append(loader);
/* 2.  */ $('body').append(navigation);
/* 3.  */ $('body').append(home);
/* 4.  */ $('body').append(about);
/* 5.  */ $('body').append(services);
/* 6.  */ $('body').append(portfolio);
/* 7.  */ $('body').append(team);
/* 8.  */ $('body').append(contact);
/* 9.  */ $('body').append(footer);
/* 10. */ $('body').append(alerts);

/* * * * * * * * * * * * * * * * */
/*    CORRECT PORTFOLIO LINKS    */
/* * * * * * * * * * * * * * * * */

/* IMPORTING IMAGES FOR HREF LINKS */
import pimg1 from '../img/portfolio/1.png';
import pimg2 from '../img/portfolio/2.jpg';
import pimg3 from '../img/portfolio/3.png';
import pimg4 from '../img/portfolio/4.jpg';
import pimg5 from '../img/portfolio/5.jpg';
import pimg6 from '../img/portfolio/6.jpg';
import pimg7 from '../img/portfolio/7.jpg';
import pimg8 from '../img/portfolio/8.jpg';
import pimg9 from '../img/portfolio/9.jpg';
/* ASSIGNING IMAGES FOR HREF LINKS */
$('#p1Link').attr('href', pimg1);
$('#p2Link').attr('href', pimg2);
$('#p3Link').attr('href', pimg3);
$('#p4Link').attr('href', pimg4);
$('#p5Link').attr('href', pimg5);
$('#p6Link').attr('href', pimg6);
$('#p7Link').attr('href', pimg7);
$('#p8Link').attr('href', pimg8);
$('#p9Link').attr('href', pimg9);