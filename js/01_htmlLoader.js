/**
 * long description for the file
 *
 * @summary Loads HTML files in the correct order
 * @author Clifford Crerar
 *
 * Created at     : 2018-04-29 18:17:51 
 * Last modified  : 2018-04-29 20:32:58
 */

/* * * * * * * * * * * * * * * * */
/*     IMPORTING HTML FILES      */
/* * * * * * * * * * * * * * * * */

/* 1.  ANALYTICS SCRIPT */
/* 1.  LOADER           */ //import loader from '../html/01_loader.html';
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

/* 0.  */
/* 1.  */ //$('body').append(loader);
/* 2.  */ $('body').append(navigation);
/* 3.  */ $('body').append(home);
/* 4.  */ $('body').append(about);
/* 5.  */ $('body').append(services);
/* 6.  */ $('body').append(portfolio);
/* 7.  */ $('body').append(team);
/* 8.  */ $('body').append(contact);
/* 9.  */ $('body').append(footer);
/* 10. */ $('body').append(alerts);